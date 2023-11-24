const array = [
    {
        character:"37",
        afflatus:"Star",
        damage:"Mental",
        rarity:"six",
        number:"6",
        spell1:"Triangulation",
        spell1d:"1-target attack. Causes 140/210/350% Mental DMG, followed by an additional 40/60/100% Genesis DMG. Gains 1 stack of [Eureka].",
        spell1i:"https://www.prydwen.gg/static/936ec3b9ec821448922856cef015ad79/f0036/37_skill.webp",
        spell2:"Curve Mapping",
        spell2d:"Mass Attack. Causes 70/105/175% Mental DMG to 2 enemies; additionally deals 40/60/100% Genesis DMG, and gives self a stack of [Sturdiness].",
        spell2i:"https://www.prydwen.gg/static/eac8b141243dab9d256840967ca797ff/f0036/37_skill2.webp",
        ult:"Realm of Numbers and Geometry",
        ultd:"Mass Buff. Gives all allies two stacks of [Numeral Perception]; Gains two stacks of [Enlightenment] and adds [Eureka] +2 to self.",
        ulti:"https://www.prydwen.gg/static/2e7eb878c1268a89369fcbc853fdc73c/9b438/37_ult.webp",
        portrait:"https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp",
        splash:"https://www.prydwen.gg/static/4389e1262d7804f6fdb8920be1fcd89b/3cd29/64_full.webp"
    },
    {
        character:"6",
        afflatus:"Intellect",
        damage:"Mental",
        rarity:"six",
        number:"6",
        spell1:"Laws and Restrictions",
        spell1d:"Mass attack. Deals 120/175/305% Mental DMG to 2 enemies. Randomly inflicts 2 effects from [Collection of Debuffs] for 2 rounds. If [Eureka] is at 4 stacks or less, increase it by +1/2/3.",
        spell1i:"https://www.prydwen.gg/static/babf87759f9a182151084091bd5c2877/f0036/30790111.webp",
        spell2:"Duties and Obligations",
        spell2d:"1-target buff. Purifies 2/4/6 random [Stats Down], [Neg Status] or [Control] statuses from the target. Randomly applies 2 effects from [Collection of Buffs] for 2 rounds. If [Eureka] is at 5 or more stacks, consumes 5 stacks and applies [Incantation Empowerment I] to them for 2/2/3 rounds.",
        spell2i:"https://www.prydwen.gg/static/05df476783935a2afc9b0d6ccfc8043d/f0036/30790121.webp",
        ult:"Eternal Revelation",
        ultd:"1-target attack. Deals 700% Mental DMG. If [Eureka] is at 6 or more stacks, consumes 6 stacks and increases this attack's damage by +75% for every [Stats Down], [Neg Status], or [Control] status on the target (stacks up to 4 times).",
        ulti:"https://www.prydwen.gg/static/b7b6c84a311f1938762b24bdc06c933d/9b438/30790131.webp",
        portrait:"https://www.prydwen.gg/static/c3b16c3397767b4737aa9bb4ff4ffafc/60b4d/65_icon.webp",
        splash:"https://www.prydwen.gg/static/05c2fdc5b17a6ec437c21b57bbca5ba7/3cd29/65_full.webp"
    },
    {
        character:"A Knight",
        afflatus:"Spirit",
        damage:"Reality",
        rarity:"six",
        number:"6",
        spell1:"Justice",
        spell1d:"1-target attack. Deals 180/250/450% Reality DMG. If the target is defeated, Moxie +1/2/3 for self.",
        spell1i:"https://www.prydwen.gg/static/9a6da1ebb9d3ef349a39d0ddcf328808/f0036/7_2.webp",
        spell2:"Glory",
        spell2d:"Mass attack. Deals 150/150/225% Reality DMG to 2 enemies. Moxie +0/1/2 for self.",
        spell2i:"https://www.prydwen.gg/static/5edaaf99bb902c62f4586c69277d03ac/f0036/7_3.webp",
        ult:"After AD 778",
        ultd:"Mass attack. Deals 400% Reality DMG to all enemies. If any target is defeated, then inflicts 1 stack of [Rousing Morale] on all allies.",
        ulti:"https://www.prydwen.gg/static/c4bdb27bfb6d70b6e3a33b2169bb8f51/9b438/7_1.webp",
        portrait:"https://www.prydwen.gg/static/12a9276bf3b49bb3cdde0543129d129f/60b4d/7_icon.webp",
        splash:"https://www.prydwen.gg/static/23917698ee50c39ce4f056f87f477db2/3cd29/7_full.webp"
    },
    {
        character:"aliEn T",
        afflatus:"Star",
        damage:"Reality",
        rarity:"three",
        number:"3",
        spell1:"The Witnessed",
        spell1d:"1-target attack. Deals 160/240/400% Reality DMG. If the target's current HP is above 50%, then deals 60/90/150% more Reality DMG.",
        spell1i:"https://www.prydwen.gg/static/ea437f325549c03c6580c9ab62466ce9/f0036/alien2.webp",
        spell2:"No Ill Intent",
        spell2d:"Self counter. Enter [Taunt] and DMG Taken -40/40/60% for 1/2/3 rounds.",
        spell2i:"https://www.prydwen.gg/static/247999d535adc3f4bd874d6c64a19f76/f0036/alien3.webp",
        ult:"Future Interstellar War: Prelude",
        ultd:"Mass attack. Deals 200% Reality DMG and inflicts 1 round of [Disarm] and [Silence] statuses on all enemies.",
        ulti:"https://www.prydwen.gg/static/7177131996954c9c6d0e31a809a8fc73/9b438/alien1.webp",
        portrait:"https://www.prydwen.gg/static/6cf6ab0fdd35e80dcab03911bf5f9ecc/60b4d/40_icon.webp",
        splash:"https://www.prydwen.gg/static/b288265911861f365493edbb728b5b26/3cd29/40_full.webp"
    },
    {
        character:"An-an Lee",
        afflatus:"Plant",
        damage:"Reality",
        rarity:"six",
        number:"6",
        spell1:"Taoist Rune",
        spell1d:"1-target attack. Deals 200/300/350% Reality DMG and inflicts [Daze] status for 0/0/1 round.",
        spell1i:"https://www.prydwen.gg/static/14e35410a6e58d0d5a123759b7f0c9c3/f0036/anan2.webp",
        spell2:"Lily Nectar",
        spell2d:"Mass buff. DMG Dealt +15/20/30% and DMG Taken -15/20/30% for all allies. Lasts 2 rounds.",
        spell2i:"https://www.prydwen.gg/static/42fa2358f9b505a65c56646a752b0f6b/f0036/anan3.webp",
        ult:"Scientific Ghost Buster",
        ultd:"Mass attack. Deals 400% Reality DMG to all enemies. The caster enters [Empower Incantation I] status for 2 rounds.",
        ulti:"https://www.prydwen.gg/static/3d6b4bcd55f59fad95da7e049b836e0b/9b438/anan1.webp",
        portrait:"https://www.prydwen.gg/static/0b86bc3c4710ab7fb76f3c30adfd1283/60b4d/0_icon.webp",
        splash:"https://www.prydwen.gg/static/e7e861f02dea05e98c915de2e91191ba/3cd29/0_full.webp"
    },
    {
        character:"APPLe",
        afflatus:"Star",
        damage:"Mental",
        rarity:"four",
        number:"4",
        spell1:"Iridescent White",
        spell1d:"1-target attack. Deals 200/300/500% Mental DMG.",
        spell1i:"https://www.prydwen.gg/static/e1fa7d0a1ba5b13bd61f13fedbe2a987/f0036/apple2.webp",
        spell2:"Equal Amount of Light",
        spell2d:"1-target attack. Deals 150/225/375% Mental DMG. HP +(the caster's ATK x40/60/100%) for the ally with the lowest HP.",
        spell2i:"https://www.prydwen.gg/static/64f58d4850143875cfd54952f0ac2e7a/f0036/apple3.webp",
        ult:"Insignifigant Achievements",
        ultd:"Mass attack. Deals 300% Mental DMG to all enemies. HP +(the caster's ATK x100%) for the ally with the lowest HP percentage.",
        ulti:"https://www.prydwen.gg/static/18aef3bba63978ec4d3660f7b163c6ae/9b438/apple1.webp",
        portrait:"https://www.prydwen.gg/static/0b98cc2a98a7711123e8fa39ae258700/60b4d/30_icon.webp",
        splash:"https://www.prydwen.gg/static/b29310e67a7ec7d34248ea76c4958d7b/3cd29/30_full.webp"
    },
    {
        character:"Centurion",
        afflatus:"Beast",
        damage:"Reality",
        rarity:"six",
        number:"6",
        spell1:"Victorious General",
        spell1d:"1-target attack. Deals 180/270/450% Reality DMG plus (the caster's Moxie x8/12/20%) Reality DMG.",
        spell1i:"https://www.prydwen.gg/static/59ed29f293826b5ac4f3bd5d9ab55a95/f0036/cent2.webp",
        spell2:"Outdoor Superstar",
        spell2d:"Mass attack. Deals 150/150/225% Reality DMG to 2 enemies. Moxie +0/1/2 to self.",
        spell2i:"https://www.prydwen.gg/static/b89962ba8c18a0a972f6bd4aae9c4e17/f0036/cent3.webp",
        ult:"Reality Show Premier",
        ultd:"Mass attack. Deals 300% Reality DMG and inflicts 1 stack of [Weakness] on all enemies.",
        ulti:"https://www.prydwen.gg/static/c468a40993bffe52024fea2f979042a6/9b438/cent1.webp",
        portrait:"https://www.prydwen.gg/static/191228ad7e866fba991582aaafdce40b/60b4d/5_icon.webp",
        splash:"https://www.prydwen.gg/static/6ceccd2ad47168bd903b41b162eb6ad9/3cd29/5_full.webp"
    },
    {
        character:"Baby Blue",
        afflatus:"Star",
        damage:"Mental",
        rarity:"five",
        number:"5",
        spell1:"Tea Party",
        spell1d:"1-target attack. Deals 200/200/350% Mental DMG. Mental DEF -0/25/35% for the target for 0/2/3 rounds.",
        spell1i:"https://www.prydwen.gg/static/7c4188a1b00867dafd1122d65174ed8e/f0036/bbb2.webp",
        spell2:"Cough Syrup",
        spell2d:"Mass debuff. DMG -15/20/25% and DMG Taken +15/20/25% for all enemies for 2/2/3 rounds.",
        spell2i:"https://www.prydwen.gg/static/7a2934d9268c9622e03537fcba02edd9/f0036/bbb3.webp",
        ult:"Tea with Friends",
        ultd:"Mass attack. Deals 250% Mental DMG to all enemies. If the target is in [Stats down], [Neg Status], or [Control] statuses, inflicts [Nightmare] status for 1 round on the target.",
        ulti:"https://www.prydwen.gg/static/01155bfa2c09f2b25393daf50c6dd67d/9b438/bbb1.webp",
        portrait:"https://www.prydwen.gg/static/7e7d67396b8dc2368e6acde2f8d4ce2c/60b4d/14_icon.webp",
        splash:"https://www.prydwen.gg/static/6e45ad98f7c5bff5176ede4b1062269f/3cd29/14_full.webp"
    },
    {
        character:"Balloon Party",
        afflatus:"Mineral",
        damage:"Reality",
        rarity:"five",
        number:"5",
        spell1:"Pinata",
        spell1d:"1-target attack. Deals 160/240/400% Reality DMG. If the caster has [Party Balloon] or [Balloon of Innocence], this attack enjoys Penetration Rate +50%.",
        spell1i:"https://www.prydwen.gg/static/c2efb9c275c48e484def260ae8faeeed/f0036/balloon2.webp",
        spell2:"Coughing Weirdo",
        spell2d:"Mass healing. HP +(Lost HP x25/30/40%) for all allies. Gains 0/1/2 [Party Balloon]s.",
        spell2i:"https://www.prydwen.gg/static/23eac6ed37f2103d15f3508d73793347/f0036/balloon3.webp",
        ult:"Good Kids, Bad Adults",
        ultd:"Mass attack. Deals 250% Reality DMG to all enemies. Gives 1 [Balloon of Innocence] and 1 [Party Balloon] to all allies. HP +(Lost HP x10%) for the ally with the lowest HP percentage.",
        ulti:"https://www.prydwen.gg/static/b307114ac8957d4be5601f8360997ebc/9b438/balloon1.webp",
        portrait:"https://www.prydwen.gg/static/7c5aacbd1d7debf7b5e171ef5b8eb21d/60b4d/19_icon.webp",
        splash:"https://www.prydwen.gg/static/c4e78d7f9a01e95c61c6f13aff1d9cd9/3cd29/19_full.webp"
    },
    {
        character:"",
        afflatus:"",
        damage:"",
        rarity:"",
        number:"",
        spell1:"",
        spell1d:"",
        spell1i:"",
        spell2:"",
        spell2d:"",
        spell2i:"",
        ult:"",
        ultd:"",
        ulti:"",
        portrait:"",
        splash:""
    },
    {
        character:"",
        afflatus:"",
        damage:"",
        rarity:"",
        number:"",
        spell1:"",
        spell1d:"",
        spell1i:"",
        spell2:"",
        spell2d:"",
        spell2i:"",
        ult:"",
        ultd:"",
        ulti:"",
        portrait:"",
        splash:""
    },
    {
        character:"Melania",
        afflatus:"Beast",
        damage:"Mental",
        rarity: "six",
        number:"6",
        spell1:"Silent Takedown",
        spell1d:"1-target attack. Deals 200/250/400% Mental DMG, Moxie by -0/1/1 for the target, and Moxie +0/0/1 for the caster. If the caster is in [Thief Master], this attack steals 1/2/3 additional Moxie from the target.",
        spell1i:"https://www.prydwen.gg/static/6ec7c53b8c0248515cb8749829156af1/f0036/30620111.webp",
        spell2:"Clockwork Rats",
        spell2d:"Mass attack. Deals 120/180/300% Mental DMG to 2 enemies. This attack enjoys Leech Rate +20%. If the caster is in [Thief Master], Moxie +1 and extra Leech Rate +30% for the caster.",
        spell2i:"https://www.prydwen.gg/static/cf42c9fbf19661d3f611277676641fa5/f0036/30620121.webp",
        ult:"Ridiculous Eyewitness Testimony",
        ultd:"1-target attack. Deals 650% Mental DMG. Inflicts 1 stack of [Thief Master] on the caster.",
        ulti:"https://www.prydwen.gg/static/5fc248fb1f3053b4353661fd5fa5af64/9b438/30620131.webp",
        portrait:"https://www.prydwen.gg/static/4abbfd75d20606a1f0b2f2eb6ada77a2/60b4d/53_icon.webp",
        splash:"https://www.prydwen.gg/static/750d65af9aac71938bcd80f768aa1541/3cd29/53_full.webp"
    },
    {
        character:"",
        afflatus:"",
        damage:"",
        rarity:"",
        number:"",
        spell1:"",
        spell1d:"",
        spell1i:"",
        spell2:"",
        spell2d:"",
        spell2i:"",
        ult:"",
        ultd:"",
        ulti:"",
        portrait:"",
        splash:""
    },
]

export{array}

