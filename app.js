const CHARACTERS = [
  {
    id:1, name:"Rama", role:"Prince of Ayodhya · Avatar of Vishnu", category:"divine",
    emoji:"🏹", img:"assets/images/rama.png", avatarBg:"linear-gradient(135deg,#1A3A6A,#2A5AA0)",
    epithets:["Maryada Purushottam","Raghava","Dasharathi","Koshalendra"],
    priority:"divine",
    attributes:{
      "Kanda (Birth)":"Ayodhya, Ikshvaku dynasty",
      "Parents":"Dasharatha & Kaushalya",
      "Consort":"Devi Sita",
      "Weapons":"Kodanda (Bow), Brahmastra, Agneyastra",
      "Avatar":"7th Avatar of Vishnu",
      "Guru":"Vishwamitra, Vasishtha",
      "Children":"Lava & Kusha",
      "Dynasty":"Raghu Vamsha (Solar dynasty)"
    },
    description:"Rama is the seventh avatar of Lord Vishnu, born to King Dasharatha and Queen Kaushalya of Ayodhya. He is celebrated as the supreme embodiment of dharma — righteous conduct, moral virtue, and ideal human behavior. His life is the very spine of the Ramayana. Rama wields the Kodanda bow with unrivaled mastery and was the only person able to string and break the Haradhanu, the bow of Lord Shiva, thus winning Sita's hand in marriage. He accepted fourteen years of exile at his father's command without complaint, placing filial duty above his own kingship — an act that defines him as Maryada Purushottam, the highest among men. During exile, he defeated rakshasas, learnt divine astras from Vishwamitra, slew Tataka, freed Ahalya from Gautama's curse, and built friendships with Sugriva and Hanuman. His rescue of Sita from Lanka, the construction of Rama Setu, and the defeat of Ravana form the cosmic climax of the epic. Rama's reign — Rama Rajya — became a golden age of justice, prosperity, and righteousness. He is worshipped across India and Southeast Asia, chanted as 'Ram Ram' on the lips of the dying.",
    traits:["Dharmic","Compassionate","Mighty Warrior","Ideal Son","Ideal King","Devoted Husband","Truthful"],
    verse:"\"Dharmo rakshati rakshitah\" — He who protects dharma is protected by dharma. This is the life of Rama.",
    story:"After breaking Shiva's bow and marrying Sita in Mithila, Rama was preparing for coronation when stepmother Kaikeyi invoked old boons. He walked into exile with a smile, spent years protecting sages, lost Sita to Ravana's abduction, forged an alliance with the Vanaras, crossed the ocean on a great bridge, waged war against Lanka, slew Ravana with the Brahmastra, and returned to Ayodhya on Pushpaka Vimana to be crowned king. His rule became the very measure of ideal governance."
  },
  {
    id:2, name:"Sita", role:"Princess of Mithila · Daughter of Earth", category:"divine",
    emoji:"🌸", img:"assets/images/sita.png", avatarBg:"linear-gradient(135deg,#5A2A6A,#8A4A9A)",
    epithets:["Janaki","Vaidehi","Maithili","Bhoomija"],
    priority:"divine",
    attributes:{
      "Origin":"Born from the Earth (Bhoomija) — found in a furrow by King Janaka",
      "Parents":"Bhoomidevi (Earth) & King Janaka (foster)",
      "Consort":"Shri Rama",
      "Abode":"Mithila; Ayodhya; Panchavati; Lanka (captive); Valmiki's ashram",
      "Children":"Lava & Kusha",
      "Divine essence":"Avatar of Lakshmi",
      "Qualities":"Pativrata, Satya, Tyaga",
      "Test":"Passed Agni Pariksha — fire trial of purity"
    },
    description:"Sita is the divine heroine of the Ramayana and the avatar of Goddess Lakshmi. She was discovered by Janaka, King of Mithila, as an infant in a golden casket buried in a field while he plowed for a yagna — a child of the Earth herself (Bhoomidevi). She chose Rama as her husband when he alone broke the Haradhanu. Sita accompanied Rama unflinchingly into forest exile alongside Lakshmana, embodying the ideal of a devoted partner (pativrata). She was abducted by Ravana from their forest hermitage at Panchavati through a ruse involving the golden deer. Held captive in Lanka's Ashoka Vatika for months, she steadfastly refused Ravana's advances, clutching a blade of grass as her shield of resolve. When Hanuman arrived bearing Rama's ring, she sent back her choodamani (hair jewel) as proof. After Lanka's fall, she underwent Agni Pariksha, entering fire to prove her purity — which she emerged from unscathed, witnessed by all the gods. Despite this, public doubt led Rama to reluctantly banish her during pregnancy. She raised her twin sons Lava and Kusha at Valmiki's ashrama. When finally summoned to Ayodhya once more, she invoked the Earth to receive her, and was taken back into Bhoomidevi's lap — returning to her origin, leaving this world with her honor perfectly intact.",
    traits:["Steadfast","Pure","Courageous","Devoted","Patient","Dignified","Earthly grace"],
    verse:"\"I am Sita, daughter of Mithila, wife of Rama. Neither Lanka's gold nor Ravana's might can shake what I know to be true.\"",
    story:"Sita's story is one of supreme sacrifice and unbroken virtue. She chose forest exile over palace comfort, faced captivity without breaking, and ultimately chose the Earth over endless human judgment. Her sons sang the Ramayana to Rama before he even knew they were his children."
  },
  {
    id:3, name:"Hanuman", role:"Vanara · Devotee of Rama · Son of Wind", category:"divine",
    emoji:"🐒", img:"assets/images/hanuman.png", avatarBg:"linear-gradient(135deg,#5A3000,#9A5800)",
    epithets:["Maruti","Anjaneya","Pavanputra","Bajrangbali","Mahavira"],
    priority:"divine",
    attributes:{
      "Father":"Vayu (Wind God); Kesari (Vanara king)",
      "Mother":"Anjana",
      "Nature":"Rudra Avatar (11th manifestation of Shiva)",
      "Divine Powers":"Flight, shape-shifting, immense strength, immortality",
      "Home":"Kishkindha",
      "Guru":"Surya (Sun God)",
      "Status":"Chiranjivi (immortal)",
      "Key Act":"Crossing the ocean to Lanka; burning Lanka; bringing Sanjeevani"
    },
    description:"Hanuman is the most beloved devotee in all of Hindu dharma — the epitome of bhakti, shakti, and seva. Born of Anjana and blessed by Vayu the Wind God, he is also an avatar of Lord Shiva (the 11th Rudra). As a child, he mistook the sun for a ripe mango and leaped to eat it — Indra struck him with a thunderbolt, Vayu in rage withdrew from the world, and the gods appeased Vayu by granting the child divine boons: immortality, strength of ten thousand elephants, invulnerability to fire, water, and weapons. His name 'Hanuman' comes from 'hanu' (jaw), referencing this divine injury. He studied the Vedas and scriptures at the feet of the Sun God. Hanuman meets Rama and Lakshmana in the forests, immediately serves as ambassador of King Sugriva, and becomes Rama's most devoted servant. His greatest feat is the crossing of the ocean to Lanka — a hundred-yojana leap — to search for Sita, whom he finds in the Ashoka Vatika. He consoles her, offers Rama's ring, destroys the garden, kills Aksha Kumar, allows himself to be bound before Ravana, and sets Lanka ablaze with his burning tail. In the war, he carries the entire Dronagiri mountain when Lakshmana is struck by Indrajit's Shakti weapon, needing Sanjeevani herb before dawn. He kills countless demons including Lankini, Kalanemi, and Mahi Ravana. Hanuman can shrink to the size of a thumb or expand to touch the sky. His Sundara Kanda — the chapter of Hanuman's exploits — is considered the most auspicious section of the Ramayana.",
    traits:["Supreme devotee","Fearless","Wise","Humble","Immensely strong","Loyal","Scholar"],
    verse:"\"Where there is Rama's story, there is Hanuman — in body, in spirit, in every telling across all ages.\"",
    story:"No single hero of the Ramayana acts more decisively than Hanuman. He finds Sita when all seems lost, he brings medicine when Lakshmana lies dying, he holds the battlefield together. Yet he calls himself only a servant. It is this union of absolute power and absolute humility that makes him immortal."
  },
  {
    id:4, name:"Lakshmana", role:"Prince of Ayodhya · Eternal Brother", category:"hero",
    emoji:"⚔️", img:"assets/images/lakshmana.png", avatarBg:"linear-gradient(135deg,#1A4A1A,#2A8A2A)",
    epithets:["Saumitri","Ramanuja","Shatrughna-brother","Seshavatar"],
    priority:"hero",
    attributes:{
      "Parents":"Dasharatha & Sumitra",
      "Brother":"Twin of Shatrughna; younger to Rama",
      "Divine essence":"Avatar of Adishesha (Vishnu's serpent)",
      "Consort":"Urmila (Sita's sister)",
      "Weapon":"Bow, sword, spear",
      "Vow":"Did not sleep for 14 years in exile",
      "Greatest deed":"Slew Indrajit (Meghanada), Lanka's mightiest warrior",
      "End":"Merged into Sarayu river at Rama's departure"
    },
    description:"Lakshmana is the inseparable companion of Rama, his shadow, shield, and sword. He is considered an avatar of Adishesha, the cosmic serpent upon whom Vishnu rests — where Rama goes, Lakshmana is his foundation. Born of Queen Sumitra alongside twin Shatrughna, Lakshmana was incapable of a day apart from Rama. When Rama was sent to exile, Lakshmana abandoned his young wife Urmila — who slept for fourteen years in his stead, bearing his sleep so he could remain sleepless and vigilant. This extraordinary sacrifice by Urmila is among the Ramayana's most poignant untold acts. Lakshmana drew the Lakshmana Rekha — a protective line around Sita's hut — commanding she not cross it; Sita crossed it when deceived by Ravana in the guise of a brahmin. Lakshmana killed countless rakshasas including Shurpanakha's husband Vidyujjivha, and later disfigured Shurpanakha herself at Rama's order after she attacked Sita. His crowning feat in Lanka was the killing of Indrajit (Meghanada), Ravana's invincible son, who had previously rendered even the gods helpless — a feat possible only because Indrajit was caught without his yajna in progress. Lakshmana was struck by Indrajit's Shakti and lay near-dead until Hanuman retrieved the Sanjeevani herb. He also slew Atikaya and many rakshasa generals. After Rama's departure to Vaikuntha, Lakshmana merged into the Sarayu river.",
    traits:["Fiercely loyal","Protective","Quick-tempered","Brave","Devoted","Vigilant","Skilled archer"],
    verse:"\"Wherever Rama is, there is my home. Wherever Sita is, there is my duty. I am Lakshmana — nothing more is needed.\"",
    story:"For fourteen unbroken years, Lakshmana never slept, never left Rama's side, and never faltered once. His was a love deeper than duty — it was the devotion of the cosmic serpent cradling God."
  },
  {
    id:5, name:"Ravana", role:"King of Lanka · Lord of Rakshasas", category:"villain",
    emoji:"👑", img:"assets/images/ravana.png", avatarBg:"linear-gradient(135deg,#4A0808,#900000)",
    epithets:["Dashagriva","Lankapati","Paulastya","Lokesha"],
    priority:"villain",
    attributes:{
      "Heads":"Ten (Dashagriva — ten-headed)",
      "Parents":"Sage Vishravas & Kaikesi (rakshasa princess)",
      "Brothers":"Kumbhakarna, Vibhishana, Ahiravana",
      "Sister":"Shurpanakha",
      "Consort":"Mandodari",
      "Son":"Indrajit (Meghanada), Aksha Kumar, Atikaya",
      "Weapons":"Chandrahas sword, Brahmastra, Danda Astra",
      "Boon":"Immortality from Brahma (except from human/monkey)"
    },
    description:"Ravana is one of the most complex figures in Hindu mythology — simultaneously the supreme villain of the Ramayana and a great devotee of Shiva, a peerless scholar, a brilliant king, and a tragic figure brought low by one fatal flaw: lust and arrogance. He is the grandson of Brahma through Sage Pulastya and Vishravas. He performed extraordinary tapasya, cutting off his own heads nine times and offering them to Brahma, receiving in return near-immortality — no god, gandharva, asura, or snake could kill him. He forgot to include humans and monkeys in his boon, contemptuous of their weakness. Ravana mastered all four Vedas, the six shastras, the nine philosophies, music (he invented the Rudra Veena, the bow-lute, and was Shiva's greatest worshipper), warfare, and statecraft. He composed the Shiva Tandava Stotram after Shiva crushed him beneath Mount Kailash for arrogance. Lanka under Ravana was the wealthiest kingdom on earth — its very walls were of gold and its treasury overflowed. He conquered the celestial realms and held the Navagrihas (nine planets) as his footstool. His greatest sin was the abduction of Sita, driven by desire after Shurpanakha's humiliation. Though his scholar-minister Malyavan and his own righteous brother Vibhishana urged him to return Sita, pride overpowered reason. He was slain by Rama using the Brahmastra given by Agastya, which struck his navel — the seat of his immortal elixir. As he lay dying, Rama sent Lakshmana to learn from Ravana, calling him the greatest political scholar of the age.",
    traits:["Brilliant scholar","Proud","Powerful","Devoted to Shiva","Gifted musician","Arrogant","Ruthless"],
    verse:"\"He was everything — sage's blood, demon's will, god's power — and it was not weakness that destroyed him. It was the one moment he chose desire over dharma.\"",
    story:"Ravana's story is the Ramayana's greatest tragedy. He who could have been the greatest of kings became the greatest of cautionary tales. Even Rama honored him in death, calling him the greatest political scholar."
  },
  {
    id:6, name:"Kaushalya", role:"Senior Queen of Ayodhya · Mother of Rama", category:"other",
    emoji:"👸", img:"assets/images/kaushalya.png", avatarBg:"linear-gradient(135deg,#5A3A1A,#8A6A3A)",
    epithets:["Ramajananī","Koshalā-nandini","Mahārānī"],
    priority:"other",
    attributes:{
      "Kingdom":"Kosala (origin), Ayodhya (married)",
      "Husband":"King Dasharatha",
      "Son":"Rama",
      "Role":"Senior Mahishi (chief queen)",
      "Devotion":"Worshipped Vishnu daily for a son",
      "Response to exile":"Wept bitterly but upheld dharma"
    },
    description:"Kaushalya is the senior queen of Ayodhya and the mother of Rama. She was a deeply devout woman who prayed for years to Vishnu for a son, ultimately giving birth to the divine Rama through the Putrakameshti yagna performed by Sage Rishyashringa. When Dasharatha announced Rama's exile at Kaikeyi's demand, Kaushalya was shattered — she pleaded with Rama to take her with him into the forest rather than be left alone. Rama gently consoled her, reminding her of dharma, and departed. She endured the fourteen years of absence with immense grief, ultimately losing Dasharatha to heartbreak shortly after Rama's exile began. She nursed no bitterness against Kaikeyi, showing extraordinary grace. She was the one who received Rama first upon his return from Lanka, and her joy knew no bounds.",
    traits:["Devout","Patient","Loving","Dharmic","Long-suffering","Dignified"],
    verse:"\"She who gave birth to dharma itself had to watch dharma walk away. That is the true measure of her courage.\"",
    story:"Kaushalya's entire life was one of service — to Dasharatha, to Vishnu, and to Rama. When all was taken from her, she did not break. She waited, prayed, and welcomed her son home."
  },
  {
    id:7, name:"Kaikeyi", role:"Second Queen of Ayodhya", category:"other",
    emoji:"💎", img:"assets/images/kaikeyi.png", avatarBg:"linear-gradient(135deg,#4A1A4A,#803080)",
    epithets:["Kekaya-putri","Bharata-janani","Dasharatha-priya"],
    priority:"other",
    attributes:{
      "Kingdom":"Kekaya (origin)",
      "Husband":"Dasharatha",
      "Son":"Bharata",
      "Maid":"Manthara (evil influence)",
      "Two boons":"(1) Exile Rama 14 years (2) Crown Bharata king",
      "Earlier deed":"Saved Dasharatha in battle (earned the boons originally)",
      "Regret":"Later deeply repented her actions"
    },
    description:"Kaikeyi is one of the most complex and controversial queens in the Ramayana. Originally Dasharatha's most beloved wife — fierce, beautiful, and his companion even in battle where she once saved his life and was granted two boons — she transformed under the poisonous counsel of her hunchback maid Manthara. Manthara played upon her love for Bharata and her fear of becoming secondary, convincing Kaikeyi that Rama's coronation would doom her son. Thus Kaikeyi invoked her two boons: exile Rama for fourteen years and crown Bharata. Dasharatha was shattered; his love for Rama was such that he could not survive the son's departure, dying shortly after. Bharata himself, upon returning from his uncle's kingdom, was devastated and furious with his mother — he rejected the throne and went to bring Rama back, eventually placing Rama's padukas (sandals) on the throne and ruling as regent. Kaikeyi later deeply repented, and many interpretations suggest she was a divine instrument — her cruelty was needed for Rama to fulfill his cosmic purpose of destroying Ravana. Without her boon, Rama would never have gone to the forest.",
    traits:["Fiercely loving (to Bharata)","Easily manipulated","Repentant","Originally brave","Complex","Tragic"],
    verse:"\"The gods move through human hearts. Kaikeyi did not know she was the instrument — she thought she was the cause.\"",
    story:"History judged her harshly; deeper wisdom sees her as the necessary sorrow without which the story could not be told. Bharata never forgave her, but dharma was served."
  },
  {
    id:8, name:"Dasharatha", role:"King of Ayodhya · Father of Rama", category:"other",
    emoji:"🏛️", img:"assets/images/dasharatha.png", avatarBg:"linear-gradient(135deg,#3A3A0A,#707020)",
    epithets:["Raghava-pita","Ikshvakuvansha","Shataratho","Dasyratha"],
    priority:"other",
    attributes:{
      "Dynasty":"Ikshvaku (Solar dynasty)",
      "Queens":"Kaushalya, Kaikeyi, Sumitra",
      "Sons":"Rama, Bharata, Lakshmana, Shatrughna",
      "Curse":"Shravana Kumar's father — 'you shall die grieving for your son'",
      "Death":"Died of grief 6 days after Rama's exile",
      "Army":"Owner of the four-directional (Dasha-ratha) chariot of war",
      "Distinction":"One of the Navaratnas of ancient kings"
    },
    description:"Dasharatha was a great and just king of Ayodhya, famed as a ratha-yodhya — a chariot warrior capable of fighting in all ten directions simultaneously, hence his name 'Dasharatha.' He ruled Ayodhya prosperously for thousands of years but was grief-stricken by the absence of an heir, eventually performing the Putrakameshti yagna. A tragic curse hung over him: long before the Ramayana, he had accidentally killed the young Shravana Kumar with a shabda-bhedi bana (sound-guided arrow), mistaking the sound of the boy drawing water for a deer. Shravana's blind parents cursed Dasharatha to die grieving his son as they grieved theirs — a curse that came true with devastating precision when Rama was exiled. Dasharatha made a desperate plea to Kaikeyi to undo her demand but was bound by his word of honor as a Kshatriya king. He died heartbroken within days of Rama's departure, whispering Rama's name. In the Uttara Kanda, a celestial scene depicts him meeting Rama in glory, freed of all sorrows.",
    traits:["Loving","Just","Burdened by past karma","Honorable","Weak before Kaikeyi","Sorrowful","Royal"],
    verse:"\"He died as kings should not — not in battle but in the agony of love. That is the full measure of how completely he loved his son.\"",
    story:"Dasharatha's story is one of karma completing its circle — the arrow that killed an innocent boy found its way back as a queen's words, as inexorable as fate."
  },
  {
    id:9, name:"Bharata", role:"Prince of Ayodhya · Ruler as Regent", category:"hero",
    emoji:"🌿", img:"assets/images/bharata.png", avatarBg:"linear-gradient(135deg,#1A3A2A,#2A6A4A)",
    epithets:["Kaikeya-putra","Rama-bhakta","Padukadhipati"],
    priority:"hero",
    attributes:{
      "Mother":"Kaikeyi",
      "Twin brother":"Shatrughna",
      "Consort":"Mandavi (Sita's cousin)",
      "Act of devotion":"Placed Rama's padukas on the throne; ruled as regent",
      "Home during Rama's exile":"Nandigram (outside Ayodhya) — lived as an ascetic",
      "Weapons":"Bow, sword",
      "Character":"Considered the ideal brother"
    },
    description:"Bharata is the exemplar of brotherly love and dharmic rejection of unrighteous gain. He was away at his maternal uncle Yudhajit's kingdom in Kekaya during the fateful events — he had no knowledge of his mother Kaikeyi's schemes. When messengers brought him back to Ayodhya and he learned of Rama's exile and his father's death, his grief and fury were immeasurable. He confronted his mother in rage, refusing to call her 'mother' anymore, and immediately marched with an army to the Chitrakoot forest to bring Rama home. In the famous Bharata Milap at Chitrakoot — one of the most emotionally charged episodes of the Ramayana — the brothers met after years of separation. Bharata pleaded with Rama to return and rule. Rama, bound by his father's word, refused. Bharata then requested Rama's padukas (wooden sandals), placed them on the throne of Ayodhya as the symbolic king, and himself retired to the village of Nandigram outside the city, living the life of an ascetic — barefoot, wearing tree bark, eating only fruits and roots — for the entire fourteen years until Rama's return. When Rama returned, Bharata examined him with great care to ensure he had truly returned, and only then gladly surrendered the throne. He killed the asura Kumbha and Nikumbha (Kumbhakarna's sons) in a separate battle during the war.",
    traits:["Immensely devoted","Just","Self-denying","Grief-stricken","Noble","Incorruptible"],
    verse:"\"He had the throne, the crown, and the city. He chose instead a sandal's shadow. That is Bharata.\"",
    story:"Bharata's fourteen years in Nandigram, ruling in his brother's name, living as a hermit though he was a king, is among the Ramayana's most moving statements about love, ego, and duty."
  },
  {
    id:10, name:"Shatrughna", role:"Prince of Ayodhya · Youngest Brother", category:"hero",
    emoji:"🗡️", img:"assets/images/shatrughna.png", avatarBg:"linear-gradient(135deg,#1A2A3A,#2A4A6A)",
    epithets:["Sumitra-putra","Bharata-anuja","Lavana-vijaya"],
    priority:"hero",
    attributes:{
      "Mother":"Sumitra",
      "Twin brother":"Lakshmana",
      "Consort":"Shrutakirti (Sita's cousin)",
      "Key deed":"Slew the demon Lavana of Mathura",
      "Loyalty":"Devoted to Bharata as Lakshmana to Rama",
      "Role in war":"Fought in Lanka, though less documented"
    },
    description:"Shatrughna is the youngest of Dasharatha's four sons, twin of Lakshmana and deeply devoted to Bharata as Lakshmana was to Rama. He is as inseparable from Bharata as Lakshmana was from Rama — wherever Bharata went, Shatrughna followed. He killed the evil maidservant Manthara's co-conspirators and dragged Manthara by the hair in rage after learning of Rama's exile, only being stopped by Bharata. During Rama's rule (Rama Rajya), Shatrughna was sent on a campaign to Madhupuri (modern Mathura), where he slew the demon Lavana, son of Madhu, and established the city of Mathura. He ruled Madhupuri for twelve years and only returned to Ayodhya when Rama decided to depart this world. He had two sons, Subahu and Shatrughati.",
    traits:["Devoted","Fierce","Loyal","Understated","Capable warrior","Overshadowed but steadfast"],
    verse:"\"He was not in the story's center, but he held the edges firmly so the center would not fray.\"",
    story:"Shatrughna's story is one of the Ramayana's quiet dignities — the fourth brother who served without seeking fame, ruled when asked, returned when called, and walked with Rama into eternity."
  },
  {
    id:11, name:"Vishwamitra", role:"Sage · Rajaharshi · Brahmarshi", category:"sage",
    emoji:"📿", img:"assets/images/vishwamitra.png", avatarBg:"linear-gradient(135deg,#1A1A4A,#3A3A8A)",
    epithets:["Kaushika","Brahmarshi","Rajaharshi","Mitra of the world"],
    priority:"sage",
    attributes:{
      "Birth":"Born Kaushika — a Kshatriya king",
      "Achievement":"Became Brahmarshi through intense tapasya",
      "Disciple":"Trained Rama and Lakshmana",
      "Astras given":"Brahmastra, Vayavyastra, Agneyastra, and 60+ divine weapons",
      "Key acts":"Freed Ahalya; led Rama to Mithila; oversaw Sita's swayamvara",
      "Rivalry":"Long feud with Vasishtha, eventually reconciled",
      "Creator":"Created Trishanku's heaven; created Gayatri Mantra for yagna"
    },
    description:"Vishwamitra is among the most remarkable figures in Hindu tradition — a king who through sheer determination of will and austerity (tapasya) transformed himself from a Kshatriya into a Brahmarshi, the highest class of sage. Born as Kaushika, king of a great realm, he grew consumed by envy of Vasishtha's Kamdhenu cow (wish-fulfilling celestial cow). After repeated failed attempts to take it by force, he renounced his kingdom and plunged into decades of tapasya so extreme he transcended all human classifications. He created a separate heaven for the king Trishanku, created a new galaxy when the gods refused, fought the gods themselves, and composed the Gayatri Mantra — the most sacred of Vedic hymns still chanted daily. He came to Dasharatha's court to request Rama and Lakshmana accompany him to protect his yagna from the rakshasas Maricha and Subahu. During this journey, he bestowed on Rama the Bala and Atibala mantras, taught him all divine weapons (60+ astras), and took him via Mithila to Sita's swayamvara. His guidance was the first crucial act of Rama's destiny-fulfillment.",
    traits:["Indomitable will","Fiery","Brilliant","Reformed","Compassionate (eventually)","Cosmic thinker"],
    verse:"\"He was not born wise — he became wise. Through fire, failure, and a thousand years of will. That is Vishwamitra's true teaching.\"",
    story:"No other character in Hindu mythology demonstrates so dramatically that spiritual greatness can be earned through absolute will. From a jealous king to the composer of the Gayatri Mantra — Vishwamitra is the Ramayana's proof that dharma can transform anyone."
  },
  {
    id:12, name:"Vasishtha", role:"Royal Guru of Ayodhya · Brahmarshi", category:"sage",
    emoji:"🕯️", img:"assets/images/vasishtha.png", avatarBg:"linear-gradient(135deg,#2A1A0A,#5A3A1A)",
    epithets:["Brahmarshi","Saptarishi","Ikshvaku-kulguru"],
    priority:"sage",
    attributes:{
      "Status":"Brahmarshi; one of the Saptarishis (seven divine sages)",
      "Possessions":"Kamdhenu (Nandini) — wish-fulfilling cow",
      "Role":"Kulguru (hereditary guru) of Ikshvaku dynasty",
      "Disciples":"All four princes of Ayodhya; trained by him in Vedas",
      "Key acts":"Presided over coronation ceremonies; guided Dasharatha",
      "Rivalry":"With Vishwamitra — ultimately resolved",
      "Texts":"Vasishtha Dharmasutra; Yoga Vasishtha (discourse to Rama)"
    },
    description:"Vasishtha is the royal guru of the Ikshvaku dynasty — the hereditary spiritual preceptor of Ayodhya across countless generations. He is one of the seven divine sages (Saptarishis) and a Brahmarshi of supreme standing. He possesses Nandini, daughter of the celestial Kamdhenu, whose power of wish-fulfillment sparked his legendary conflict with Vishwamitra. Vasishtha performed all the sacred rites for the four princes, educated them in the Vedas and Shastras, and presided over Rama's near-coronation ceremony. His most important contribution to spiritual literature is the Yoga Vasishtha (also called Vasishtharamayana or Jnanavaasishtam) — an enormous philosophical text structured as an enlightenment discourse he gave to the young Rama when the prince fell into a state of existential despair and detachment from the world. This text is considered one of the most important works in Advaita Vedanta. His wife Arundhati is the model of conjugal fidelity, pointed to in marriage ceremonies as a star (Alcor in the Ursa Major constellation).",
    traits:["Serene","Deeply wise","Patient","Philosophically profound","Steadfast","Just"],
    verse:"\"He did not raise his voice when kingdoms were built or crumbled around him. That composure was itself his teaching.\"",
    story:"Vasishtha was the calm at the center of every storm — the guru who educated Rama, the sage who outlasted every conflict, and the teacher whose Yoga Vasishtha turned a prince's despair into enlightenment."
  },
  {
    id:13, name:"Sugriva", role:"Vanara King of Kishkindha", category:"ally",
    emoji:"🦁", img:"assets/images/sugriva.png", avatarBg:"linear-gradient(135deg,#3A2A0A,#7A6020)",
    epithets:["Riksharaja-putra","Kishkindha-Raja","Bali's brother"],
    priority:"ally",
    attributes:{
      "Father":"Surya (Sun God)",
      "Brother":"Bali (Vali)",
      "Consort":"Ruma (taken by Bali), later Tara (after Bali's death)",
      "Minister":"Hanuman",
      "Alliance":"With Rama — in exchange for slaying Bali",
      "Role in war":"Commanded the entire Vanara army",
      "Capital":"Kishkindha"
    },
    description:"Sugriva is the king of the Vanara (monkey) kingdom of Kishkindha. He is the son of Surya the Sun God, making him a solar deity by lineage. His elder brother Bali (Vali) was of immense strength — capable of defeating great asuras — but a personal betrayal led Bali to exile Sugriva, take his wife Ruma, and seize the kingdom. Sugriva lived in hiding on the Rishyamukha mountain (which Bali could not enter due to a curse) when Rama and Lakshmana arrived. Hanuman, Sugriva's minister, recognized their divine nature and facilitated their meeting. Sugriva and Rama entered a pact: Rama would slay Bali, Sugriva would deploy his Vanara army to find Sita. When Sugriva confronted Bali in combat, Rama shot Bali from behind a tree — a controversial but dharmic decision Rama justified by Bali's unlawful seizure of a brother's wife. Sugriva became king, married Tara (Bali's widow, at her own choice), and after some delay (during which Lakshmana sternly reminded him of his duty), sent out search parties in all four directions. His Vanara forces, under Angada and Hanuman, ultimately found Sita in Lanka. In the war, Sugriva himself battled Ravana directly.",
    traits:["Grateful","Courageous","Occasionally complacent","Politically astute","Loyal (when pressed)","Just ruler"],
    verse:"\"He was broken, in hiding, afraid — and still he made the right alliance and rebuilt everything. Sugriva's story is about second chances.\"",
    story:"Sugriva went from fugitive to king, from grief-stricken exile to commander of the force that saved the universe. His pact with Rama changed the entire arc of cosmic history."
  },
  {
    id:14, name:"Bali (Vali)", role:"Vanara King · Mightiest of Apes", category:"villain",
    emoji:"⚡", img:"assets/images/bali.png", avatarBg:"linear-gradient(135deg,#3A0A0A,#7A2020)",
    epithets:["Riksharajas-putra","Mahendra-son","Indra-son","Kishkindha-pati"],
    priority:"villain",
    attributes:{
      "Father":"Indra (King of Gods)",
      "Mother":"Riksharajas / divine monkey queen",
      "Brother":"Sugriva",
      "Son":"Angada",
      "Consort":"Tara",
      "Boon":"Half the strength of any opponent transfers to him in battle",
      "Feat":"Bound Ravana under his armpit for six months",
      "Death":"Shot by Rama's arrow while fighting Sugriva"
    },
    description:"Bali is one of the most powerful individuals in the entire Ramayana — arguably the most powerful single fighter in the mortal realm, whose boon from Brahma transfers half the strength of any challenger to himself, making direct combat with him nearly impossible. He is the son of Indra, king of the gods. His most legendary feat was trapping Ravana — the ten-headed conqueror of the three worlds — under his armpit for six months while performing his evening prayers, until Ravana begged for release. Bali had defeated the asura Dundhubi and hurled the giant demon's body miles away, its blood defiling Matanga Rishi's ashram. This led to the rishi's curse preventing Bali from entering Rishyamukha mountain. His conflict with Sugriva arose from a misunderstanding in a cave: chasing the demon Maya, when blood oozed from the cave mouth Sugriva assumed Bali dead, sealed the entrance, and returned to rule. Bali escaped, furious at the perceived betrayal, and exiled Sugriva, seizing his wife. Despite his ferocity, Bali was a complex figure — he treated Tara well, was devoted to Indra, and as he lay dying from Rama's arrow he delivered a profound philosophical discourse, ultimately accepting the justice of his end. His son Angada became one of Rama's key commanders.",
    traits:["Immensely powerful","Arrogant","Complex","Philosophically mature (in death)","Fierce","Devoted to Indra"],
    verse:"\"In death, Bali saw what life had hidden from him — that power without justice is only borrowed time.\"",
    story:"Bali's death remains one of the Ramayana's most debated moral questions. Even great scholars have argued about Rama's decision to shoot him from hiding. It remains the epic's most profound ethical ambiguity."
  },
  {
    id:15, name:"Hanuman's Leap — Jambavan", role:"Vanara Elder · Counselor", category:"ally",
    emoji:"🐻", img:"assets/images/jambavan.png", avatarBg:"linear-gradient(135deg,#1A3A1A,#3A6A3A)",
    epithets:["Riksharaj","Jambu-king","The All-Knowing Bear"],
    priority:"ally",
    attributes:{
      "Race":"Riksha (bear-like Vanara)",
      "Age":"Born at the time of creation — among the oldest beings",
      "Creator":"Brahma's breath",
      "Key role":"Reminded Hanuman of his forgotten powers",
      "War role":"Advisor; fought in Lanka",
      "Weapon":"Sheer experience and cosmic memory"
    },
    description:"Jambavan is the ancient king of the bears (Rikshas), one of the oldest beings in creation — he was born from Brahma's yawning breath at the very beginning of time and is said to have circumambulated Vamana's cosmic footsteps during the Trivikrama avatar. He has witnessed every age of the world. In the Ramayana, he is the essential catalyst of the crucial moment: when the Vanara search party reached the southern ocean and despaired at the impossible crossing, it was Jambavan who turned to the dejected Hanuman — who had forgotten his own divine powers due to a childhood curse from sages — and reminded him, in a long, stirring speech, of every feat he had ever performed. It was Jambavan's voice that unlocked Hanuman's full divine self, enabling the great leap to Lanka. During the war in Lanka, Jambavan fought valiantly against rakshasa forces. When Lakshmana lay near-death and even Hanuman was unsure which herb to bring, Jambavan directed him precisely to the Dronagiri mountain and the Sanjeevani herb. Jambavan's role is that of the irreplaceable wise elder whose memory and knowledge saves the mission at every critical juncture.",
    traits:["Ancient wisdom","Calm","Strategic","Memory of all ages","Counselor","Steadfast in crisis"],
    verse:"\"He did not fight the ocean. He reminded the one who could.\"",
    story:"Jambavan's greatest contribution to the Ramayana was a speech — no weapon, no leap, no battle. Just words that restored a god to himself. Sometimes wisdom IS the miracle."
  },
  {
    id:16, name:"Angada", role:"Vanara Prince · Son of Bali", category:"ally",
    emoji:"🦅", img:"assets/images/angada.png", avatarBg:"linear-gradient(135deg,#2A2A0A,#5A5A20)",
    epithets:["Bali-putra","Yuvraj of Kishkindha","Rama's ambassador"],
    priority:"ally",
    attributes:{
      "Father":"Bali (Vali)",
      "Mother":"Tara",
      "Mentor":"Sugriva (uncle), Hanuman",
      "Role":"Deputy commander of Vanara army",
      "Diplomatic mission":"Ambassador to Ravana's court before the war",
      "Feat":"Planted his foot so firmly Ravana's entire court could not lift it"
    },
    description:"Angada is the son of Bali and the Vanara princess Tara, and despite his father's enmity with Rama, he became one of Rama's most capable generals. He is the Yuvraj (crown prince) of Kishkindha. Despite the grief and moral complexity of having his father slain by Rama's arrow, Angada understood dharma and remained loyal to the cause. He led one of the four search parties deployed by Sugriva in every direction to find Sita. His party reached the southern ocean after finding Sampati (Jatayu's brother) who confirmed Sita was in Lanka. Before the war began, Angada was sent as Rama's ambassador to Ravana's court — a mission of tremendous courage and diplomacy. In Ravana's grand assembly he refused to bow, declared Lanka's doom, and performed the legendary feat of planting his foot so firmly in the earth that Ravana's entire assembled court — every rakshasa lord — could not lift it, demonstrating that Rama's cause was immovable. He fought Indrajit and Ravana himself in the war. After Rama's victory, he was confirmed as the crown prince of Kishkindha.",
    traits:["Brave","Diplomatic","Grieving but loyal","Physically powerful","Noble","Strategic"],
    verse:"\"His foot was planted in the earth, unmovable. It was not just strength — it was righteousness that no force could lift.\"",
    story:"Angada lost his father to Rama's arrow and still chose to fight for Rama's cause. That choice — made in grief, with full understanding — is among the Ramayana's quietest acts of nobility."
  },
  {
    id:17, name:"Vibhishana", role:"Brother of Ravana · King of Lanka", category:"ally",
    emoji:"🙏", img:"assets/images/vibhishana.png", avatarBg:"linear-gradient(135deg,#0A2A3A,#1A5A6A)",
    epithets:["Lankesh","Dharma-rakshasa","Ravana-bhrata"],
    priority:"ally",
    attributes:{
      "Father":"Sage Vishravas",
      "Brothers":"Ravana, Kumbhakarna",
      "Sister":"Shurpanakha",
      "Consort":"Sarama",
      "Boon from Brahma":"Unwavering devotion to righteousness",
      "Crown":"Given Lanka's kingdom by Rama after Ravana's fall",
      "Status":"Chiranjivi (immortal) — blessed to remain until dharma exists"
    },
    description:"Vibhishana is one of the Ramayana's most morally courageous characters — the righteous one born in a rakshasa family, proof that dharma transcends birth. He is Ravana's younger brother, son of the same father (Sage Vishravas) but different mother (Ravana and Kumbhakarna's mother was the rakshasi Kaikesi; Vibhishana shared the same mother as them). Vibhishana received a boon from Brahma: that righteousness would never leave him, even in a rakshasa body. When Ravana abducted Sita, Vibhishana repeatedly and earnestly pleaded with his elder brother to release her — invoking scripture, warning of Lanka's doom, and citing the political and cosmic consequences. Ravana dismissed him furiously and finally exiled him from Lanka. Vibhishana flew across the ocean and surrendered at Rama's feet. Many in Rama's council — even Sugriva — counseled suspicion: how could a rakshasa's brother be trusted? Rama overruled them all: \"Even if Vibhishana came with ill intent, I cannot refuse one who has surrendered to me.\" This was Rama's celebrated declaration of unconditional refuge (saranagati). Vibhishana guided Rama's forces through Lanka's defenses, revealed Ravana's secret weak point (the navel of his immortal energy), and after Ravana's death was crowned King of Lanka by Rama himself. He is a Chiranjivi — immortal, remaining in Lanka to uphold dharma.",
    traits:["Supremely righteous","Courageous (against family)","Devoted to Vishnu","Honest","Politically able","Selfless"],
    verse:"\"To speak truth to power is courage. To leave power for truth is rarer still. Vibhishana did both.\"",
    story:"Vibhishana's abandonment of his powerful brother to serve dharma cost him family, home, and safety. He gained instead a kingdom, Rama's friendship, and immortality. It is the Ramayana's clearest lesson that dharma always prevails."
  },
  {
    id:18, name:"Kumbhakarna", role:"Rakshasa · Ravana's Brother · Sleeper Giant", category:"villain",
    emoji:"💪", img:"assets/images/kumbhakarna.png", avatarBg:"linear-gradient(135deg,#3A1A0A,#7A3A1A)",
    epithets:["Raktaaksha","Ravana-bhrata","Mahakaya"],
    priority:"villain",
    attributes:{
      "Parents":"Vishravas & Kaikesi",
      "Brothers":"Ravana, Vibhishana",
      "Boon/Curse":"Sleeps for six months continuously",
      "Size":"Mountain-sized; required thousands of soldiers to wake",
      "Weapon":"Iron club (gada), mountains, boulders",
      "Death":"Slain by Rama — arms cut by Lakshmana and Sugriva; head severed by Rama's arrow",
      "Nature":"Knew Ravana was wrong; fought for family loyalty"
    },
    description:"Kumbhakarna is Ravana's mighty younger brother — a rakshasa of colossal size whose power was so immense that Indra and the gods feared his strength when he was to receive boons from Brahma. They urged Saraswati (goddess of speech) to distort his words: instead of 'Indrasana' (Indra's throne), he said 'Nidrasana' (the bed of sleep), receiving a boon of perpetual sleep rather than eternal rule. He sleeps for six months and wakes for one day, eating voraciously. Kumbhakarna, unlike Ravana, understood that Ravana's act of abducting Sita was adharmic. When awakened with enormous effort — thousands of soldiers beating drums, elephants treading on him, food piled around him — he told Ravana plainly that his cause was unjust. But family loyalty (and his own warrior's pride) impelled him to fight for Lanka regardless. He entered the battlefield like a mountain in motion, causing the Vanara army to flee in terror. He ate hundreds of Vanaras alive, fought Sugriva, crushed Angada, and proved virtually unstoppable until Rama himself faced him. Rama severed both arms (by Lakshmana and Sugriva's attacks previously), then shot multiple arrows to remove his head, which rolled into the sea with a thunderous crash. Kumbhakarna is one of the Ramayana's most compelling tragic figures: a man of tremendous power who knew the truth and chose blood over dharma.",
    traits:["Overwhelmingly strong","Self-aware","Tragically loyal","Honest","Larger than life literally","Fearless"],
    verse:"\"He woke from sleep to walk into death — knowingly. 'Wrong cause,' he said, and fought anyway. That is the tragedy of Kumbhakarna.'\"",
    story:"Kumbhakarna's tragedy is that of the whistleblower who speaks truth and then, unable to abandon his kin, walks into the fire anyway. He is perhaps Ravana's most human dimension."
  },
  {
    id:19, name:"Indrajit (Meghanada)", role:"Prince of Lanka · Conqueror of Indra", category:"villain",
    emoji:"🌩️", img:"assets/images/indrajit.png", avatarBg:"linear-gradient(135deg,#1A0A3A,#4A2080)",
    epithets:["Meghanada","Ravana-putra","Shakti-wielder","Brahmastra-user"],
    priority:"villain",
    attributes:{
      "Parents":"Ravana & Mandodari",
      "Name meaning":"Meghanada = thunder-voiced; Indrajit = conqueror of Indra",
      "Weapon":"Brahmastra, Nagastra, Shakti, invisible chariot in clouds",
      "Boon":"Invincibility if he completes his yajna to Nikumbhila",
      "Feats":"Bound Rama & Lakshmana with Nagastra; struck Lakshmana with Shakti",
      "Death":"Slain by Lakshmana when yajna was interrupted",
      "Consort":"Sulochana (daughter of Shesha Naga) — known for her legendary fidelity"
    },
    description:"Indrajit is Ravana's eldest and most powerful son — perhaps the most dangerous fighter in the entire Lanka war. Born as Meghanada (thunder-voice) because his birth cry was like thunder, he later earned the title Indrajit (Conqueror of Indra) after defeating and capturing the king of the gods himself in battle, a feat no mortal, demon, or divine had previously achieved (Brahma intervened to free Indra, but the name stuck). Indrajit possessed the supreme Brahmastra, fought from an invisible chariot within the clouds — rendering him effectively impossible to target — and wielded the devastating Nagastra, which entangled Rama and Lakshmana in a serpentine net that even the gods could not break (Garuda, Vishnu's eagle mount, ultimately dissolved it). He struck Lakshmana with the Shakti weapon, sending him into deep unconsciousness that required the Sanjeevani herb before dawn or death was certain. He repeated this attack in a second assault, creating an illusion of Sita and killing her before Rama's forces to break their morale (Vibhishana explained it was Mayasita — a maya illusion). Indrajit's power was conditional on completing his yajna (fire sacrifice) to Nikumbhila goddess — if the yajna was interrupted he lost his invincibility. Vibhishana revealed this secret. Lakshmana, guided by Vibhishana, disrupted the yajna and fought Indrajit in direct combat — an immense battle in which Lakshmana ultimately severed Indrajit's head. His wife Sulochana's grief and devotion are the subject of many later texts.",
    traits:["Brilliant strategist","Fearless","Supremely skilled","Devoted son","Complex morally","Ultimately tragic"],
    verse:"\"He conquered a god and fell to a man. Between those two moments lies the entire teaching of karma.\"",
    story:"Indrajit is the Ramayana's most formidable warrior-villain. His defeat required divine intervention, strategy, and the cooperation of an insider. He was never beaten by raw force alone."
  },
  {
    id:20, name:"Shurpanakha", role:"Rakshasi · Ravana's Sister", category:"villain",
    emoji:"🌊", img:"assets/images/shurpanakha.png", avatarBg:"linear-gradient(135deg,#3A1A2A,#703050)",
    epithets:["Ravana-bhagini","Minakshi (original form)","Lanka-nari"],
    priority:"villain",
    attributes:{
      "Brothers":"Ravana, Kumbhakarna, Vibhishana",
      "Husband":"Vidyujjivha (killed by Ravana in conflict)",
      "Incident":"Her nose and ears were cut by Lakshmana at Rama's command",
      "Role":"The trigger of the entire abduction of Sita",
      "Location":"Encountered Rama and Lakshmana at Panchavati"
    },
    description:"Shurpanakha (meaning 'she of the sharp fingernails') is Ravana's younger sister, a rakshasi of tremendous magical power and shapeshifting ability. She encountered Rama and Lakshmana at Panchavati in the Dandaka forest while they were in exile. Transforming into a beautiful woman, she was immediately entranced by Rama's divine beauty and proposed marriage to him. Rama told her he was already married to Sita. She turned to Lakshmana, who also deflected her, suggesting she approach Rama. Angered by what she perceived as mockery, and inflamed by jealousy toward Sita, she attacked Sita. Lakshmana intercepted her and, at Rama's command, cut off her nose and ears — a deep humiliation in that age. Enraged and disfigured, she first went to her brother Khara (one of the rakshasa chiefs of the forest), who sent fourteen rakshasas, then a great army, all of whom Rama killed single-handedly. Finally she went to Lanka and presented herself before Ravana, describing Sita's beauty in detail while inflaming Ravana's pride about the insult to his sister. This description of Sita to Ravana is what directly triggered the abduction. Shurpanakha is the inadvertent catalyst of the entire Lanka war.",
    traits:["Impulsive","Vengeful","Passionate","Powerful shapeshifter","Consequential despite minor role"],
    verse:"\"One moment of wounded pride set the universe on fire. Shurpanakha did not mean to change history — she just could not bear to be laughed at.\"",
    story:"Shurpanakha's humiliation led to the abduction of Sita, which led to the war, which led to Ravana's fall. The greatest war in the Ramayana began with a heartbreak and a severed nose."
  },
  {
    id:21, name:"Maricha", role:"Rakshasa · Uncle of Ravana", category:"villain",
    emoji:"🦌", img:"assets/images/maricha.png", avatarBg:"linear-gradient(135deg,#2A2A1A,#505030)",
    epithets:["Tataka-putra","Maya-mriga","Suvarna-mriga"],
    priority:"villain",
    attributes:{
      "Mother":"Tataka",
      "Relation to Ravana":"Uncle (mother's son)",
      "Earlier encounter":"Fled from Rama's arrow after Vishwamitra's yagna",
      "Final role":"Played the golden deer; cried 'Lakshmana!' in Rama's voice",
      "Death":"Shot by Rama's arrow while fleeing in deer form",
      "Nature":"Reluctant villain — knew the mission was doom"
    },
    description:"Maricha is a deeply complex villain — a rakshasa who knew he was walking into death and did so anyway, driven by fear of Ravana's wrath. The son of the rakshasi Tataka (herself slain by Rama earlier), he had previously disrupted Vishwamitra's yagna but was driven off by Rama's powerful arrow, which hurled him eight hundred miles into the ocean. This encounter left him with profound respect and terror for Rama's power. When Ravana came to him with the plan to abduct Sita — using Maricha to assume the form of a golden deer and lure Rama away — Maricha implored Ravana to abandon the idea, describing Rama's invincibility in detail. Ravana threatened him with death if he refused. Maricha calculated: if he went to Lanka and refused, Ravana would kill him; if he took the form of the deer, Rama would kill him. He chose death by Rama's arrow as the nobler end. He transformed into the most beautiful golden deer ever seen — dazzling Sita, who begged Rama to capture it. As the stricken deer, shot by Rama, he cried out 'Lakshmana! Sita!' in Rama's voice — luring Lakshmana away from Sita and enabling Ravana's abduction. His final cry was the instrument that separated Sita from her protectors.",
    traits:["Reluctant","Self-aware","Tragic","Loyal to a fault","Skilled shapeshifter","Fatalistic"],
    verse:"\"He chose the arrow of the righteous over the sword of the wicked. Even that choice was a kind of devotion.\"",
    story:"Maricha is the Ramayana's most reluctant villain. He did not want to do what he did. He knew it was wrong and that he would die. He transformed into a golden deer and walked into a story he could not escape."
  },
  {
    id:22, name:"Jatayu", role:"Vulture King · Guardian of the Skies", category:"ally",
    emoji:"🦅", img:"assets/images/jatayu.png", avatarBg:"linear-gradient(135deg,#2A1A0A,#5A3510)",
    epithets:["Gridhra-raja","Dasharatha-mitra","Sky guardian","Punya-pakshi"],
    priority:"ally",
    attributes:{
      "Species":"Divine Vulture (Gridhra)",
      "Father":"Aruna (charioteer of Surya)",
      "Brother":"Sampati",
      "Old friend of":"King Dasharatha",
      "Final act":"Fought Ravana alone to protect Sita; wings severed",
      "Death":"Died in Rama's arms; attained moksha",
      "Gift":"Told Rama Ravana had taken Sita south"
    },
    description:"Jatayu is one of the most deeply moving figures in the Ramayana — a dying bird who gave everything he had, and in doing so received from Rama what even great sages strive a lifetime for: moksha from the divine's own hand. He is the king of vultures (gridhras), son of Aruna (the charioteer of the Sun God), and an old friend of Dasharatha — the two were comrades from a bygone age. Jatayu lived in the forest near Panchavati and recognized Sita when Ravana flew overhead carrying her in his aerial chariot (Pushpaka Vimana). Without hesitation, the old bird — immeasurably aged, past his prime strength — launched himself at Ravana. He wounded Ravana's horses, shattered his bow, destroyed his chariot, and clawed and battered him with his wings repeatedly. Ravana resorted to his Chandrahas sword and severed Jatayu's wings. The old king crashed to the ground but refused to die until he could give Rama the information: that Sita had been taken, that Ravana was the abductor, that they flew south. When Rama found him dying, he held the bird in his arms and wept. Rama performed the funeral rites for Jatayu himself — the rites of a son for a parent — and proclaimed that Jatayu had attained the same merit as the greatest of warriors in righteous battle. Jatayu was granted moksha.",
    traits:["Ferociously loyal","Selfless","Courageous far beyond his strength","Ancient","Dharmic","Noble"],
    verse:"\"He did not ask if he could win. He saw Sita suffering and flew. That is all. That is everything.\"",
    story:"Jatayu's death in Rama's arms, and the way Rama wept for him as a son weeps for a father, is one of the Ramayana's most heartbreaking and beautiful moments. A dying bird received what kings cannot buy."
  },
  {
    id:23, name:"Sampati", role:"Elder Vulture · Brother of Jatayu", category:"ally",
    emoji:"🦉", img:"assets/images/sampati.png", avatarBg:"linear-gradient(135deg,#1A1A2A,#3A3A5A)",
    epithets:["Jatayu-bhrata","Gridhra-jyeshtha"],
    priority:"ally",
    attributes:{
      "Brother":"Jatayu",
      "Condition":"Wings burned off in youth; lived on Mahendra mountain",
      "Key act":"Confirmed Sita's location in Lanka from 100 yojanas away",
      "Divine sight":"Could see Lanka from the distant southern coast",
      "Result":"Wings miraculously restored after helping Rama's cause"
    },
    description:"Sampati is Jatayu's elder brother, the senior of the two divine vultures. As young birds, Sampati and Jatayu once raced toward the sun to test their courage. As they flew higher and the sun's heat grew unbearable, Jatayu began to weaken — Sampati shielded his brother with his own wings. The sun scorched and burnt off Sampati's wings entirely. He fell to earth and had been living wingless on Mahendra mountain ever since, sustained by the merit of his sacrificial act. The Vanara search party found him as they sat in despair on the southern coast, bewailing Jatayu's death. Sampati emerged from a cave and — recognizing the name Jatayu — listened to the full story. He then confirmed what no one else could: his divine sight reached across the ocean. He could see Lanka, and he could see Sita alive in Ashoka Vatika. This single confirmation gave the search party what they desperately needed — certainty. Without Sampati's testimony, Hanuman might never have made the leap. After helping Rama's cause, his wings were miraculously restored — a boon given long ago by the sage Chandramas that his wings would regrow when he helped Rama in his mission.",
    traits:["Self-sacrificing","Perceptive","Long-suffering","Quietly consequential","Brotherly"],
    verse:"\"He burned his wings for his brother, and fate gave him a second chance — to save the mission of a God.\"",
    story:"Sampati's entire story is one of patient waiting. Decades of wingless life on a mountain, and in one conversation with grieving monkeys, he changed the direction of the epic."
  },
  {
    id:24, name:"Mandodari", role:"Queen of Lanka · Wife of Ravana", category:"other",
    emoji:"🌺", img:"assets/images/mandodari.png", avatarBg:"linear-gradient(135deg,#3A1A3A,#6A3060)",
    epithets:["Pativrata","Lankeswari","Maya-putri"],
    priority:"other",
    attributes:{
      "Father":"Maya (divine architect, asura)",
      "Husband":"Ravana",
      "Sons":"Indrajit (Meghanada), Aksha Kumar, Atikaya",
      "Status":"One of the five ideal women (Panchakanya)",
      "Nature":"Pativrata — deeply devoted despite knowing Ravana's flaws",
      "Post-war":"Married Vibhishana at Rama's request (to preserve her honor)"
    },
    description:"Mandodari is the queen of Lanka, daughter of Maya (the divine architect) and one of the Panchakanya — five ideal women of Hindu tradition whose names are chanted as a morning prayer for purity. She is a figure of extraordinary dignity, wisdom, and heartbreak — married to the most powerful and most flawed of kings. Mandodari repeatedly pleaded with Ravana to release Sita and make peace with Rama, seeing clearly what the outcome must be. She warned him with great tenderness and intelligence, but her counsel — like Vibhishana's — was dismissed. She was the devoted wife who maintained her dharma even as she watched her husband, her sons (Indrajit, Aksha Kumar, Atikaya), and her entire world destroyed by Ravana's single catastrophic choice. After Ravana's fall, she delivered a moving lament over his body — praising his scholarship and greatness while mourning the pride that destroyed him. It is considered one of the most beautiful passages in Valmiki's Ramayana. At Rama's suggestion, to protect her honor and preserve Lanka's queenhood, she married Vibhishana.",
    traits:["Wise","Long-suffering","Devoted","Prophetically accurate","Dignified in grief","Morally clear"],
    verse:"\"She knew the end before it began. She said so. And loved him still. That is not weakness — it is the deepest kind of courage.\"",
    story:"Mandodari's lament over Ravana's body is Valmiki at his most sublime — a woman praising the brilliance of the man who ignored her wisdom. It is the Ramayana's most complex tribute."
  },
  {
    id:25, name:"Tara", role:"Vanara Queen · Consort of Bali", category:"other",
    emoji:"⭐", img:"assets/images/tara.png", avatarBg:"linear-gradient(135deg,#2A2A3A,#505070)",
    epithets:["Bali-patni","Angada-mata","Panchakanya"],
    priority:"other",
    attributes:{
      "Husband":"Bali (first), Sugriva (second — by choice and Rama's counsel)",
      "Son":"Angada",
      "Status":"One of the Panchakanya",
      "Counsel":"Warned Bali not to fight Sugriva the second time, suspecting trickery",
      "Wisdom":"Known for extraordinary strategic intelligence"
    },
    description:"Tara is the chief queen of Kishkindha and wife of Bali. She is one of the Panchakanya — the five ideal women of Hindu tradition. Her wisdom was recognized even among the Vanaras as exceptional. When Sugriva challenged Bali for the second time (after Rama's first attempt failed due to the brothers' identical appearance causing Rama to hold his arrow), it was Tara who counseled Bali with extraordinary strategic insight: something was different about Sugriva's challenge this time; the presence of Rama suggested a divine plan; Bali should not go. Bali dismissed her and walked to his death. When Bali fell, Tara's grief was profound and genuine — her lament over Bali's body is one of Valmiki's most moving passages. She then — understanding dharma and reality — chose to remain in Kishkindha, and at the suggestion of those wise in dharma, became Sugriva's queen. Her continued counsel to Sugriva, including reminding him of his duty to Rama when he delayed sending the search parties, kept the alliance functional.",
    traits:["Prophetically wise","Grieving but practical","Dignified","Loyal","Clear-eyed","Strong"],
    verse:"\"She told him not to go. He went. She wept. Then she stood up and kept the kingdom from crumbling. That is Tara.\"",
    story:"Tara warned the right person, was not listened to, and then rebuilt everything after the disaster. The Ramayana would have collapsed without her quiet, grieving resilience."
  },
  {
    id:26, name:"Urmila", role:"Princess of Mithila · Wife of Lakshmana", category:"other",
    emoji:"🌙", img:"assets/images/urmila.png", avatarBg:"linear-gradient(135deg,#1A1A3A,#303070)",
    epithets:["Mithila-nandini","Janaki-bhagini","Nidra-devi"],
    priority:"other",
    attributes:{
      "Father":"King Janaka",
      "Sister":"Sita",
      "Husband":"Lakshmana",
      "Sacrifice":"Slept for 14 years bearing Lakshmana's sleep",
      "Sons":"Angada and Chandraketu",
      "Nature":"The Ramayana's most invisible heroine"
    },
    description:"Urmila is Sita's younger sister, daughter of King Janaka, and wife of Lakshmana. She is perhaps the Ramayana's most poignant untold story. When Lakshmana decided to accompany Rama into exile, Urmila — newly married — was left behind. What is recorded in the oral tradition but less celebrated in Valmiki's core text is the extraordinary sacrifice: when Lakshmana swore to remain sleepless for the entire fourteen years to guard Rama and Sita, Nidra Devi (the goddess of sleep) came to him. He could not sleep for fourteen years — so who would bear his sleep? He asked for Urmila to bear it. Urmila, without hesitation, agreed. She slept for the entire fourteen years — in her palace chamber, dreaming, while Lakshmana guarded. When Lakshmana returned from exile, he went first to her chamber and awakened her. The reunion is among the most quietly beautiful moments in the Ramayana. Urmila's sacrifice is invisible and immeasurable — she bore the full cost of her husband's devotion to his brother without complaint, without being asked twice.",
    traits:["Selfless","Deeply loving","Uncomplaining","Extraordinary in sacrifice","Quietly heroic"],
    verse:"\"She slept so he could stay awake. She disappeared so he could remain. That is not absence — it is the purest form of presence.\"",
    story:"Urmila's fourteen-year sleep is the Ramayana's most invisible act of heroism. No battle, no weapon, no word of complaint. Just a perfect, loving sacrifice in the dark."
  },
  {
    id:27, name:"Agastya", role:"Sage · Vindhya-tamer · Southern Vedic master", category:"sage",
    emoji:"📖", img:"assets/images/agastya.png", avatarBg:"linear-gradient(135deg,#1A2A1A,#3A5A3A)",
    epithets:["Mitra-Varuna-putra","Pitru-sacrificer","Vindhya-subjugator"],
    priority:"sage",
    attributes:{
      "Birth":"Born from a pot to sages Mitra and Varuna",
      "Wife":"Lopamudra (created from divine energy by Agastya himself)",
      "Home":"Southern forest ashrama",
      "Key deed":"Gave Rama the Aditya Hridayam and the Brahmastra",
      "Achievement":"Tamed Vindhya mountains; drank ocean; destroyed Vatapi-Ilvala asuras",
      "Vedic role":"Carried Vedic civilization south; established Tamil literary tradition"
    },
    description:"Agastya is one of the seven divine sages (Saptarishis) and among the most important figures bridging northern Vedic civilization to southern India. He is the Ramayana's crucial intervention at its climactic moment. When Rama was exhausted and dispirited in the final stage of his battle with Ravana — despite all weapons, Ravana kept rising — it was the sage Agastya who descended from the heavens, stood before Rama, and taught him the Aditya Hridayam (Heart of the Sun), a magnificent hymn glorifying Surya. The chanting of this hymn revitalized Rama's spirit and body, and Agastya then gave him the supreme Brahmastra: the weapon that finally slew Ravana. Without Agastya's intervention, the final battle's outcome was uncertain. Earlier in the epic, Agastya welcomed Rama, Sita, and Lakshmana to his ashrama during their exile and gave Rama the divine bow of Vishnu and celestial arrows. He also narrated the story of the Dandaka forest's past to provide context. His legends are vast: he drank the entire ocean to expose demons hiding within it, subjugated the Vindhya mountains by asking them to bow until he returned (and never returned — so the Vindhyas remain bowed), and created his wife Lopamudra from the finest qualities of all creatures.",
    traits:["Cosmic power","Humorous at times","Encyclopedic knowledge","Crucial intervener","Ancient","Decisive"],
    verse:"\"He arrived at the exact moment the story needed him. That is the nature of a true sage — perfectly timed, perfectly given.\"",
    story:"Without Agastya descending at the right moment with the Aditya Hridayam, Rama might not have found the strength to deliver the final blow. The sage is the Ramayana's hidden catalyst."
  },
  {
    id:28, name:"Nala", role:"Vanara Engineer · Builder of Rama Setu", category:"ally",
    emoji:"🌉", img:"assets/images/nala.png", avatarBg:"linear-gradient(135deg,#0A2A2A,#1A5A5A)",
    epithets:["Vishwakarma-putra","Setu-karta","Setubandha Nala"],
    priority:"ally",
    attributes:{
      "Father":"Vishwakarma (divine architect of the gods)",
      "Skill":"Divine engineering — whatever he placed in water floated by divine boon",
      "Achievement":"Built the Rama Setu (Adam's Bridge) — 100 yojana bridge over the ocean",
      "Co-builder":"Nila (another skilled Vanara)",
      "Time":"Built in five days by the Vanara army",
      "Legacy":"The bridge is still visible between India and Sri Lanka"
    },
    description:"Nala is the son of Vishwakarma, the divine architect of the gods, and he inherited his father's engineering genius. He is the Vanara who made the impossible possible: the construction of the Rama Setu — the legendary bridge (also called Adam's Bridge) across the ocean from the southern tip of India to Lanka, a distance of one hundred yojanas. When Rama's army reached the ocean and no means of crossing appeared, Rama prayed to the ocean god Samudra, who eventually appeared and revealed that Nala, by virtue of his divine parentage, possessed a boon: whatever stone or object he touched would float upon water. Armed with this knowledge, the entire Vanara army set to work. In five days (different texts vary: three to five days) they quarried mountains, carried trees, and assembled a bridge of floating rocks — each marked with Rama's name to ensure they floated. Nala directed the engineering with the genius of his divine inheritance. The bridge allowed Rama's enormous army of Vanaras and bears to cross to Lanka. Geological and satellite survey evidence of a submerged shallow ridge between Dhanushkodi and Mannar Island remains a subject of scientific and religious significance to this day.",
    traits:["Brilliant engineer","Gifted by birth","Decisive","Selfless","Practical genius"],
    verse:"\"He didn't move mountains. He floated them. That is the difference between strength and genius.\"",
    story:"Nala's bridge is one of the most audacious engineering acts in all literature — a road laid across an ocean, built by an army of monkeys, to rescue one woman and restore the world's dharma."
  },
  {
    id:29, name:"Garuda", role:"King of Birds · Mount of Vishnu", category:"divine",
    emoji:"🦅", img:"assets/images/garuda.png", avatarBg:"linear-gradient(135deg,#3A2A0A,#8A6A1A)",
    epithets:["Vainateya","Suparna","Vishnu-vahan","Nagantaka"],
    priority:"divine",
    attributes:{
      "Father":"Kashyapa Maharishi",
      "Mother":"Vinata",
      "Mount of":"Vishnu / Rama",
      "Nature":"Enemy of all serpents (nagas)",
      "Key act in Ramayana":"Dissolved the Nagastra binding Rama and Lakshmana",
      "Power":"Flight at the speed of thought; invulnerable; lord of skies"
    },
    description:"Garuda is the divine eagle, king of all birds, and the vehicle (vahana) of Lord Vishnu — and thus of Rama his avatar. In the Ramayana, his crucial intervention comes when Indrajit deployed the devastating Nagastra — a weapon that transformed into thousands of divine serpents that bound Rama and Lakshmana completely, rendering them helpless on the battlefield. All the gods, sages, and Vanaras were struck with horror, fearing the divine brothers were lost. Garuda appeared from the sky in a blaze of light and wind. As the eternal enemy of serpents, his mere presence dissolved the Nagastra — the serpent-arrows fled in terror, and Rama and Lakshmana were freed, healed, and restored. Garuda greeted Rama with great love (recognizing his own lord) and cryptically told him he could not reveal why he had come — it was not yet time for the full revelation of Rama's divinity. He then departed. His intervention was brief but absolutely decisive — without it, the war would have ended at that moment with Lanka's victory.",
    traits:["Majestic","Swift","Devoted","Supremely powerful","Cryptic in wisdom","Decisive intervener"],
    verse:"\"He did not fight a battle. He arrived, and the battle rearranged itself around him. That is divinity.\"",
    story:"Garuda's appearance is the Ramayana's most elegant divine intervention — minimal in words, absolute in effect. The serpents didn't need to be fought. They simply fled."
  },
  {
    id:30, name:"Valmiki", role:"Sage · Author of the Ramayana", category:"sage",
    emoji:"🪷", img:"assets/images/valmiki.png", avatarBg:"linear-gradient(135deg,#1A0A2A,#3A1A5A)",
    epithets:["Adikavi","Prachetas-putra","Brahmarshi","Ramayana-karta"],
    priority:"sage",
    attributes:{
      "Title":"Adikavi — the First Poet",
      "Original name":"Ratnakara (a highway robber)",
      "Transformation":"Through meditation on 'Rama' (chanting Mara-Mara) became enlightened",
      "Work":"Composed the Ramayana — 24,000 shlokas in 7 Kandas",
      "In the story":"Gave refuge to Sita; raised Lava and Kusha; taught them to sing Ramayana",
      "First shloka":"Born from grief (shoka) at seeing a hunter kill a mating bird"
    },
    description:"Valmiki is the Adikavi — the first poet in the Sanskrit tradition — and the author of the Ramayana, the foundational epic of Indic civilization. His own story is a tale of total transformation: born Ratnakara, he was a highway robber who supported his family by theft and crime. When the sage Narada encountered him, Ratnakara was stopped in his tracks and asked whether his family — for whom he committed all these sins — would share his sins. He bound Narada and went to ask them; each family member said they would share his wealth but not his karma. Shattered, he surrendered to Narada, who gave him the Ram-naam mantra. He sat in such deep meditation that anthills (valmika) grew around him — hence the name Valmiki. The divine vision of the Ramayana was given to him by Brahma after he witnessed a hunter kill a male bird, and the female's cry of grief spontaneously became the Ramayana's first shloka — the birth of poetry from sorrow. He gave refuge to the exiled Sita in his ashrama, raised her sons Lava and Kusha, and taught them the entire Ramayana. When Rama organized an Ashwamedha yagna, it was Lava and Kusha who sang the Ramayana in his court — and Rama, hearing his own story, recognized his sons. Valmiki is simultaneously the author, a character, and a witness of the story he tells.",
    traits:["Transformed","Divinely gifted","Compassionate","Authoritative","Unique position in the story"],
    verse:"\"From grief came the shloka. From the shloka came the story. From the story came civilization. Valmiki did not write a poem — he gave birth to a world.\"",
    story:"Valmiki's journey from highway robber to the composer of humanity's oldest epic is itself the most complete Ramayana theme: the transformative power of the divine name and the possibility of absolute renewal."
  }
];

