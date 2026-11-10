# XGC BO7 Zombies Tracker

A free, mobile-friendly manual tracker from Xieon’s Gaming Corner for Black Ops 7 Zombies and Endgame.

[Open the tracker](https://xieons-gaming-corner.github.io/bo7_tracker/) · [Browse the wiki](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki) · [Join Discord](https://discord.gg/Xieon)

No account, installation, or application download is required.

## Available Trackers

| Tracker | Features |
|---|---|
| Wrestling Belt | Independent checklist for 18 weapon requirements, with locations and instructions. |
| All Relics | Relic checklist with map filters, equipped effects, portal prerequisites, trial restrictions, preparation, strategies, and reference links. |
| Operator Skins | Earnable Zombies and Endgame operator rewards, with operator and category filters. |
| Super Easter Egg Toys | Dedicated toy checklist. |
| Zombies Dark Ops | Calling-card checklist with map/mode filters, remaining-only view, separate progress, mastery status, and optional expired beta entry. |
| Special PaP 4 Abilities | Owner-supplied Cursed Mode weapon testing notes, with hide-weapon controls and Show all weapons. |

## How to Use

1. Open the tracker and choose a mode.
2. Read the entry’s requirements and any available guide.
3. Complete the requirement in-game, then check off the entry.
4. Use the available filters to focus on what remains.

The tracker is manual: it does not connect to your game, detect unlocks, verify qualifying kills, or inspect your loadout. Opening a guide or viewing artwork does not complete an entry.

## Zombies Dark Ops Calling Cards

Use the Zombies Dark Ops Tracker to track calling-card challenges independently of the other checklists.

- Filter by map or mode.
- Enable Show remaining only to hide completed entries.
- Include expired beta separately when needed; the beta entry is excluded from active progress.
- View mastery status alongside overall checklist progress.
- View matching calling-card artwork supplied in `assets/dark ops/`.
- Reset Dark Ops without clearing the other trackers.

The artwork patch adds responsive images to matching entries and a Zombies Dark Ops Master image beside the mastery section. It preserves the existing checklist, filters, and progress logic. The expired beta entry has no matching asset in the uploaded collection. Artwork does not verify a challenge’s requirements or confirm an account unlock.

Challenge names marked † are provisional. Chronomancer has conflicting community requirements; read the tracker’s notes and references before attempting it. Do not treat the community checklist as an independently verified in-game inventory.

[Dark Ops Wiki](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki/Dark-Ops-Calling-Card-Challenges) · [Updated wiki-ready guide](docs/wiki/Dark-Ops-Calling-Card-Challenges.md)

### Maintaining Dark Ops Artwork

Keep artwork in `assets/dark ops/` and preserve filename capitalization. The patch maps the Mythic Cynic entry to the existing `MythicCyniv.webp` filename.

To apply or reapply the artwork integration from a local checkout:

```sh
python apply_darkops_artwork.py
```

The script updates `index.html` and, if present, `index (2).html`. It creates `.darkops-artwork.bak` backups and avoids duplicating its own injected additions. New challenge names or unmatched filenames may require updating the patch mapping.

## Operator Skins

Track earnable operator rewards, including BO6 Zombies Main Quest skins that carry forward, Endgame No Fear skins, Zombies Memento Mori crew skins, Directed Mode rewards, the Warden unlock, and Endgame Glitch rewards. Read each entry carefully: some rewards require a specific operator.

[Operator Skins Guide](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki/Operator-Skins)

## Relics and Wrestling Belt

Expand relic entries for equipped effects, portal setup, trial objectives, restrictions, preparation, strategy, and reference walkthroughs. A relic’s equipped effect may differ from its trial modifier.

Check off a relic only after completing its trial and receiving the unlock, not after opening its portal. Map filters change the visible entries, not the overall checklist total. Use the current app’s progress display for its collection total.

The Wrestling Belt weapon checklist and relic checklist are independent. Finishing the 18-weapon checklist does not automatically unlock the relic; complete the in-game trial as well. Follow the relevant guide for qualifying-kill precautions and trial-specific damage restrictions.

[Relics Guide](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki/Relics) · [Wrestling Belt Guide](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki/Wrestling-Belt)

## Special Pack-a-Punch IV Abilities

The Special PaP 4 Abilities view contains owner-supplied Cursed Mode testing notes, not independently verified weapon documentation. Hide individual weapons to simplify the view, or use Show all weapons to restore them.

[Pack-a-Punch IV Wiki](https://github.com/Xieons-Gaming-Corner/bo7_tracker/wiki/Pack%E2%80%90a%E2%80%90Punch-IV-Special-Abilities)

## Progress and Resets

Checkmarks are session-only and are not permanently saved.

- Switching modes keeps each checklist’s independent progress while the page remains open.
- Refreshing or reopening the page clears progress.
- Tabs and devices have independent sessions.
- Progress does not sync with the game or Discord bot.
- Reset controls clear the selected checklist, including completed entries hidden by filters.

Take screenshots before leaving if you need a record. Do not rely on browser session restoration to preserve checkmarks.

## Troubleshooting

### An entry is missing

Disable Show remaining only and clear the relevant filters. In Dark Ops, enable Include expired beta if you are looking for the beta entry.

### An image is missing

Check that the matching asset exists, its filename and capitalization match the artwork mapping, and the artwork patch has been applied. Requirements and checkboxes remain usable without artwork.

### A guide differs from the game

These are community references. Follow current in-game prompts and timers, check uncertainty notes, and report the affected entry with screenshots or other evidence.

## Wiki Publishing

The repository copy at `docs/wiki/Dark-Ops-Calling-Card-Challenges.md` is ready to paste into the GitHub Wiki page of the same name. Committing that file does not automatically publish it to GitHub Wiki; the wiki is maintained separately.

## License and Attribution

You may use, copy, modify, and redistribute this project’s source code, including in your own projects, provided that you credit Xieon’s Gaming Corner (XGC) as the original source.

When sharing or redistributing the code or a modified version, include the following attribution in your README, documentation, or a visible credits section:

> Based on the XGC BO7 Zombies Tracker by Xieon’s Gaming Corner (XGC).
> Original source: https://github.com/Xieons-Gaming-Corner/bo7_tracker

Keep this attribution and any existing license notices with redistributed copies of the source code. Clearly identify your modifications, and do not imply that XGC endorses your project.

This permission applies only to original project code owned by XGC. Call of Duty names, artwork, game assets, and other third-party materials remain the property of their respective owners and are not licensed under these terms.

## Help, Feedback, and Community

Report missing rewards, incorrect requirements, outdated guides, or bugs with the affected entry’s name and relevant screenshots or error messages.

[Join Xieon’s Gaming Corner on Discord](https://discord.gg/Xieon)

Created by [@Xieon](https://github.com/Xieon), Lead Developer for [Xieon’s Gaming Corner](https://github.com/Xieons-Gaming-Corner), as a community resource.

Unofficial fan-made tool. Not affiliated with or endorsed by Activision.
