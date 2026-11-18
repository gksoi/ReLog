# ReLog visual prototype — first draft

Status: editable mobile prototype created on 2026-11-16; final visual and presentation review pending.

Figma: https://www.figma.com/design/psymHzHnXsn8AOO0Qfwcze

Review instructions and verification limits: [FIGMA-REVIEW.md](FIGMA-REVIEW.md).

## Purpose
Help a new user understand ReLog, create a tracker, log an activity, and see progress. Use fictional sample data throughout. This prototype tests navigation and presentation; it does not implement tracking, integrations, or planning algorithms.

## Visual direction
- Mobile first: 390 × 844 frames. Add a 1440 × 1024 desktop Today frame after reviewing the mobile flow.
- Warm canvas #F7F8F4, white cards, dark text #182820, primary green #235C43.
- Secondary text #53645A; muted borders #DDE5DC. Use colour alongside labels rather than as the only signal.
- Fitness accent: green. Expenses accent: blue. Study accent: violet.
- Typography: Inter; 28 px page titles, 20 px section headings, 16 px body, 14 px supporting text.
- Spacing: 8 px base, 24 px page gutters, 16 px card padding, 16 px card corners.
- Reusable components: primary and secondary buttons, tracker cards, progress indicators, labelled inputs, navigation items, and bottom sheets.
- Bottom navigation: Today, Trackers, Calendar. Keep a prominent Add entry action.

## Frames and sample content

### 01 — Today
Heading: “A little progress, every day.” Date below.
Summary: “Your day at a glance.”
Tracker cards: Fitness — 2 of 3 weekly sessions; Expenses — €18 of €30 today; Study — 45 of 90 minutes today.
Today's plan: 09:00 Study, 13:00 Lunch break, 18:00 Volleyball.
Actions: Add entry; Create tracker. Tracker cards open their details.
Show a calm layout with generous spacing, rather than a dense analytics dashboard.

### 02 — Choose a tracker
Heading: “What would you like to track?”
Cards: Fitness, Expenses, Study, Custom tracker.
Fitness description: “Build a routine and see your progress.”
Select Fitness to continue; Back returns to Today.
Only Fitness is connected for this first flow; other categories visibly say “Preview coming later”.

### 03 — Set your goal
Heading: “Make room for movement.”
Goal: “Exercise regularly”. Target: 3 sessions per week.
Optional preferences: “Volleyball and walking. Keep weekends flexible.”
Primary action: Create tracker. Secondary: Back.
Use session frequency for the demonstration rather than personalised health advice.

### 04 — Fitness details
Heading: “Fitness”. Supporting text: “Your weekly rhythm”.
Hero progress: 2 / 3 sessions, with text “One more session to reach your weekly goal”.
Seven-day activity strip: two completed days; clearly labelled weekdays.
Recent entries: Monday — Walk, 30 min; Wednesday — Volleyball, 60 min.
Primary action: Log activity. Secondary action: Edit goal.
Creation opens a variant with “Tracker created” confirmation. In a full new-user path, this variant begins at 0 / 3; the 2 / 3 variant demonstrates an established tracker.

### 05 — Log activity
Bottom sheet over Fitness details.
Fields: Activity (“Volleyball”), Duration (“60” minutes), Date (“Today”).
Primary action: Save entry. Secondary: Cancel.
Provide an empty required-field variant with the inline message “Enter an activity”.
Cancel returns to details without changing progress.

### 06 — Entry saved
Fitness details variant with confirmation “Activity added”.
Established-user example advances from 2 / 3 to 3 / 3 sessions.
New-user example advances from 0 / 3 to 1 / 3 sessions.
Add the new entry to the top of recent activity. Return to Today reflects the same progress.

### Supporting states
- Empty Today: “Your first goal starts here” and Create tracker.
- Empty Fitness: 0 / 3 with Log your first activity.
- Save error: “Entry could not be saved. Try again.” Preserve entered values.
- Calendar preview: static example schedule, labelled as a preview.

## Prototype connections
1. Today → Create tracker → Choose a tracker.
2. Fitness → Set your goal → Create tracker → empty Fitness details.
3. Log activity → entry sheet → Save entry → 1 / 3 details.
4. Back to Today → updated tracker card.
5. Separate returning-user starting point: Today (2 / 3) → Fitness → Log activity → Save → 3 / 3 details.
6. Cancel closes the sheet; Back preserves the expected previous screen.

## Review checks
- Can someone find Create tracker and Add entry without help?
- Can they explain the difference between Today, a tracker, and Calendar?
- Are progress labels understandable without relying on colour?
- Can they complete the main flow and cancel safely?
- Does every connected action have a destination and an obvious way back?
- Review text contrast and touch targets of at least 44 × 44 px.
- Inspect mobile frames for clipped content; assess desktop layout separately.

## Figma readiness
Use editable frames, reusable components, and auto layout. Connect the main flow in Prototype mode and set explicit new-user and returning-user starting points. Verify the actual prototype in presentation mode before marking the milestone ready.
