# XGC Relic & Belt Tracker — replacement files

Replace index.html, styles.css, and app.js; ADD data.js in the same repository root. Leave .nojekyll in place. No build, dependencies, backend, or GitHub write is required. Open index.html to preview or deploy the four files through the existing GitHub Pages setup.

## Features
- Original 18-weapon belt list preserved, including original names/locations.
- All 30 tiered relics, grouped via map filtering.
- Independent completion checkbox and expandable description for every item.
- Effects, prerequisites, ordered unlock-route summaries, and reference links.
- Separate session-only completion, filters and open panels per mode.
- Show remaining only; reset only the selected tracker (including filtered entries).
- Multiple descriptions can remain open. Native details/summary keyboard controls.
- No localStorage, cookies, analytics, or automatic network requests.

## Content limitations
These are expanded unlock-route summaries, NOT exhaustive location-by-location walkthroughs for every puzzle. Exact teddy-part positions, pistol spawns, some ingredient locations, and puzzle cues require the linked sources. Do not advertise this release as containing 30 fully exhaustive walkthroughs. Some source details conflict; these are flagged in the relevant entries (Blood Vials, Dancing Arnie, and Warden weapon naming). The belt label Warden 309 is preserved from the repository although the reference calls it Warden 308. No fake placeholder relics are included. Manual checkbox progress is not connected to the game. Completing the belt weapon list does not automatically check the Wrestling Belt relic unlock.

## Source material
- https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/
- https://timesaver.gg/blog/bo7-best-friends-camo-all-30-relics-checklist
- https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/
- https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode
- Existing repository weapon list supplied in the conversation.

## Manual smoke test
1. Open index.html. Check a belt weapon and open its instructions.
2. Switch to All Relics, open several guides, and check a relic.
3. Switch back: belt check and expanded guide should still be present.
4. Filter relics by map and show remaining only; overall progress stays out of 30.
5. Reset one tracker; the other tracker's progress must remain.
6. Reload: both checklists start fresh.

## Validation performed
Data counts, map distribution, unique IDs, and packaged file presence were checked during generation. No browser runtime testing was performed.