let activeFilter = 'all';
let searchQuery = '';
let lastFocusedElement = null;

function getAvatarStyle(c){
  return `background:${c.avatarBg};`;
}

function characterMatchesQuery(character){
  const haystack = [
    character.name,
    character.role,
    ...character.epithets
  ].join(' ').toLowerCase();

  return haystack.includes(searchQuery);
}

function renderCards(){
  const grid = document.getElementById('characterGrid');
  const filtered = CHARACTERS.filter(c=>{
    const matchFilter = activeFilter==='all' || c.category===activeFilter;
    const matchSearch = !searchQuery || characterMatchesQuery(c);
    return matchFilter && matchSearch;
  });
  
  if(!filtered.length){
    grid.innerHTML='<div class="no-results">No souls found matching your search</div>';
    return;
  }
  
  grid.innerHTML = filtered.map((c,i)=>`
    <button class="char-card" type="button" data-character-id="${c.id}" aria-label="Open ${c.name} details" style="animation-delay:${i*0.05}s">
      <div class="card-inner">
        <span class="priority-badge priority-${c.priority}">${i+1}</span>
        <div class="avatar-wrap">
          <div class="avatar-halo"></div>
          <div class="avatar-halo2"></div>
          <div class="avatar" style="${getAvatarStyle(c)}"><img class="avatar-image" src="${c.img}" alt="${c.name}" loading="lazy"><span class="avatar-fallback">${c.emoji}</span></div>
        </div>
        <div class="char-name">${c.name}</div>
        <div class="char-role">${c.role.split('·')[0].trim()}</div>
        <div class="char-epithet">${c.epithets[0]}</div>
      </div>
    </button>
  `).join('');
}

