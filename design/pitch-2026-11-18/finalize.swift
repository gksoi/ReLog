import Foundation
import PDFKit
import AppKit

guard CommandLine.arguments.count == 5 else {
    fatalError("Usage: finalize.swift draft.pdf notes.json final.pdf preview-directory")
}
let input = URL(fileURLWithPath: CommandLine.arguments[1])
let notesURL = URL(fileURLWithPath: CommandLine.arguments[2])
let output = URL(fileURLWithPath: CommandLine.arguments[3])
let previews = URL(fileURLWithPath: CommandLine.arguments[4], isDirectory: true)
guard let document = PDFDocument(url: input) else { fatalError("Cannot open draft PDF") }
guard document.pageCount == 8 else { fatalError("Expected eight pages, got \(document.pageCount)") }
let notesData = try Data(contentsOf: notesURL)
let notes = try JSONDecoder().decode([String].self, from: notesData)
guard notes.count == 8 else { fatalError("Expected eight source notes") }
document.documentAttributes = [
    PDFDocumentAttribute.titleAttribute: "ReLog - povezan dnevnik vsakdana",
    PDFDocumentAttribute.authorAttribute: "ReLog",
    PDFDocumentAttribute.subjectAttribute: "Produktni pitch, raziskava in predpostavke - 18. november 2026",
]
for index in 0..<document.pageCount {
    guard let page = document.page(at: index) else { fatalError("Missing page") }
    let bounds = page.bounds(for: .mediaBox)
    guard abs(bounds.width / bounds.height - 16.0 / 9.0) < 0.001 else {
        fatalError("Slide is not 16:9")
    }
    let annotation = PDFAnnotation(
        bounds: CGRect(x: bounds.width - 108, y: 20, width: 13, height: 13),
        forType: .text, withProperties: nil
    )
    annotation.contents = notes[index]
    annotation.userName = "Viri in predpostavke"
    annotation.iconType = .note
    annotation.color = NSColor(calibratedRed: 0.70, green: 0.65, blue: 0.55, alpha: 1)
    page.addAnnotation(annotation)
}
guard document.write(to: output) else { fatalError("Failed to write final PDF") }
guard let final = PDFDocument(url: output), final.pageCount == 8 else {
    fatalError("Final PDF could not be reopened")
}
try FileManager.default.createDirectory(at: previews, withIntermediateDirectories: true)
var text = ""
var linkCount = 0
for index in 0..<final.pageCount {
    guard let page = final.page(at: index) else { fatalError("Missing final page") }
    let bounds = page.bounds(for: .mediaBox)
    let scale = CGFloat(1600) / bounds.width
    let image = NSImage(size: NSSize(width: 1600, height: 900))
    image.lockFocus()
    guard let context = NSGraphicsContext.current?.cgContext else { fatalError("Missing rendering context") }
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: 1600, height: 900))
    context.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context)
    image.unlockFocus()
    guard let tiff = image.tiffRepresentation,
          let bitmap = NSBitmapImageRep(data: tiff),
          let png = bitmap.representation(using: .png, properties: [:]) else {
        fatalError("Failed to render page")
    }
    try png.write(to: previews.appendingPathComponent("pdf-\(index + 1).png"))
    guard let pageText = page.string, !pageText.isEmpty else { fatalError("Empty PDF text") }
    text += "\n--- SLIDE \(index + 1) ---\n" + pageText
    let sourceNotes = page.annotations.filter { $0.type == "Text" }
    linkCount += page.annotations.filter { $0.type == "Link" && $0.url != nil }.count
    guard sourceNotes.count == 1, sourceNotes[0].contents == notes[index] else {
        fatalError("Source note did not survive export")
    }
}
guard linkCount >= 14 else { fatalError("Source hyperlinks did not survive export") }
for required in ["Širša", "računajo", "4,99", "49.900", "83,33", "1.500", "Lean Canvas", "Struktura stroškov", "Viri prihodkov", "Težko posnemljiva"] {
    guard text.contains(required) else { fatalError("Missing required PDF text: \(required)") }
}
try text.write(to: previews.appendingPathComponent("pdf-text.txt"), atomically: true, encoding: .utf8)
print("PASS: eight landscape pages, selectable Slovenian text, eight source notes, \(linkCount) hyperlinks, reopened and rendered PDF")
