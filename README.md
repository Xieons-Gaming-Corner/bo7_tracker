# 🏆 XGC Relic & Wrestling Belt Tracker

A free, mobile-friendly checklist and guide hub from Xieon’s Gaming Corner.

Track the 18 weapon requirements for the Wrestling Belt, follow your relic unlock progress, and expand each relic’s guide for portal-opening instructions and trial details—all without an account or application download.

## 🚀 Open the Tracker

[Launch the XGC Relic & Wrestling Belt Tracker](https://xieons-gaming-corner.github.io/wrestling-belt-tracker/)

## ✨ Features

- Two tracker modes: Relic Belt Tracker and All Relics Tracker.
- An 18-weapon Wrestling Belt checklist with weapon locations.
- A 30-relic unlock checklist with map filtering.
- Expandable guides with relic effects, prerequisites, and portal-opening steps.
- Trial objectives, modifiers, preparation, strategies, and warnings.
- Relic artwork where an image is available.
- Portal-image difficulty badges for Grim, Sinister, and Wicked relics.
- Completion counts, percentages, and a progress bar.
- A “Show remaining only” filter.
- Separate session progress for each tracker mode.
- Mobile-friendly layout for phones, tablets, and computers.

## ✅ How to Use

1. Open the tracker.
2. Choose Relic Belt Tracker or All Relics Tracker.
3. Expand an entry to read its description and instructions.
4. Check its completion box when you have met the relevant requirement.
5. Follow your completion count and progress bar.

Opening or closing a guide does not change its completion checkbox.

### 🏆 Relic Belt Tracker

Use this mode to track the weapon requirements during your Wrestling Belt attempt.

- Check off each weapon after completing its required qualifying kills.
- Expand a weapon entry for its location and additional instructions.
- Work toward 18/18 weapons completed.

Completing the weapon checklist is not the same as unlocking the relic. You must still complete the Wrestling Belt trial.

For the trial’s rules and strategy, open:

All Relics Tracker → Totenreich → Wrestling Belt

### 💎 All Relics Tracker

Use this mode to track which relics you have unlocked.

Each expanded relic guide includes:

- Effect when equipped.
- Prerequisites.
- Portal-opening instructions.
- Trial objective.
- Trial modifiers and restrictions.
- Recommended preparation.
- Strategies and stage instructions.
- Warnings, failure conditions, and verification notes where available.
- Reference walkthrough links.

Check off a relic only after completing its trial and receiving the unlock. Opening its portal does not count as completion.

### 🗺️ Filter by Map

In All Relics Tracker, select a map to narrow the displayed entries.

| Map | Relics |
|-----|--------|
| Ashes of the Damned | 9 |
| Astra Malorum | 6 |
| Paradox Junction | 3 |
| Totenreich | 6 |
| Kowakujo | 6 |
| Total | 30 |

The progress count covers the entire selected tracker. Filtering by map does not change the overall relic total of 30.

### 👁️ Show Remaining Only

Enable “Show remaining only” to hide completed entries.

Disable it to display the full checklist again.

You can combine this option with a map filter in All Relics Tracker.

### ✏️ Correct a Mistake

Uncheck an entry to remove its completion status. Your progress updates immediately.

If the entry is hidden, disable “Show remaining only” first.

### 🔄 Switch Tracker Modes

Switching between the two modes preserves each mode’s progress while the page remains open.

Each mode keeps its own:

- Completion checkboxes.
- Expanded guides.
- “Show remaining only” setting.

All Relics Tracker also retains its selected map during mode switching.

The two checklists are independent. Completing the belt weapon list does not automatically mark the Wrestling Belt relic as unlocked.

### 🧹 Reset a Tracker

Select “Reset this tracker” and confirm.

This clears completion checkboxes in the selected mode, including entries hidden by filters. It does not reset completion in the other mode.

## 🖼️ Relic Artwork & Difficulty Badges

Relic entries display artwork when a matching image is available.

Difficulty badges use the corresponding portal image:

- Grim
- Sinister
- Wicked

If an image is unavailable, the entry remains usable. Its name, difficulty text, checkbox, and guide still work.

Clicking an image does not mark the relic complete.

### Asset Locations

Artwork is loaded from paths relative to the application:

~~~text
assets/
├── relics/
│   ├── relic_music_box.webp
│   ├── relic_film_reel.webp
│   ├── relic_film_reel.png
│   └── ...
└── portals/
    ├── grim.png
    ├── sinister.png
    └── wicked.png
~~~

The artwork loader:

- Tries WebP first, then PNG for relic images.
- Supports existing filename exceptions.
- Uses PNG portal images, with WebP alternatives supported.
- Hides unavailable images instead of leaving broken-image icons.
- Uses relative paths rather than branch-specific GitHub URLs.

Keep the assets alongside the application when deploying or merging branches.

## 📖 About the Guides

The guides are community-written reference material, not automatic game verification.

A relic’s equipped effect and its trial modifier are separate mechanics. Read the “Inside the trial” section before activating a portal.

Follow the on-screen instructions and timers during your attempt.

- Enemy compositions can vary.
- HVT examples are not guaranteed spawn lists.
- Recommended equipment is a strategy suggestion unless explicitly identified as required.
- Unconfirmed details and source disagreements are marked.
- Some portal puzzles still require the linked walkthroughs for exact item locations or sequence cues.
- Updates and patches may change quest behavior.

If a guide lists an unverified timer, wave count, damage interaction, or location, do not treat that detail as confirmed.

## ⚠️ Wrestling Belt: Keep Your Weapon Kills Clean

For the safest attempt, avoid effects that can kill zombies instead of the weapon you are working on.

- Avoid Ammo Mods. Their effects can finish off zombies, making your apparent weapon kill count unreliable.
- Avoid Wisp Tea. Its summoned companion kills independently of your weapon.
- Avoid Elemental Pop. It can activate Ammo Mod effects even when you have not equipped an Ammo Mod on the weapon.
- Avoid Electric Cherry. This Elemental Pop augment creates a reload discharge that can damage and potentially finish nearby zombies.

### Before Checking Off a Weapon

Make sure you have completed the required kills with the weapon itself—not with a wisp, an Ammo Mod activation, or reload damage.

If another effect takes a kill, do not assume that kill counted toward the weapon. Earn additional direct weapon kills before moving on.

> These are precautions to reduce kill-count confusion, not a claim that simply buying a perk automatically fails the challenge.
>
> These precautions concern Wrestling Belt weapon kills. Other relic trials may specifically require elemental damage, traps, Field Upgrades, or scorestreaks.
>
> The tracker cannot detect your loadout, verify qualifying kills, or confirm an in-game unlock.

## 📋 Wrestling Belt Weapon Checklist

| # | Weapon | Location |
|---|--------|----------|
| 01 | CODA 9 | Eidskallen Landing |
| 02 | Echo 12 | Eidskallen Landing |
| 03 | MPC-25 | Eidskallen Square |
| 04 | M10 Breacher | Blodheim Hall |
| 05 | MXR-17 | Fishery Island |
| 06 | Peacekeeper Mk 1 | Eidskallen Market |
| 07 | M8A1 | Eidskallen Stave Church |
| 08 | Shadow SK | Tyr’s Shoulder |
| 09 | RK-9 | Dry Dock |
| 10 | X9 Maverick | Dry Dock |
| 11 | VS Recon | Core Foundry |
| 12 | DS20 Mirage | War Factory |
| 13 | Warden 309 | Tyr’s Foot |
| 14 | XM325 | Beacon Island |
| 15 | M34 Novaline | Von List’s Castle — secret room through Tyr’s Head |
| 16 | AK-27 | Ava’s Room — secret room through Tyr’s Head |
| 17 | Dravec 45 | Requiem Sacrifice Room — secret room through Tyr’s Head |
| 18 | Jotunn Star | Wonder Weapon quest or Mystery Box |

> Naming note: The original tracker labels the Tyr’s Foot weapon “Warden 309,” while a reference guide calls it “Warden 308.” Check the in-game wall-buy label. The original tracker name is retained pending confirmation.

## ⏱️ Your Progress Is Temporary

**Progress is session-only.** Neither tracker is designed for long-term saving.

- Switching tracker modes keeps progress while the page remains open.
- Refreshing the page clears both checklists.
- A separate page starts its own independent checklists.
- Progress does not sync between tabs, devices, or Discord.
- There is no account, saved-progress file, or recovery feature.
- Returning through the browser’s back/forward cache resets the checklists.

> Keep the page open during your run. Take screenshots if you want a record before refreshing or leaving.

Browser suspension and session restoration can vary. Do not rely on your browser to preserve progress.

## ❓ Frequently Asked Questions

### Does this track my game automatically?

No. Check and uncheck entries manually. The tracker does not connect to your game or verify completion.

### Does the relic tracker permanently save my unlock collection?

No. Relic checkmarks are temporary, just like weapon checkmarks. Reloading clears them.

### Does finishing all 18 weapons unlock the Wrestling Belt automatically?

No. The weapon checklist tracks the weapon requirements. You still need to complete the in-game relic trial.

### Does checking the Wrestling Belt relic complete the weapon checklist?

No. The two tracker modes are independent.

### Can I open several guides at once?

Yes. Multiple descriptions can remain expanded.

### Why are completed entries missing?

“Show remaining only” may be enabled. Turn it off to display completed entries.

In All Relics Tracker, also check the selected map filter.

### Why does the progress total stay at 30 when I filter by map?

The progress bar tracks your overall relic checklist. The map filter only changes which entries are displayed.

### Why does a relic have no picture?

An image may not be available, its filename may not match, or the asset may not have been deployed. The entry and guide still work without artwork.

### Why does the difficulty text appear without a portal image?

The corresponding portal asset may be missing or unavailable. The text remains visible so the difficulty is still identifiable.

### Are all guide details confirmed?

No. Verification gaps and conflicting source details are marked. Follow in-game prompts and consult the linked references where additional detail is needed.

### Can other people change my checklist?

Other visitors use independent checklists. Your checkmarks do not update anyone else’s page.

### Why did my progress disappear?

Progress is not saved. Reloading, starting a new page, or returning through the browser’s back/forward cache resets it.

### Does this connect to my Discord tracker?

No. The website is separate from the Discord bot’s tracker.

### Do I need to install anything?

No installation is needed to use the hosted tracker. Open it in your browser.

## 💬 Support & Community

Found an incorrect location, a missing image, an outdated trial rule, or a bug?

Include the relic or weapon name, what happened, and a screenshot or error message if available.

[Join Xieon’s Gaming Corner on Discord](https://discord.gg/Xieon)

[![Discord Widget](https://discord.com/api/guilds/829181609156411463/widget.png?style=banner2)](https://discord.gg/Xieon)

---

An unofficial community tool from Xieon’s Gaming Corner. Not affiliated with or endorsed by Activision.
