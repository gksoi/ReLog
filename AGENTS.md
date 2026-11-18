# ReLog project instructions

## Working with me
- I am new to development. Explain important decisions in plain language.
- Make reasonable decisions for routine implementation details.
- Ask when ambiguity materially affects the product, cost, or architecture.
- Explain tradeoffs and recommend an option when a decision is needed.
- Point out weaknesses in my ideas and suggest practical improvements.

## Product direction
- Build small, complete user journeys that we can try and evaluate.
- Confirm the intended user and success criteria before substantial new features.
- Keep changes focused on the requested outcome.
- Use PRODUCT.md for agreed product requirements when that file exists.

## Implementation
- Prefer simple, maintainable solutions.
- Follow established project patterns before adding new ones.
- Add dependencies only when they provide a clear benefit.
- Keep secrets out of source code and committed files.
- Preserve unrelated work.

## User experience
- Use clear language and consistent interactions.
- For web interfaces, support phone and desktop layouts.
- Include loading, empty, error, and success states where relevant.
- Use accessible labels, keyboard interactions, and readable contrast.

## Testing and readiness
- I want to test the application thoroughly throughout development. Keep it ready for repeatable automated and manual testing at every working milestone.
- Maintain documented setup, start, test, and build commands as the application develops. Include required configuration and safe example environment variables without secrets.
- Provide realistic test data and a repeatable way to seed and reset a separate development or test environment when persistence is introduced. Keep test operations isolated from production data.
- Make new functionality easy for me to try, with clear manual test steps and expected results.
- Cover important user journeys, failure cases, validation, persistence, and regressions with meaningful automated tests appropriate to the change.
- For interface changes, check relevant phone and desktop layouts, keyboard access, and loading, empty, error, and success states. Inspect the running application when tools allow.
- Run relevant checks for each change. Before calling a milestone ready, run the available full test suite and build checks, and exercise its main user journeys.
- Fix failures caused by the change. Clearly report existing failures or environment blockers.
- Never claim a check passed unless it was run. State what was tested, what was not tested, and why.

## Handoff
- Summarize what changed and why.
- State what was verified and any remaining limitations.
- Explain how I can run or try the result, including manual test steps for changed behavior.

## Project commands
The design prototype lives in `sites/relog-motion`. Requires Node.js 22+ and Python 3; no dependency installation or secrets. Run commands from that directory:
- `npm run dev` — local preview at http://localhost:4173.
- `npm test` — validation and metric tests.
- `npm run test:browser` — installed Chrome journey checks at phone/desktop widths and reduced motion; set `CHROME_BIN` on non-macOS systems.
- `npm run test:touch` — Chrome touch/wheel domain and calendar gesture checks.
- `npm run build` — verify static build assets, syntax and file limits.
- `npm run preview:chat` — regenerate the conversation preview.
See `sites/relog-motion/README.md` for manual steps and prototype boundaries.

Presentation website: `sites/relog-presentation` (Node.js 22+, Python 3). From that directory run `npm run dev` (port 4175), `npm run build`, `npm test`, and `npm run test:browser`. No dependencies or secrets. See its README for demo/reference synchronization and manual checks.


## Important rules
* Build modular first. No code files longer than 300 lines of code! Documentation, plans etc. can be as long as needed, but code files must be modular. 
* Think ahead! Do not write code that you know will need to be changed later without planning for that change now. So keep entrypoints stable and isolate logic into smaller modules from the start!
* Do not limit yourself due to the LOC limit! If a task requires more code, split it into multiple files/modules/functions
* Do not add default fallbacks during development phase. Is something fails, let it fail, so we can fix it!
* Do not leavy empty try-catch blocks anywhere!
* Do not reinvent the wheel! Use open source, self-hosted libraries when needed. Ask the user, and help them qualify their selection. 
* Design UI for the end-user, not for the schema! 

## Continuity Ledger (compaction-safe)

Maintain a single continuity file for this workspace: `CONTINUITY.md`.
`CONTINUITY.md` is the canonical briefing designed to survive compaction; do not rely on earlier chat/tool output unless it's reflected there.

### Operating rule
- At the start of each assistant turn: read `CONTINUITY.md` before acting.
- Update `CONTINUITY.md` only when there is a meaningful delta in: Goal/success criteria, Invariants/constraints, Decisions, State (Done/Now/Next), Open questions, Working set, or important tool outcomes.

### Keep it bounded (anti-bloat)
- Keep `CONTINUITY.md` short and high-signal:
  - `Snapshot`: ≤ 25 lines.
  - `Done (recent)`: ≤ 7 bullets.
  - `Working set`: ≤ 12 paths.
  - `Receipts`: keep last 10–20 entries.
- If sections exceed caps, compress older items into milestone bullets with pointers (commit/PR/log path/doc path). Do not paste raw logs.

### Anti-drift rules
- Facts only, no transcripts.
- Every entry must include:
  - a date or ISO timestamp (e.g., `2026-01-13` or `2026-01-13T09:42Z`)
  - a provenance tag: `[USER]`, `[CODE]`, `[TOOL]`, `[ASSUMPTION]`
- If unknown, write `UNCONFIRMED` (never guess). If something changes, supersede it explicitly (don't silently rewrite history).

### Decisions and incidents
- Record durable choices in `Decisions` as ADR-lite entries (e.g., `D001 ACTIVE: …`).
- For recurring weirdness, create a small, stable incident capsule (Symptoms / Evidence pointers / Mitigation / Status).

### Plan tool vs ledger
- Use `update_plan` for short-term execution scaffolding (3–7 steps).
- Use `CONTINUITY.md` for long-running continuity ("what/why/current state"), not micro task lists.
- Keep them consistent at the intent/progress level.

### In replies
- Start with a brief "Ledger Snapshot" (Goal + Now + Next + Open Questions).
- Print the full ledger only when it materially changed or the user requests it.