function openModal(id){
  const c = CHARACTERS.find(x=>x.id===id);
  if(!c)return;
  
  const attrHtml = Object.entries(c.attributes).map(([k,v])=>`
    <div class="attr-item">
      <div class="attr-label">${k}</div>
      <div class="attr-value">${v}</div>
    </div>
  `).join('');
  
  const tagHtml = c.epithets.map(e=>`<span class="modal-epithet-tag">${e}</span>`).join('');
  const traitHtml = c.traits.map(t=>`<span class="trait-pill">${t}</span>`).join('');
  
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-avatar" style="background:${c.avatarBg};"><img class="avatar-image" src="${c.img}" alt="${c.name}"><span class="avatar-fallback">${c.emoji}</span></div>
      <h2 class="modal-name" id="modalTitle">${c.name}</h2>
      <div class="modal-role-label">${c.role}</div>
      <div class="modal-epithets">${tagHtml}</div>
    </div>
    <div class="modal-body">
      <div class="section-title">Sacred Attributes</div>
      <div class="attr-grid">${attrHtml}</div>
      
      <div class="section-title">Character & Nature</div>
      <div class="trait-pills">${traitHtml}</div>
      
      <div class="section-title">The Complete Story</div>
      <div class="section-text">${c.description}</div>
      
      <div class="star-divider">✦ ✦ ✦</div>
      
      <div class="section-title">Sacred Journey</div>
      <div class="section-text">${c.story}</div>
      
      <div class="story-verse">${c.verse}</div>
    </div>
  `;
  
  lastFocusedElement = document.activeElement;
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  document.getElementById('modalClose').focus();
}

function closeModal(){
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  if(lastFocusedElement) lastFocusedElement.focus();
}

function setFilter(filter, button){
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    const isActive = btn === button;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  renderCards();
}

function setupRevealAnimations(){
  const sections = document.querySelectorAll('.reveal-section');

  if(!('IntersectionObserver' in window)){
    sections.forEach(section=>section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.14});

  sections.forEach(section=>observer.observe(section));
}

function setupEventListeners(){
  const searchInput = document.getElementById('searchInput');
  const filterSection = document.getElementById('filterSection');
  const grid = document.getElementById('characterGrid');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');

  searchInput.addEventListener('input',event=>{
    searchQuery = event.target.value.toLowerCase().trim();
    renderCards();
  });

  filterSection.addEventListener('click',event=>{
    const button = event.target.closest('[data-filter]');
    if(button) setFilter(button.dataset.filter, button);
  });

  grid.addEventListener('click',event=>{
    const card = event.target.closest('[data-character-id]');
    if(card) openModal(Number(card.dataset.characterId));
  });

  modalOverlay.addEventListener('click',event=>{
    if(event.target === modalOverlay) closeModal();
  });

  modalClose.addEventListener('click',closeModal);

  document.addEventListener('keydown',event=>{
    if(event.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  document.addEventListener('error',event=>{
    if(!event.target.classList.contains('avatar-image')) return;
    event.target.classList.add('is-hidden');
    event.target.nextElementSibling.classList.add('is-visible');
  },true);
}

function hideLoader(){
  const loader = document.getElementById('pageLoader');
  document.body.classList.remove('is-loading');
  loader.classList.add('hidden');
}

function init(){
  document.body.classList.add('is-loading');
  setupEventListeners();
  setupRevealAnimations();
  renderCards();
  window.addEventListener('load',hideLoader);
  window.setTimeout(hideLoader,900);
}

init();
