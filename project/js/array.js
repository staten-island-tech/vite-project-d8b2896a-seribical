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
        portrait:"https://www.prydwen.gg/static/a9df0a9f798cde750e47fe7b40c4cb61/60b4d/64_icon.webp",
        splash:"https://www.prydwen.gg/static/c1657226cb79dfafb394a54a2c4d0e7b/25aca/306602.webp"
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
        splash:"https://www.prydwen.gg/static/a69b14fd33965277cbca482da4185f56/25aca/307902.webp"
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
        splash:"https://www.prydwen.gg/static/2cd7c44e2c83ebb81b8dd9783f814fe3/26839/300702.webp"
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
        splash:"https://www.prydwen.gg/static/143b55f452d66b401b0a8dfd1246ca2c/032c0/303902.webp"
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
        splash:"https://www.prydwen.gg/static/9d1ea86b680778bf2fc2286ee5939abe/4f73c/302802.webp"
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
        splash:"https://www.prydwen.gg/static/11ed9b5809dd177cbb3e963cdf08414e/6f350/301602.webp"
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
        splash:"https://www.prydwen.gg/static/f69e2a80e9531118e0bda094764fcf42/56674/302402.webp"
    },
    {
        character:"Bette",
        afflatus:"Mineral",
        damage:"Reality",
        rarity:"three",
        number:"3",
        spell1:"Classic Shot",
        spell1d:"1-target attack. Deals 160/240/300% Reality DMG. This attack enjoys Penetration Rate +30%.",
        spell1i:"https://www.prydwen.gg/static/77313307ef83b094914bd9a3d7bbb784/f0036/bette2.webp",
        spell2:"Important Part",
        spell2d:"1-target buff. Reality DEF and Mental DEF +25/30/35% and DMG Taken -25/30/35% for the target for 2 rounds.",
        spell2i:"https://www.prydwen.gg/static/1061d3d9876cb5159718d0205d21ac3c/f0036/bette3.webp",
        ult:"Every Audition",
        ultd:"https://www.prydwen.gg/static/a5c83a839f7182034eb5e5d18f6bc8db/9b438/bette1.webp",
        ulti:"https://www.prydwen.gg/static/a5c83a839f7182034eb5e5d18f6bc8db/9b438/bette1.webp",
        portrait:"https://www.prydwen.gg/static/c4196c4d2986c2ff56d7e8b8caf5a08a/60b4d/44_icon.webp",
        splash:"https://www.prydwen.gg/static/842d735f2638ad38db57ec54588b96b8/3cd29/44_full.webp"
    },
    {
        character:"Bkornblume",
        afflatus:"Plant",
        damage:"Reality",
        rarity:"five",
        number:"5",
        spell1:"Watch Your Sleeves",
        spell1d:"Mass attack. Deals 135/200/335% Reality DMG to 2 enemies. If the target is in [Stats Down], [Neg Status], or [Control] statuses, this attack deals 30/45/75% more Reality DMG.",
        spell1i:"https://www.prydwen.gg/static/8be8850a9bf05dae6f98ab3279d33e40/f0036/bkorn2.webp",
        spell2:"Prying Ear",
        spell2d:"Mass debuff. All enemies suffer Reality DEF -15/20/25% and DMG Taken +15/20/25%. Lasts 2/2/3 rounds.",
        spell2i:"https://www.prydwen.gg/static/f5fd111e637a7315307bca8ed4f9b8db/f0036/bkorn3.webp",
        ult:"Uninvited Reviwer",
        ultd:"1-target attack. Deals 550% Reality DMG and inflicts [Seal] for 2 rounds. If the target is immune to [Seal], Moxie -2 to the target instead.",
        ulti:"https://www.prydwen.gg/static/87dcc178a984014caa8d325365a2f89d/9b438/bkorn1.webp",
        portrait:"https://www.prydwen.gg/static/f5c8a1e76ffa90a6a3cc1628543264e7/60b4d/16_icon.webp",
        splash:"https://www.prydwen.gg/static/930e6baa8bf11b439ad37bd1023b3b50/d6d17/302002.webp"
    },
    {
        character:"Black Dwarf",
        afflatus:"Mineral",
        damage:"Mental",
        rarity:"six",
        number:"6",
        spell1:"Enchanted Strike",
        spell1d:"1-target attack. Deals 180/270/450% Mental DMG. Upon casting, gain 1/2/3 stacks of [Saturn]. [Saturn]: +6% Penetration Rate for each stack. [Planet]s are capped at 3.",
        spell1i:"https://www.prydwen.gg/static/8ec922bede624d9acd986d2cf3b4efd0/f0036/Skill-30700111.webp",
        spell2:"Mythical Meteors",
        spell2d:"Mass attack. Deals 135/200/335% Mental DMG to 2 enemies. Upon casting, gain 1/2/3 stacks of [Mars]. [Mars]: +6% Leech Rate for each stack. [Planet]s are capped at 3",
        spell2i:"https://www.prydwen.gg/static/a9986d341fe4adf9bacc697c6e40e519/f0036/Skill-30700121.webp",
        ult:"Singular Perfection",
        ultd:"1-target attack. Removes all [Planets]. Deals 600% Mental DMG. Gains 2 stacks of [Full-Moon]. [Full-Moon]: +6% skill power for each stack. [Planet]s are capped at 3.",
        ulti:"https://www.prydwen.gg/static/1941e9d3f4bdb59372d0dd2034da567a/9b438/Skill-30700131.webp",
        portrait:"https://www.prydwen.gg/static/c746ac1cf15c943191df0b3f0938dec9/60b4d/62_icon.webp",
        splash:"https://www.prydwen.gg/static/fa5ace9f368cc2df575071e73e49e996/25aca/307002.webp"
    },
    {
        character:"Blonney",
        afflatus:"Star",
        damage:"Reality",
        rarity:"five",
        number:"5",
        spell1:"Laughing Rabbit",
        spell1d:"1-target attack. Deals 160/240/400% Reality DMG. This attack's Crit Rate and Crit DMG is increased by 25%",
        spell1i:"https://www.prydwen.gg/static/c90b1f6bde50b92b0a9c1a2b8aa2390a/f0036/30600111.webp",
        spell2:"Chainsaw Thriller",
        spell2d:"1-target attack. Deals 200/250/400% Reality DMG. Inflicts 0/1/1 stack of [Confusion] for 1 round",
        spell2i:"https://www.prydwen.gg/static/17ae6e1659ff9c4ad7582442ca74337e/f0036/30600121.webp",
        ult:"Pulp Fiction",
        ultd:"Mass attack. Deals 250% Reality DMG to all enemies. This attack's Crit Rate is increased by 20%",
        ulti:"https://www.prydwen.gg/static/e40605727731a1f0ff94fc40acd9bf97/9b438/30600131.webp",
        portrait:"https://www.prydwen.gg/static/7f3b655f5feaf9ccf457e484faff2f8a/60b4d/57_icon.webp",
        splash:"https://www.prydwen.gg/static/8172b8a60d4d1103cae13a7beec974b8/b19f7/306002.webp"
    },
    {
        character:"Bunny Bunny",
        afflatus:"Beast",
        damage:"Reality",
        rarity:"four",
        number:"4",
        spell1:"",
        spell1d:"",
        spell1i:"",
        spell2:"",
        spell2d:"",
        spell2i:"",
        ult:"",
        ultd:"",
        ulti:"",
        portrait:"https://www.prydwen.gg/static/67c433543a1f829dbbdca9732e4a6ffa/60b4d/14_icon.webp",
        splash:"https://www.prydwen.gg/static/a42e100729f522c57e53f951a49bc4a2/2065f/301402.webp"
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
        splash:"https://www.prydwen.gg/static/031d88215892eec25e910ee9caa16d94/16268/303202.webp"
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
        splash:"https://www.prydwen.gg/static/599508164a638a53a2057b84a4ec0aed/b19f7/306202.webp"
    },
    {
        character:"Mister Michael Whalen",
        afflatus:"Intellect",
        damage:"Mental",
        rarity:"seven",
        number:"7",
        spell1:"HOS Deduction",
        spell1d:"-100 HOS Responsibility Points",
        spell1i:"../imgs/HOS.png",
        spell2:"Criticism",
        spell2d:"",
        spell2i:"",
        ult:"why are you bad at coding ethan",
        ultd:"",
        ulti:"../imgs/ethanisbad.jpg",
        portrait:"../imgs/whalenportrait.png",
        splash:"../imgs/flattering.png"
    },
].reverse()

export{array}

