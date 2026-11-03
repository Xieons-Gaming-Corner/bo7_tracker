"use strict";
const BELT_WEAPONS = [
  [
    "CODA 9",
    "Eidskallen Landing"
  ],
  [
    "Echo 12",
    "Eidskallen Landing"
  ],
  [
    "MPC-25",
    "Eidskallen Square"
  ],
  [
    "M10 Breacher",
    "Blodheim Hall"
  ],
  [
    "MXR-17",
    "Fishery Island"
  ],
  [
    "Peacekeeper Mk 1",
    "Eidskallen Market"
  ],
  [
    "M8A1",
    "Eidskallen Stave Church"
  ],
  [
    "Shadow SK",
    "Tyr’s Shoulder"
  ],
  [
    "RK-9",
    "Dry Dock"
  ],
  [
    "X9 Maverick",
    "Dry Dock"
  ],
  [
    "VS Recon",
    "Core Foundry"
  ],
  [
    "DS20 Mirage",
    "War Factory"
  ],
  [
    "Warden 309",
    "Tyr’s Foot"
  ],
  [
    "XM325",
    "Beacon Island"
  ],
  [
    "M34 Novaline",
    "Von List’s Castle — secret room through Tyr’s Head"
  ],
  [
    "AK-27",
    "Ava’s Room — secret room through Tyr’s Head"
  ],
  [
    "Dravec 45",
    "Requiem Sacrifice Room — secret room through Tyr’s Head"
  ],
  [
    "Jotunn Star",
    "Wonder Weapon quest or Mystery Box"
  ]
];
const RELICS = [
  {
    "id": "relic-1",
    "name": "Lawyer’s Pen",
    "map": "Ashes of the Damned",
    "tier": "Grim",
    "effect": "Shock Mimic props appear around the map.",
    "steps": [
      "Reach round 20 in Cursed mode.",
      "Use Napalm Burst or Molotovs to light the three red candles: the fog cabin, Ashwood Jugger-Nog room, and farm house.",
      "Look for the portal near the barn and complete the trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-2",
    "name": "Dragon Wings",
    "map": "Ashes of the Damned",
    "tier": "Grim",
    "effect": "Normal power-up spawns are disabled.",
    "steps": [
      "Reach round 20.",
      "Take the jump pad from Vandorn Farm toward Janus Towers.",
      "Shoot the three purple portals during the jump, then enter the relic portal and finish its trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-3",
    "name": "Teddy Bear",
    "map": "Ashes of the Damned",
    "tier": "Grim",
    "effect": "Delay between rounds is reduced by 75%.",
    "steps": [
      "Equip Aether Shroud and obtain the Necrofluid Gauntlet.",
      "Find and shoot the ten hidden Mister Peeks parts while using Aether Shroud. The Exit 115 part requires round 20.",
      "Complete the revealed relic trial. Use the linked map walkthrough for all ten positions."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-4",
    "name": "Vril Sphere",
    "map": "Ashes of the Damned",
    "tier": "Sinister",
    "effect": "You can carry only four Perk-a-Colas.",
    "steps": [
      "Start a Tier I or higher Cursed game and reach round 40.",
      "Kill a Doppelghast using a jump pad.",
      "Find the portal at Zarya Cosmodrome and complete the trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-5",
    "name": "Samantha’s Drawing",
    "map": "Ashes of the Damned",
    "tier": "Sinister",
    "effect": "Your weapons change each round, retaining rarity and Pack-a-Punch level.",
    "steps": [
      "Start at Tier I or higher.",
      "Feed Chompy a weapon of each rarity from Common through Legendary.",
      "At round 40 or later, feed Chompy a Ray Gun, then complete the relic trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-6",
    "name": "Focusing Stone",
    "map": "Ashes of the Damned",
    "tier": "Sinister",
    "effect": "Self-Revive Kits are disabled.",
    "steps": [
      "Start at Tier I or higher and reach round 40.",
      "Melee-kill a Zursa to obtain a wine bottle and earn a Legendary T.E.D.D. Task reward.",
      "At the Blackwater Lake cabin, observe the bottle sequence and shoot the bottles in the demonstrated order.",
      "Complete the relic trial. Consult the linked walkthrough for the bottle setup and sequence cues."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-7",
    "name": "Bus",
    "map": "Ashes of the Damned",
    "tier": "Wicked",
    "effect": "Enemies regenerate health.",
    "steps": [
      "Start at Tier II or higher and reach round 60.",
      "Complete an entire round without firing or meleeing, using traps to kill enemies.",
      "Enter the revealed portal and complete the trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-8",
    "name": "Dragon",
    "map": "Ashes of the Damned",
    "tier": "Wicked",
    "effect": "Ammo caches are disabled.",
    "steps": [
      "Start at Tier II or higher.",
      "Complete the main quest at round 60 or above.",
      "Find the relic portal at Blackwater Lake and complete its trial."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-9",
    "name": "Blood Vials",
    "map": "Ashes of the Damned",
    "tier": "Wicked",
    "effect": "All Augments are disabled.",
    "steps": [
      "Start at Tier II or higher.",
      "Listen for the red telephone at ten-round intervals and answer it five times during the same run.",
      "Complete the relic trial. Sources disagree on the first eligible ring; listen from round 10 onward rather than assuming a fixed starting round."
    ],
    "source": "https://www.ign.com/wikis/call-of-duty-black-ops-7/How_to_Find_and_Activate_All_Relics_in_Cursed_Mode"
  },
  {
    "id": "relic-10",
    "name": "Gong",
    "map": "Astra Malorum",
    "tier": "Grim",
    "effect": "Field Upgrade begins charged but can recharge only through Full Power.",
    "steps": [
      "Reach round 20 with Tesla Storm and Dead Wire available.",
      "Lead the lightning-rod zombie to the three lightbulb doorways.",
      "Apply Dead Wire and Tesla Storm at each doorway, then complete the relic trial. Use the linked walkthrough for exact doorway positions."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-11",
    "name": "Seed",
    "map": "Astra Malorum",
    "tier": "Grim",
    "effect": "The Mystery Box is disabled.",
    "steps": [
      "At round 20, find the Common-rarity pistol among its possible spawn points.",
      "Use it to kill the number of zombies matching the current round, within that round.",
      "Complete the revealed trial. The linked walkthrough covers the six pistol spawn locations."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-12",
    "name": "Spider Fang",
    "map": "Astra Malorum",
    "tier": "Sinister",
    "effect": "Perk machine prices never decrease.",
    "steps": [
      "Start at Tier I or higher and reach round 40.",
      "Have Wisp Tea actively targeting O.S.C.A.R.",
      "Land the finishing melee hit on O.S.C.A.R., then find the Library portal and complete the trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-13",
    "name": "Matryoshka Doll",
    "map": "Astra Malorum",
    "tier": "Sinister",
    "effect": "Salvage drop rate is halved.",
    "steps": [
      "Start at Tier I or higher and reach round 40.",
      "Travel to Mars and use C4 around the central-circle meat pieces.",
      "Earn the required explosive kills and complete the revealed trial. The linked walkthrough supplies the precise placement cues."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-14",
    "name": "Golden Spork",
    "map": "Astra Malorum",
    "tier": "Wicked",
    "effect": "Enemies deal double damage.",
    "steps": [
      "Start at Tier II or higher and reach round 60.",
      "Arrange zombies in the Machina Astralis ritual-circle area.",
      "Fire the Mangler Cannon through the Mars portal to kill at least ten zombies, then complete the relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-15",
    "name": "Civil Protector Head",
    "map": "Astra Malorum",
    "tier": "Wicked",
    "effect": "You lose a perk every 100 kills.",
    "steps": [
      "Start at Tier II or higher and reach round 60.",
      "Use Energy Mine at Ol’ Tessie to reveal the light sequence.",
      "Use PhD Flopper beneath the Museum chandeliers in that order, then complete the relic trial. Consult the linked guide for the sequence-reading details."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-16",
    "name": "Rocket",
    "map": "Paradox Junction",
    "tier": "Grim",
    "effect": "Scorestreaks are disabled.",
    "steps": [
      "Use Brain Rot to create a friendly Rad-Hound on normal Nuketown and pet it.",
      "Pet a friendly sentry D.A.W.G. on destroyed Nuketown as well; perform the round-gated interaction after round 20.",
      "Complete the revealed relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-17",
    "name": "Summoning Key",
    "map": "Paradox Junction",
    "tier": "Sinister",
    "effect": "Zombies explode on death and can damage nearby players.",
    "steps": [
      "Start at Tier I or higher.",
      "Use a grenade at the Green House chimney to obtain the collar and Brain Rot a Rad-Hound to obtain the tennis ball.",
      "At round 40 or later, down yourself in the Green House backyard to reveal the grave interaction.",
      "Finish the relic trial. Plan revival support before intentionally going down."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-18",
    "name": "Mangler Helmet",
    "map": "Paradox Junction",
    "tier": "Wicked",
    "effect": "The Arsenal is disabled.",
    "steps": [
      "Start at Tier II or higher and equip the Mister Peeks Field Upgrade.",
      "Use it at the Mystery Box in both versions of Nuketown to take the Mister Peeks figures.",
      "Place the figures on the Yellow House mailbox.",
      "At round 60, melee the red-mouth Shock Mimic and complete the relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-19",
    "name": "Power Switch",
    "map": "Totenreich",
    "tier": "Grim",
    "effect": "Tactical and lethal equipment randomizes each round.",
    "steps": [
      "Find the four statues and count their deer heads.",
      "In Blodheim Hall, throw Combat Axes at the matching pelts in order from the smallest count to the largest.",
      "Complete the revealed relic trial. The earlier summary calling these bear belts was imprecise; follow the statue/pelt matching cues."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-20",
    "name": "Wrestling Belt",
    "map": "Totenreich",
    "tier": "Grim",
    "effect": "Weapon wall-buys randomize each round.",
    "steps": [
      "Pick up the Mister Peeks magazine at the top of the lighthouse BEFORE collecting the Jotunn Star.",
      "Buy each of the 17 wall weapons from its wall-buy and get 50 qualifying kills with each.",
      "Get 50 kills with the Jotunn Star too. Use the Belt Tracker tab for the 18-item checklist.",
      "After Mister Peeks laughs, enter the portal near the Eidskallen Square Arsenal.",
      "Complete the four-wave trial; weapons are removed between waves, so keep Essence for replacements."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-21",
    "name": "Stuffed Elephant",
    "map": "Totenreich",
    "tier": "Sinister",
    "effect": "Health regeneration takes longer to begin.",
    "steps": [
      "Start at Tier I or higher.",
      "Reach round 40 without acquiring any perks.",
      "Find the portal behind Jugger-Nog on Fishery Island and complete the relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-22",
    "name": "Dancing Arnie",
    "map": "Totenreich",
    "tier": "Sinister",
    "effect": "Perk machines dispense random Perk-a-Colas.",
    "steps": [
      "Start at Tier I or higher.",
      "Complete the Blodheim Hall cooking-pot quest using the pot, beer, Chilly Chunks, lobster, and special-round fish.",
      "Use the Jotunn Star to feed zombie souls to Mister Peeks, then complete the trial.",
      "Published summaries disagree on 75 versus 100 soul kills. Follow the in-game completion cue rather than a fixed count; use the linked walkthrough for ingredient locations."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-23",
    "name": "Agarthan Device",
    "map": "Totenreich",
    "tier": "Wicked",
    "effect": "Zombie types randomize each round.",
    "steps": [
      "Start at Tier II or higher as Richtofen.",
      "Collect the plushie, helmet, and radio through the Tyr’s Head secret-room and Group 935 lab sequence.",
      "Place the items at the throne and progress the Echoes of the Damned side quest.",
      "Complete the revealed relic trial. Use the linked walkthrough for the full character-specific side quest."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-24",
    "name": "Music Box",
    "map": "Totenreich",
    "tier": "Wicked",
    "effect": "Enemies take damage only from critical hits.",
    "steps": [
      "Start at Tier II or higher and reach round 60.",
      "From the Tyr’s Head bay window, earn five sniper-rifle critical kills.",
      "Find the portal at Dry Dock and complete the trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-all-relics-effects-locations/"
  },
  {
    "id": "relic-25",
    "name": "Gramophone",
    "map": "Kowakujo",
    "tier": "Grim",
    "effect": "Bullets deal increased damage, but each shot consumes two bullets.",
    "steps": [
      "Collect the two drumsticks in the Gatehouse cells and upstairs Workshop.",
      "Go to the Kitchens drums and repeat the demonstrated drum pattern.",
      "Complete the revealed relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  },
  {
    "id": "relic-26",
    "name": "Druid Stone",
    "map": "Kowakujo",
    "tier": "Grim",
    "effect": "No bleed-out timer; Self-Revive Kits revive instantly.",
    "steps": [
      "Reach round 20 without taking health damage.",
      "Find the relic portal near Wisp Tea in the Flower Garden.",
      "Complete the relic trial. Keep this attempt separate from routes that require taking intentional damage."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  },
  {
    "id": "relic-27",
    "name": "Valkyrie Helmet",
    "map": "Kowakujo",
    "tier": "Sinister",
    "effect": "Lingering in one area creates damaging electrical fields.",
    "steps": [
      "Start at Tier I or higher. Obtain and upgrade the Nekomancer and craft Maneki-Bombs.",
      "Collect five plush mice and scare ONLY four cats. Do not finish the Cat Café yet.",
      "Inside Maneki-Bomb bubbles, use charged Nekomancer shots to earn the four ceramic fragments. Collect each fragment as it appears.",
      "Place the fragments in the Kitchens fireplace, ignite it with a Molotov, and PICK UP the repaired plate.",
      "Scare the fifth cat, activate the Cat Café in the Tea Garden, and collect catnip from the cat tree.",
      "Place the catnip plate beside the large Central Courtyard tree.",
      "Let outer Assault Wave defenses fail so the attack moves to Central Courtyard.",
      "During that courtyard assault, kill with the Nekomancer near the plate until souls finish charging it and Mister Peeks laughs.",
      "Find the portal beside the Training Area ammo crate. Recapture lost wards and restock before entry.",
      "Complete the five-wave trial. Reloading causes damaging explosions: watch health and avoid unnecessary reloads."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  },
  {
    "id": "relic-28",
    "name": "Film Reel",
    "map": "Kowakujo",
    "tier": "Sinister",
    "effect": "You can carry only one Pack-a-Punched weapon.",
    "steps": [
      "Start at Tier I or higher.",
      "Pack-a-Punch ten DIFFERENT weapons during the same match; repeating upgrades on one weapon does not make it a new weapon.",
      "Find the portal in the Tea Garden and complete the relic trial."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  },
  {
    "id": "relic-29",
    "name": "Dragon Egg",
    "map": "Kowakujo",
    "tier": "Wicked",
    "effect": "Elite and Special enemy types in regular rounds are randomized.",
    "steps": [
      "Start at Tier II or higher.",
      "Progress the main quest and correctly identify the Shogun’s killer on the FIRST attempt.",
      "Defeat the Onryo and obtain the Path of Sorrows.",
      "Parry Oni lightning with the sword, then strike the three Japanese symbols with the charged sword.",
      "Complete the revealed relic trial. Use the linked walkthrough for symbol locations and timing."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  },
  {
    "id": "relic-30",
    "name": "Mannequin Turret",
    "map": "Kowakujo",
    "tier": "Wicked",
    "effect": "No starting armor; only gold armor from its wall-buy is available.",
    "steps": [
      "Start at Tier II or higher.",
      "Reach round 60 without failing any Assault Wave defense.",
      "Find the portal in the War Room and complete the trial.",
      "Do not combine this route with Valkyrie Helmet steps that intentionally fail defenses."
    ],
    "source": "https://gamerant.com/black-ops-7-zombies-how-to-get-all-kowakujo-relics-guide/"
  }
];
