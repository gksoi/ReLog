## Relog is a mobile/computer app that does everything a proper logging app should
## who it is for
people use myfitnesspal for tracking calories, banking apps to track expenses, routine apps to track routines, reminders to track their day, periods, strava to track their running and opal to track their studying, if we think broadly , all of those are based on the same prnciples: 
1. set your GOAL
2. the apps set up a plan for you to follow
3. log things that are correlated to that GOAL
4. check your progress
ofcourse there are alot of types of loggig
for example:

### myfitnesspal : 
1. GOAL:"i want to lose 10kg"
2. eat xx number of calories and workout xx number of times
3. LOG : "cheesburger 2x" , "fith day : 1kg less", "ran for 1 hour" ,...
4. progress: "1500 out of 2000 calories for today"


### banking: 
1. GOAL:"i want to have 200$ left each month"
2. analyse the spending and income
3. LOG : "0.8$ coffie" , "new TV 400$"
4. progress: "1500$ out of 2000 dolars spent for this month"

### routine trackers: 
1. GOAL:"i want to play piano 3 times a week" 
2. analyse the free time and other things 
3. LOG : "played piano for 3 hours" 
4. progress: "1 out of 3 dolars spent for this month"


and so on...

what this app would do:
keep everything in one place, expenses, calories, free time, calendar and based on that information give you the optimal results... eg. you are on your period, and you have to be in class for the whole day
-> in order for this day to hit all your monthly requirements (spend under  10$ per day, eat under 2000 calories per day, train volleyball 3times per week) you will have to suffer trough pain, cravings and being under budget and on top of that train three times a day... based on all the info about you, which it knows from your activity(your logs) it will optimize your day plan so you still hit your monthly goal and not suffer this day, for example, knowing your situation it will raise the daily calory intake for 200, daily budget to 12$ and move the intended volleyball to another day, but it will decrease the budget for two other days to 9$ and require 1900 calories on two other days it deems are easier to get trough.

work flow for a new user: 
1. sign in, freemium model, only one tracker allowed , but lets say the user pays
2. signed in.. now we have a prompt: create a tracker
3. we have a few premade trackers for finess, expenses, periods, school
4. the user selects fitness: now he puts in his weight, height...  
5. now the GOAL setion comes - "i want to __"  - some kind of dropdown with "other" at the end if the goal was not among the presets (for example - the user wants to be as healthy during pregnancy as possib)
6. at the end there is also a chat window that asks the user for any kinds of special treatments he wants (eg. he wants a submission counter if he trains BJJ or IPPON counter for JUDO)
7. now the layout with calorie counter , physical activites comes out, here the user can(like with apple widgets) custumize what he sees, if he just wants a clean design with graphs, steps and caloris he ca 

okay so the user created his fitness tracker - whats next, his expense tracker
its based on the same customizable features
what is quite necessary is a calendar integration, there is a built in calendar really similar to google calendar, based on which it can plan your activites.
all the trackers will use "widgets" which will be premade but customizable



## Agreed tracker prototype journey — 2026-11-16

- 2026-11-16 [USER] Every tracker opens as a full page with Today, These days, Week and Month views, following the supplied designs. Remove decorative coloured circles beside tracker names.
- 2026-11-16 [USER] Fitness: if no workout is logged today, show historical statistics; graph workout calories and running distance/pace. Show selected-period energy totals and deficit/surplus.
- 2026-11-16 [USER] Confirmed workout calories are entered, pace is calculated from distance and duration, and energy balance uses separate food intake and total daily burn. Use fictional demo history.
- 2026-11-16 [USER] Health focuses on sleep and recovery. Supplied references include sleep, water and resting heart rate. Expenses shows spending/budget/categories with the same period controls.
- 2026-11-16 [CODE] Prototype periods: Today = one date; These days = last three days; Week = last seven; Month = last thirty, all inclusive. Demo date is fixed at 19 November 2026 for repeatable testing. Data remains memory-only and resets on reload.


### 2026-11-16 — Entry selection and shared context
- Add entry activates the original stronger coloured edges and a brief shine. Native scrolling preserves this mode across all built-in/custom trackers; card taps open logging, outside taps/Escape/Log exit. Decorative title dots remain removed.
- In entry mode New tracker becomes Other? with a terracotta arrow, opening the supplied Anything else? layout with six quick picks and an optional description.
- Saving creates dated shared context visible across tracker pages. It does not change numeric goals or statistics; automatic adjustments remain future product work. Demo context resets on reload.

### 2026-11-16 — Button styling correction
- User clarified the screenshots describe behaviour, not a visual copy. Keep the established button sizes, shapes and fonts. Add entry stays labelled Add entry and turns black in entry mode; New tracker changes only its label to Other?. Remove the copied serif pills and circular arrow.


### 2026-11-16 — Domain navigation and built-in calendar
- [USER] Remove “A little progress, every day” and “At a glance”. Keep every tracker visible on one main page, grouped by domain; the strip jumps to sections, never filters. Left/right swipes navigate domains, with subtle background changes.
- [USER] Confirmed editable fictional schedule for Anna. Calendar is reached at the end: first scrolling gesture stops, short subsequent pull peeks and snaps back, long subsequent pull opens. Direct button provides keyboard/mouse access.
- [USER] Calendar periods: Today; today + next two days; current Monday–Sunday week; complete calendar month. These plan ahead; tracker statistics retain historical ranges.
- [CODE] Demo uses seven trackers in five domains, ten scheduled events, and the existing fixed 19 Nov 2026 date. Events link optionally to a tracker; scheduling does not create completed logs. Add/edit/delete and validation are local to the current session; reload resets. No external calendar sync or recurrence.


### 2026-11-17 — Fast logging and iPhone widgets

- 2026-11-17 [USER] Put strong emphasis on interactive iPhone widgets that let users log activities through taps without invoking AI. These are system widgets in addition to configurable in-app tracker widgets.
- 2026-11-17 [USER] Provide a fast manual logging path inside the app as well; AI is optional for free-text interpretation, not required for ordinary structured logging.
- 2026-11-17 [USER] Reach every supported logging flow in fewer than 8 clicks/taps. Eight is already excessive, not a target to design toward.
- 2026-11-17 [ASSUMPTION] Proposed design target for frequent quick entries: 1–3 taps where feasible. Not yet a confirmed numeric requirement. Measure access-to-entry and completed-entry steps separately, with an explicit start surface; exact full-entry measurement remains open.
- 2026-11-17 [ASSUMPTION] Proposed architecture: widget/manual inputs use the same validation, source events and cross-tracker calculations as AI-parsed inputs, bypassing AI interpretation. Native widget implementation and iOS interaction limits remain to be validated; no native widgets are implemented in the current prototype.


### 2026-11-18 — Predstavitvena spletna stran
- [USER] Ločena stran predstavi ReLog na podlagi dosedanjih raziskav in PDF-jev; ob zgodbi je delujoči prototip. Na koncu sta poslovni model in Lean Canvas.
- [CODE] Slovenska predstavitev v sites/relog-presentation, sedem poglavij, dve lokalno vdelani demo kopiji, knjižnica virov in prenosi. Na telefonu se demo postavi pod uvod. Obstoječa prototipa se ne spreminjata.
- [CODE] Cenovna scenarija 4,99/7,99 EUR, CAC in Canvas so razlage hipotez; ne potrjen cenik, prihodki ali napoved. Produkcijske zmožnosti so ločene od simulacij.
