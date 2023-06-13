import { DataConfig, Contact } from "types";

const AllenRoper: Contact = {
  name: "Allen Roper",
  email: "Allen@experienceRTA.com",
  phone: "706-347-0448",
  type: "all",
  title: "Agent | Manager | Owner",
};

const JasonMiles: Contact = {
  name: "Jason Miles",
  email: "Jason@experienceRTA.com",
  type: "all",
  title: "Agent | Manager",
};

const MattKolinski: Contact = {
  name: "Matt Kolinski",
  email: "matt@liveatnectars.com",
  type: "management",
};

const EricPuente: Contact = {
  name: "Eric Puente",
  email: "eric.puente@royalartistgroup.com",
  type: "booking",
};

const JordanCarriere: Contact = {
  name: "Jordan Carriere",
  email: "jordan@alpine-partners.net",
  type: "booking",
};

const MichaelKrell: Contact = {
  name: "Michael Krell",
  email: "Michael@experienceRTA.com",
  type: "booking",
  title: "Agent | Agent Assistant",
};

const KevinLynch: Contact = {
  name: "Kevin Lynch",
  email: "Kevin@experienceRTA.com",
  title: "Finance Manager",
};

export const data: DataConfig = {
  name: "Roundtable Artists",
  description: "",
  contacts: [AllenRoper, JasonMiles, MichaelKrell, KevinLynch],
  style: {
    roster: {
      trackListing: "text-[#B9A48E] text-white",
    },
  },
  artists: {
    litz: {
      name: "LITZ",
      imageUrl: "Promo5_2_is5yjo",
      website: "http://www.litzmusic.com/",
      bio: [
        "Maryland based LITZ provides you with a healthy dose of rock and funk with an electronic twist. Their original catalog of music spans nearly a decade and features imaginative lyrics, dancing rhythms, slapping bass, sensational horns and guitar prowess.",
      ],
      social: {
        youtube: "http://www.youtube.com/LITZjams",
        facebook: "http://www.facebook.com/LITZjams",
        instagram: "http://www.instagram.com/funkyLITZmusic",
        spotify:
          "https://open.spotify.com/artist/58c8ftGgtwcSIoZcHx45pd?si=E6AiuFCsTpiMyoJ8_9F_QA&nd=1",
        nugsnet:
          "https://www.nugs.net/litz-concerts-live-downloads-in-mp3-flac-or-online-music-streaming",
      },
      agents: [AllenRoper],
      photos: ["Promo6_y8kkfq", "Promo3_farpky"],
      videos: ["7GiEX-vddzY", "Rx-KoKnHVKs"],
      listen: {
        amazon: "https://music.amazon.com/artists/B002XTJBY2",
        apple: "https://music.apple.com/us/artist/litz/1541184479?app=music",
        spotify: "https://open.spotify.com/artist/58c8ftGgtwcSIoZcHx45pd",
        youtube: "https://youtube.com/channel/UCK41wtB_yD3IWCKi6mUKm6A",
      },
      tracks: [
        {
          name: "Morning Dew",
          url: "https://p.scdn.co/mp3-preview/d66beb65ad042d3192d512acc134b539e06acb9a?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Funkin' Problem",
          url: "https://p.scdn.co/mp3-preview/048e9a95f099be04ee3bf872fe5d664c3daceb1e?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Tomatoes",
          url: "https://p.scdn.co/mp3-preview/dec4c38ee59c4aa5e40a2a293ee15f41cd361bb4?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Straight to the Moon - Live",
          url: "https://p.scdn.co/mp3-preview/c041fa477aae19daf906f5c3277c548ef5250c5d?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Japanese Love Affair - Mercury Lounge - New York, NY - 12.16.22",
          url: "https://p.scdn.co/mp3-preview/b2ed0105a4d46e778235fb56051acb7aeb479ddd?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["buffalo-wabs-the-price-hill-hustle"]: {
      name: "Buffalo Wabs & The Price Hill Hustle",
      imageUrl: "buffalo-wabs-the-price-hill-hustle_xwc1bg",
      bio: [
        "It’s hard to stay still around these boys. They’ve got that toe-tapping, knee-slapping, boot-stomping kind of sound. They get you moving and shaking. Buffalo Wabs & The Price Hill Hustle—part rowdy honkytonk, part old-time pioneers—equates to a sound that sticks with your soul and leaves you singing barefoot into the star sky.",
        "They pull from all sorts of genres—from Lead Belly to John Prine, from Woody Guthrie to Willy Tea Taylor —to create something unique and deep-rooted. These guys lean into the rhythms of the Ohio River Valley—where they’ve walked upon—and look to the songs in the muddy water and the tradition it carries.",
        "To get “hustled” is to get the full-body musical experience—that head-boppin’, hip-swaying, soul-singing with the stranger next to you. It’s the kind of music that encapsulates you into a community of sound, one that becomes familiar once you hear it, like maybe, you’ve been listening to them forever.",
      ],
      agents: [{ ...AllenRoper, type: "booking" }],
      social: {
        instagram: "https://www.instagram.com/pricehillhustle",
        facebook: "https://www.facebook.com/pricehillhustle",
        youtube: "https://www.youtube.com/@BuffaloWabs",
      },
      videos: ["pMgYLD4JesE", "5--Q3GWLdoo"],
      listen: {
        apple:
          "https://music.apple.com/us/artist/buffalo-wabs-the-price-hill-hustle/898140828?app=music",
        amazon: "https://music.amazon.com/artists/B00LQLF6MY",
        spotify: "https://open.spotify.com/artist/4bVIBJHmQxWrvBZOrea5p5",
        youtube: "https://music.youtube.com/browse/UC3Lgi7PqAUYm1Fs5c1_XBdw",
      },
      tracks: [
        {
          name: "Four Walls of Raiford",
          url: "https://p.scdn.co/mp3-preview/15632a80db15e5a0ee177b7a3488d831c463cb9f?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Long Gone (From Bowling Green)",
          url: "https://p.scdn.co/mp3-preview/bd63d7ffe704c172b3f1f3a30c936465426b0587?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Oh, Ramona!",
          url: "https://p.scdn.co/mp3-preview/a4e26f66a5ad1072ae3aa710310c9abcee29dd66?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Buffalo's Canon",
          url: "https://p.scdn.co/mp3-preview/8783018320c04a472d197a8e79aeb32485ab0105?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Stewball",
          url: "https://p.scdn.co/mp3-preview/b306c1ddb1b91ba6f687beb4b03e2f7d8ab1049d?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["charlie-brown-superstar"]: {
      name: "Charlie Brown Superstar",
      imageUrl: "MAIN_hnadkq",
      website: "https://charliebrownsuperstar.com/",
      bio: [
        "Charlie Brown Superstar (Brett Fuller) is a DJ, producer, remixer, and artist from Huntington, WV. A veteran of the West Virginia DJ scene, playing at such clubs as Gumby’s, Gyrationz, and the V Club since the mid 90s, Fuller is known for playing a wide range of music with a focus on Nu Disco and house, and is also known in the Nu Disco/Disco Edit scene as a producer.",
        "He has released music with labels across the world, including Candy Beach Records in Spain, Thunder Jam Records in Israel, and Sound Exhibitions Records and Boutade Musique, both out of Italy, as well as American labels, Bent Ant and Fresh Farm Records. Fuller’s songs have charted on all three major DJ music sites: Traxsource, Beatport, and Juno Download. His track “Never Gonna Stop” with Alpaca Edits (England) spent weeks at #2 on Traxsource Lounge/Chill Out chart. Several of his songs have also been included on the Traxsource “Essential List.” In addition to his solo work, in the early 2000s, Fuller also released 2 full-length records and toured with the band Hyatari, and was also a touring member of the 90s band Chum.",
        "Currently, Fuller concentrates on what he calls Mountain Funk, an eclectic blend of jam, funk, and electronic, with elements of local flavor, that he has showcased at festivals such as Mountain Music Fest, Brew Skies, and Kickin’ It On the Creek, and, more locally, Huntington Music and Arts Fest and Funktafest. Fuller has played clubs across the Midwest, including in Indiana, Kentucky, and Ohio, and is part of the Rust Belt Alliance, which features DJs based in Pittsburgh, Detroit, and Huntington.",
      ],
      social: {
        facebook: "https://www.facebook.com/charliebrownsuperstar",
        instagram: "https://www.instagram.com/charliebrownsuperstar/?hl=en",
        twitter: "https://twitter.com/chuckbsuperstar",
        tiktok: "https://www.tiktok.com/@charliebrownsuperstar",
        youtube: "https://www.youtube.com/channel/UCFwuuXFkC5lF7LUbBUYpbVA",
      },
      agents: [{ ...JasonMiles, type: "booking" }],
      listen: {
        apple:
          "https://music.apple.com/us/artist/charlie-brown-superstar/316883023?app=music",
        spotify: "https://open.spotify.com/artist/3qIsKXFoNrxUCpgmTl5hlQ",
        soundcloud: "https://soundcloud.com/charlie-brown-superstar",
        mixcloud: "https://www.mixcloud.com/charliebrownsuperstar/",
      },
      photos: ["DSCF1346_lwl7rk", "CBS_JN_LIVE_1_1_i4uk3p"],
      tracks: [
        {
          name: "Never Gonna Stop - Original Mix",
          url: "https://p.scdn.co/mp3-preview/f3d811f72c8cab7488559dff0f03e274ec54dae8?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Be Thankful For What You've Got",
          url: "https://p.scdn.co/mp3-preview/f843591839f3f7d8d700b51f6d5ffc6e9a231e13?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Insane - Original Mix",
          url: "https://p.scdn.co/mp3-preview/99c2781c0b36010dc6293b3dd683395d69e0d2b3?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Goin' South - Original Mix",
          url: "https://p.scdn.co/mp3-preview/d07bd4a6e3b737c31629e8e717b345e9c10ddc3e?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Givin' It Up - Original Mix",
          url: "https://p.scdn.co/mp3-preview/cf9e77ad6d9227869b651c3e222cc23cc02b1c5e?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["darrin-hacquard"]: {
      name: "Darrin Hacquard",
      imageUrl: "darrin-hacquard_uxvwxt",
      website: " https://darrinhacquard.com",
      bio: [
        "Darrin Hacquard writes songs that connect. He’s funny, tortured, melancholy, and joyous. Sometimes he’s all of these at once. It’s an uncanny gift for empathy. He can see characters for not just what they are, but what they hope to be. His sonic landscapes are as diverse as the lyrical subjects that populate his songs. From Old Time, to Psyche-Rock, to Country, to Spaghetti Western, Darrin builds stories in a way that only he can, and tells them with unflinching vision and kindness.",
      ],
      social: {
        instagram: "https://www.instagram.com/darrin.hacquard/",
        facebook: "https://www.facebook.com/DarrinHacquardOfficial",
        spotify:
          "https://open.spotify.com/artist/3bYRLgDr7vnTAVtQR7UUla?si=YsBfwZ_RThqEdgaLUB_PnQ",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B075GZKSBT",
        apple:
          "https://music.apple.com/us/artist/darrin-hacquard/1278631455?app=music",
        spotify: "https://open.spotify.com/artist/3bYRLgDr7vnTAVtQR7UUla",
        youtube: "https://music.youtube.com/browse/UCijtSH7bvbmw14IIGDPEffA",
      },
      tracks: [
        {
          name: "Hurricane Season",
          url: "https://p.scdn.co/mp3-preview/4793e419694dc80dfaa2dcf8a4d74d13ae691f50?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "You Were a Friend",
          url: "https://p.scdn.co/mp3-preview/22008ed55c0bbe263ecafae9a8d76102ba8bd93b?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Mountains",
          url: "https://p.scdn.co/mp3-preview/e153935f6290dc4a0762a1e7a8d33a91f5bf164c?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "She's Gone (For Anna)",
          url: "https://p.scdn.co/mp3-preview/00db34fa97412d5a39c9aeda1bdd8e2b67093086?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Never Again",
          url: "https://p.scdn.co/mp3-preview/12ce45d3728305de488a37aab46134d6e17fe8d4?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["eric-bolander"]: {
      name: "Eric Bolander",
      imageUrl: "eric-bolander_v8n58f",
      website: "http://www.ericbolander.com/",
      bio: [
        "Eric Bolander's flavor of Americana/folk music offers soulful vocal tone with thoughtful melodies that have staying power. Lyrically driven by life experiences, Eric's songs will give you a glimpse into his life and a realization that happiness can be perpetuated through pain.",
        "Eric grew up in the small eastern KY town of Garrison in the Ohio River Valley along the foothills of Appalachia (pop. 1400). He learned through his Dad to work for what you want/need and never take someone for granted. Love and work ethic were driving forces of his humble upbringing. Eric now lives and works out of Lexington, KY. He's called Lexington home for most of his adult life. An Art Teacher by day and Musician by night, Eric's mind is always immersed in the arts. Passion for the arts is what keeps him moving forward.",
      ],
      social: {
        facebook: "https://www.facebook.com/ericbolandermusic",
        instagram: "https://instagram.com/ericbolander",
        youtube: "https://www.youtube.com/channel/UCma5IwhQTG4Htv8V5G1YuGQ",
        spotify: "https://open.spotify.com/search/eric%20bolander",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B01C73SH52",
        apple:
          "https://music.apple.com/us/artist/eric-bolander/1087649369?app=music",
        spotify: "https://open.spotify.com/artist/2CYVlOC4GmL0vpjXoKESpJ",
        youtube: "https://music.youtube.com/browse/UCbHG04bvlVGhe9Xk5nBgCZA",
      },
      tracks: [
        {
          name: "The Wind",
          url: "https://p.scdn.co/mp3-preview/d076baa57fcff7971dc1c0041216a5b607980998?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Oh Lord - Live",
          url: "https://p.scdn.co/mp3-preview/19cfec528c9cfd7ec6f0781de724b79d1542bb33?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Cold Men - Live",
          url: "https://p.scdn.co/mp3-preview/6e9e8d06fcbaff2942b480bf4ea5a1cba4d8aef4?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Can't Take Anymore - Live",
          url: "https://p.scdn.co/mp3-preview/a42242996295c1ed8f291d6c4560d16660c2faa5?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "The Road",
          url: "https://p.scdn.co/mp3-preview/974673e0c399bb975be6f9c94ef1b626f5d6c470?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["crypto-wave-radio"]: {
      name: "crypto WAVE radio",
      imageUrl: "photo_mar_18_2023_8_48_30_pm_1_1_oec34z",
      bio: [
        "Austin Litz was born for this. Music is in his blood, passion pumps his heart, and the future is on his mind, so he’s using what he knows to embrace the new world of crypto and NFTs. His new house/bass project, cryptoWAVEradio, is Austin’s pandemic distraction-turned-new career and second band. Since launching the cryptoWAVEradio live stream, where he explains his production techniques and discusses the blossoming NFT scene, Austin has posted over 100 NFTs for sale on the opensea.io marketplace, raised around $10K for Dance Safe through collaborations, and has started producing records for other artists, including his own and that of his original live band, LITZ.",
        "Coming from a long line of Italian music makers, Austin’s grandfather was one of the first guitar players to introduce the electric guitar to Washington, D.C.. He later went on to establish the Litz Music Center in Maryland which still sells instruments and offers lessons today, under the same family ownership. Austin grew up in the shop, messing around with any instruments he wanted and eventually landing in violin and saxophone lessons. He was inspired by the clientele, blue collar musicians supporting their modest music careers and bigger name touring rockers, alike.",
        "In college, Austin was the man who brought the party. Sometimes he would host the rave, sometimes he would play music, sometimes he would hire touring bands; during one show where he threw together a band to open for Pigeons Playing Ping Pong, he started to really feel like he was on to something, and they decided to keep rehearsing. It helped that two of the other members were his brothers, Mike and Logan, so they set out under the moniker LITZ. The cast of characters has rotated around them but they still play regularly and release new music together, including many of the tracks made under cryptoWAVEradio.",
        "When the pandemic hit and live bands were entirely shut down, Austin turned to his computer and the tools he had to find the creative outlet he needed. At the same time, the internet was abuzz with talk of NFTs, or non-fungible tokens, which are, in short, digitally certified one-of-a-kind digital pieces of art that can be worth a lot of cryptocurrency. He took the opportunity to live-stream his self-education on creating unique house/bass music and joke with some of his followers about NFTs. Now, cryptoWAVEradio has evolved into Austin’s use of Ableton Live, digital and analog synths, drum machines, just about every real instrument including all sorts of saxophones, flutes, world instruments like bells and didgeridoo, and more.",
        "cryptoWAVEradio performs live with Austin’s custom built tower of electronic improvisations. He is often joined by his Venus Rising Dancers and occasionally with live drums from Samwise the Great. “It’s a spellbinding combination of driving synthwave bass, humorous and ironic lyrics and banter,” says The Jamwich. “Austin’s iconic saxophone and flute accompaniment... [cryptoWAVEradio is] all the vibes to fuel an economic and music revolution.”",
      ],

      social: {
        facebook: "https://m.facebook.com/cryptowaveradio",
        instagram: "instagram.com/crypto_wav",
        youtube: "https://youtube.com/channel/UCzgXKoc_HqRrJ7CKiEkiYOA",
        spotify:
          "https://open.spotify.com/artist/3xmyYiBUah44tP2kJvPuDF?si=z1vylszLTsWafACRIPv-Fg",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      photos: [
        "photo_mar_18_2023_8_15_51_pm_1_1_twput4",
        "photo_mar_18_2023_8_25_16_pm_1_1_rl6jzv",
      ],
      listen: {
        spotify: "https://open.spotify.com/artist/3xmyYiBUah44tP2kJvPuDF",
      },
      tracks: [
        {
          name: "Love Sick Dreams",
          url: "https://p.scdn.co/mp3-preview/aca4f257f120b9764faeefba76f4ed8b5d2a8954?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Magick Every Sunday",
          url: "https://p.scdn.co/mp3-preview/f97192ce59a7fb503ad55463f9044e7c50fa9b5e?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Welcome To The Game",
          url: "https://p.scdn.co/mp3-preview/82862a8b935e238cb525627bb6b80909558d3725?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "One Night Stand",
          url: "https://p.scdn.co/mp3-preview/caf260ecabb647e2b75e6e037e745c63616a191d?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Long Distance Traveler",
          url: "https://p.scdn.co/mp3-preview/f0760c4cf81248bacf0a047cf4f28309810d6e17?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["jaden-decker"]: {
      name: "Jaden Decker",
      imageUrl: "jaden-decker_kfmtzz",
      website: "https://www.jadendecker.com/",
      bio: [
        "Jaden Decker is a 17 year old American singer/songwriter from Missoula Montana. His sound is Rocky Mountain Country; described as a mix of country, roots rock, and folk. Jaden's music draws from his family's midwest roots and the love of his home state. Jaden's songwriting is straight forward, relatable, and unapologetic. This young man's piercing voice and picking skills shine through. Jaden is an old soul that has a lot to say and people are listening.  The songs are about love, loss, trials, tribulations, family, and Montana.  Jaden picked up a guitar at the age of 6 and has not put it down. Jaden started booking his own national tour at the age of 14 and never looked back. Jaden released his first album Montana Grown to rave reviews in 2020. He also released a well received self titled ep in 2021. Jaden's much anticipated third album was recorded at the iconic Blackbird Studios in Nashville and is set to be released this summer. Jaden will also be announcing his third extensive national summer tour in support of the new album.",
      ],
      social: {
        instagram: "https://www.instagram.com/jadenwdecker",
        facebook: "https://www.facebook.com/jadendeckerofficial",
        youtube: "https://www.youtube.com/user/jadendecker",
        spotify:
          "https://open.spotify.com/artist/5cJ2IQj7rxvFdn9DBAlXJK?si=Pd47aO7CQe-Sjh3Tw5QOYA",
      },
      agents: [JasonMiles],
      listen: {
        amazon: "https://music.amazon.com/artists/B07V3NSRDK",
        apple:
          "https://music.apple.com/us/artist/jaden-decker/1472300542?app=music",
        spotify: "https://open.spotify.com/artist/5cJ2IQj7rxvFdn9DBAlXJK",
        youtube: "https://music.youtube.com/browse/UCPxa6Rte89L7_DHuX7G2VEQ",
      },
      tracks: [
        {
          name: "Mountain Top Road",
          url: "https://p.scdn.co/mp3-preview/8015240a124e0c0c33fd270f8103733919d3df42?cid=0b297fa8a249464ba34f5861d4140e58",
        },
      ],
    },
    ["jeremy-short"]: {
      name: "Jeremy Short",
      imageUrl: "jeremy-short_wljy7z",
      website: "http://jeremyshortmusic.com",
      bio: [
        "With an orange mustache, golden voice and cherry red Gibson ES-335, Eastern Kentucky Space Funk artist Jeremy Short has quickly risen to the top shelf of must-hear players on the scene. ",
        "Having garnered significant recognition for his masterful, yet seemingly effortless guitar playing “Kentucky’s Jeremy Short is one of the top 30 blues guitar players in the world. Don’t take it from me — take it from the judges at Memphis’s International Blues Challenge, where Short semi-finaled in 2016 and 2017. Short is known for his guitar pyrotechnics and commitment to groove” (No Depression), “Jeremy is one of several slide players that I’d match their skills up against anyone in the world” (Capture Kentucky)",
        "“A little bit Marvin Gaye, a little bit Pink Floyd and a little bit Tyler Childers, Jeremy Short’s jam-fueled Appalachian soul music proves that there’s a lot more than country and bluegrass music radiating from the Eastern Kentucky mountains. Short’s epic tales will leave you dancing with jubilation one moment and crying the next. His unique blend of Appalachian soul music is incredibly effective and authentic because Appalachia is such an integral part of his own soul, and always will be.” (Matt Wickstrom)",
        "With radio ready hits like “Trance”, “Happy Trees”, and “Rock of Ages”, Short encourages you to forget the stress of life and get lost in his music. “Sometimes, you just gotta dance to get it out. So if you feel like dancing, dance. If you feel like singing along, do it. Do what feels right.”",

        "Short has been touring, singing and playing his guitar for nearly 20 years. Having shared the stage with many notable acts (Tyler Childers, Kingfish, Marcus King, Taj Mahal, Rev Peyton’s Big Damn Band), and notched his belt with festivals like Bonnaroo, Floydfest, Mountain Music Festival, Master Musicians Festival, & Healing Appalachia, the future for Short is looking bright.",
      ],
      social: {
        instagram: "https://www.instagram.com/jeremyshortmusic/",
        facebook: "https://www.facebook.com/jeremyshortmusic",
        spotify: "https://open.spotify.com/artist/4hQzw3DwHQjVDfUtv9f9qp",
        youtube: "https://www.youtube.com/@jeremyshortmusic",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B01BBIRYLC",
        apple:
          "https://music.apple.com/us/artist/jeremy-short/1078901614?app=music",
        spotify: "https://open.spotify.com/artist/7mwUDOg57rFeb5E3bp1pJU",
        youtube: "https://music.youtube.com/browse/UC1f_rc-4tsgToanV2nw6OJA",
      },
      tracks: [
        {
          name: "(Falling Into A) Trance",
          url: "https://p.scdn.co/mp3-preview/bd9920ed84361fe0407893e73dede0693fb1d96e?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Happy Trees",
          url: "https://p.scdn.co/mp3-preview/55f5b07229c0d1531765b8156857d21802741d20?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Sorry, My Brother",
          url: "https://p.scdn.co/mp3-preview/250430a2123ae7b799905806e5b4127547948ec0?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Rock Of Ages",
          url: "https://p.scdn.co/mp3-preview/2b88f7e9c8141a823a7fb308933779ab2fb02339?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Time",
          url: "https://p.scdn.co/mp3-preview/0c80f5b9b0160cd623108e6bc370b3774e0d5be0?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["root-shock"]: {
      name: "Root Shock",
      imageUrl: "Promo_Photo_4_rv3icg",
      bio: [
        `Conscious, soulful, even healing— `,
        `That’s how many fans of Root Shock have described the band’s infectious sound and energy. They’ve developed a voice that transcends genre but can make anyone move their body and uplift their spirit. `,
        `Spearheaded by the powerhouse vocals of Jessica Brown, the Root Shock sound is both commanding and cathartic, but never at the expense of a velvety, carefully placed jazz or neo-soul lick. Phil Grajko’s smooth vocals complement his guitar style inspired by Latin, prog, and psychedelic rock textures—often in tandem with mad keyboard genius Brian Lauri. Rounding out the band, bassist Elliot Jarvis and drummer Tyre Outerbridge make for a formidable rhythm section fluent in patterns ranging from reggae to funk to rock and maybe even metal.`,
        `In 2016, Root Shock released a self-titled album, produced by Jason “Jocko” Randall at More Sound Studio, and followed that up with the “Many Paths” EP in 2018 & the single “Waves” in 2019.  In May 2023 they released another single “Ain’t Gonna Break” recorded at keyboard player Brian’s studio The Lion’s Den.`,
        `These recordings are proof of the band’s democratic songwriting process, with thoughtful lyrics from Brown and Grajko that invoke hope in dark times, warn against injustice, and imagine a future where everyone is free to be who they are. Always honest and thought provoking. The next album is currently in the works.`,
        `Today, Root Shock is bringing their renowned live show to clubs, festivals, and concert halls across the Northeast and beyond, delighting audiences from all walks of life with a positive message and danceable tunes. `,
      ],
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B01MYZPWZ8",
        apple:
          "https://music.apple.com/us/artist/root-shock/1183825793?app=music",
        spotify: "https://open.spotify.com/artist/2D8mRcIwXqUXTdk6acguCp",
        youtube: "https://music.youtube.com/browse/UCuWRtq9lrt7ZybQ-eghi77Q",
      },
      photos: [
        "Promo_Photo_1_x1fjbg",
        "Promo_Photo_2_fu64kg",
        "Promo_Photo_3_qcy11g",
        "Promo_Photo_5_cwt6w2",
        "Promo_Photo_6_ik1ofr",
      ],
      videos: ["i9jmDtPqKu8", "oeAIZKcg6d8"],
      tracks: [
        {
          name: "Ripple",
          url: "https://p.scdn.co/mp3-preview/9f26f25d71e1c0ba0baa2378d8f48892546a4f0f?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Sunlight",
          url: "https://p.scdn.co/mp3-preview/8d4f047fe86eb3c04092a3afbc852856fc798a82?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Come Alive",
          url: "https://p.scdn.co/mp3-preview/52c5bd05f2700406e57a3a8c2aea66d7fed168e9?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Waves",
          url: "https://p.scdn.co/mp3-preview/776315d4ed9ba6f75cf618574cda19a42a0e74eb?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Sage",
          url: "https://p.scdn.co/mp3-preview/84d160467c2e50ce999874804cea5e7cdc72f8fb?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["sneezy"]: {
      name: "Sneezy",
      imageUrl: "sneezy_sgr1hl",
      website: "https://www.sneezyband.com/",
      bio: [
        "Best friends since 1st grade, sharing the groove one beat at a time. Sneezy brings the funk and soul from Chicago!",
        "Sneezy’s sound is the perfect culmination of all things good in music. It fuses the genres of pop, reggae, hip-hop, and rock, and it has a natural, summery sunshine feel to every track. Their neo-soul undertone provides a little something extra to their music and creates an infectious, addicting rhythm that you’ll be glad to have stuck in your head.",
        "Like James Brown, Sneezy turns in a killer show and leaves it all on the stage, every time. Hailing from Chicago, Illinois, Sneezy’s catchy, cascading rhythms spiral onwards, leading scores of carousing fans dancing & singing along with songs they know by heart. From frontman Brett O’Connor: “We’re always having fun on stage, and you really get our music when you see us live. Our mission is to create an ever-growing community through our music.”",
      ],
      social: {
        youtube: "https://www.youtube.com/@SneezyMusic",
        facebook: "https://www.facebook.com/sneezymusic/",
        instagram: "https://www.instagram.com/sneezymusic/",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B00147W2ZO",
        apple: "https://music.apple.com/us/artist/sneezy/335190308?app=music",
        spotify: "https://open.spotify.com/artist/6q8zf3mxlxOVOm1YXM5JJp",
      },
      tracks: [
        {
          name: "Fat Girlfriend",
          url: "https://p.scdn.co/mp3-preview/d9018ea543cee8b84c3ac6fbb936418e5653b651?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Vibez",
          url: "https://p.scdn.co/mp3-preview/f50a94ad24f5e1ca70ec4c09e43a55151d3c8272?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Church in the Morning",
          url: "https://p.scdn.co/mp3-preview/df5c8c9ed066f7ecc974769155c77bdbd58869a0?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Bacon",
          url: "https://p.scdn.co/mp3-preview/0cb2c9686606f39cdd9072a795ecdab8a0b80114?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Busy Things (Live)",
          url: "https://p.scdn.co/mp3-preview/f1643b7c17760df0b87744482995871d76a81e3e?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["the-talismen"]: {
      name: "The Talismen",
      imageUrl: "the-talismen_pqbkqa",
      website: "https://www.thetalismenband.com/",
      bio: [
        "The Talismen formed in 2015 in Montgomery, Alabama. These talented musicians have been learning and growing as they entertain audiences all over the Southeast. With a combination of energy and sophistication beyond their years, The Talismen put on a show containing soulful and funk-filled originals along with some music of their favorite artists from across the jam / rock / funk spectrum.",
        `The Talismen released their debut album, Jar Full of Something, in February 2019. The album has since totaled over 700,000+ streams via Spotify. In March of 2020, the band released a four-song EP, Extra Vehicular Activity, which was recorded and produced by Kevin Scott (Jimmy Herring & The 5 of 7 / Col. Bruce Hampton). In August of 2020, the band released their first live album, Live From The Bunker, which showcases their vast improvisational skill. More recently, the band has released two singles, "Savage Road" and "Lockwood" in early 2022.`,
      ],
      social: {
        facebook: "http://www.facebook.com/thetalismenband",
        instagram: "http://www.instagram.com/thetalismenband",
        youtube: "https://www.youtube.com/user/liveandlistenllc/videos",
        spotify:
          "https://open.spotify.com/artist/0s5YcQPTVP69Fj6Zf8wRUJ?si=k30lpozMQ0iX6Lv9tG_wMg",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      photos: ["info_ix1iep", "tour_vfti1v", "news_qeqjoq"],
      videos: ["D-An_iGtyYQ"],
      listen: {
        amazon: "https://music.amazon.com/artists/B00I2JTMLE/the-talismen",
        apple: "https://music.apple.com/us/artist/the-talismen/1452078912",
        spotify: "https://open.spotify.com/artist/0s5YcQPTVP69Fj6Zf8wRUJ",
        youtube: "https://music.youtube.com/channel/UCVMMSKOYUAejnLD-UpgF4oQ",
      },
      tracks: [
        {
          name: "Lawnchair",
          url: "https://p.scdn.co/mp3-preview/08fa18a6a96a7d016454315a7e59342035a89bc1?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Jerald with a G",
          url: "https://p.scdn.co/mp3-preview/f578961ced5ae5e1eacb43bd403d52e40d32ede8?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Lawnchair - Live",
          url: "https://p.scdn.co/mp3-preview/5ed5b9b7f2298e93cb6fe438ef89ae6944808492?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Changed Man",
          url: "https://p.scdn.co/mp3-preview/184523df9b36e544927fbae2dbc0314d89c995a2?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Orange Sunshine",
          url: "https://p.scdn.co/mp3-preview/f8f24065cf7c21a36e673b635e5e83174ce6117c?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["wayne-graham"]: {
      name: "Wayne Graham",
      imageUrl: "wayne-graham_ltrszc",
      website: "https://www.waynegraham.co/",
      bio: [
        "Wayne Graham is a four piece folk/rock band from Whitesburg, KY. In the decade since the band’s inception, they have released eight full length records that showcase their broad range of influences as well as their outside-the-box approach as songwriters, musicians, home recordists, and human beings.",
      ],
      social: {
        youtube: "https://www.youtube.com/user/waynegrahammusic",
        instagram: "https://www.instagram.com/wayne_insta_graham/",
        facebook: "https://www.facebook.com/wgmusic",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B003FEQBIS",
        apple:
          "https://music.apple.com/us/artist/wayne-graham/365830114?app=music",
        spotify: "https://open.spotify.com/artist/24uPvkJPfMYve7yvVliW8G",
        youtube: "https://music.youtube.com/browse/UC65uxtnzUd0pE4J-OytYJ9w",
      },
      tracks: [
        {
          name: "Real Speed Limit",
          url: "https://p.scdn.co/mp3-preview/58070400c965376617a51dae208f9e6b647d524b?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Dark Kid (Ep.1)",
          url: "https://p.scdn.co/mp3-preview/4d94164c7e3c6e9e7a0ee6b91a39cc29915fc0d8?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "How Was Your Night?",
          url: "https://p.scdn.co/mp3-preview/03cd89ec44e4280602ea15e4f8e2e3cc086074d7?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Chifforobe",
          url: "https://p.scdn.co/mp3-preview/7a3db50a673e77ff5f76fb0ef00a4f9e234bfdd7?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Misdemeanor Kisses",
          url: "https://p.scdn.co/mp3-preview/d65dcdcb52042f4443cfee105b85931395dcd724?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["william-matheny"]: {
      name: "William Matheny",
      imageUrl: "william-matheny_pjtif0",
      website: "http://williammatheny.com/",
      bio: [
        `Many artists find inspiration on the road, but few do so with the keen eye and narrative talents of William Matheny. The West Virginia-based singer-songwriter finds inspiration for his brand of Appalachian Americana at truck stops and hotel lobbies, filtering his experiences through a perspective that’s equal parts curious and compassionate. On That Grand, Old Feeling, Matheny shares that perspective across nine new tracks.`,
        `That Grand, Old Feeling follows Matheny’s 2017 album Strange Constellations, which drew critical acclaim from outlets like NPR and PopMatters. Matheny wrote and completed That Grand, Old Feeling before the onset of the COVID-19 pandemic in 2020, recording the LP with producer Bud Carroll at Trackside Studio in Point Pleasant, WV. Carroll joins the proceedings on guitar, with Adam L. Meisterhans (guitar), Clint Sutton (drums), Jeremy Batten (piano, organ), John R. Miller (bass, vocals) and J. Tom Hnatow (pedal steel) rounding out the band. All of these fantastic players are fellow West Virginians and Matheny’s longtime friends.`,
        `Opener “Late Blooming Forever” is one of Matheny’s longest gestating songs, as he began writing the track, which grapples with moving on from youth and coming into one’s own, when he was 19. A gently driving beat and melodic hook give the song a propulsive feel, mimicking the sense of motion in Matheny’s image-rich lyrics.  “I finished it 15 years later, after I'd stayed in some places a little longer than I'd intended to, both physically and emotionally,” he explains. “It's sort of a hymn to hesitation."`,
        `“Every Way to Lose” is a slick, moody rocker with shades of Drive-By Truckers and Magnolia Electric Co. Matheny wrote the song after a drive from Muscle Shoals to Nashville piqued his interest in Alabama’s Walls of Jericho trailhead, with that image anchoring the opening lyric. The almost fatalistic nature of that song leads fittingly into “Bird of Youth,” which Matheny wrote the night before recording it and whose roots trace back to Matheny’s days playing cover songs with his father at the local Elks Lodge and his time working in his family’s video store. The COVID-19 shutdown, and its subsequent shuttering of the live music industry, also led Matheny to ponder his own role in a profession that, at the time, felt suddenly obsolete, a feeling that creeps into the track’s meditation on the passage of time.`,
        `“If I could meet an elevator operator, I feel like I would know what their experience was like, you know,” he says, with a laugh. “They don't have a gig. I don't have a gig. In the same way, I wish there were some Vaudeville musicians still around who had to cancel all of their dates for the Spanish flu. Do you think any of them are still alive?”`,
        `“Grand Old Feeling” is the LP’s thesis statement of sorts, drawn from Matheny’s efforts to recapture the electric feeling of youthful passion, or “the singing sparrow in the marrow of [his] bones.” “They had written ‘good luck’ in blue party cups in the holes of the chain link fence,” Matheny sings at the track’s open, and with that hopeful image he explores the many thrills and heartaches of life as a touring musician. The song is also a showcase for Matheny’s complicated relationship with his home state, which permeates the rest of the LP.`,
        `"I feel like West Virginia is a main character in a lot of this music, too, the way that people talk about certain movies being a love letter to New York or whatever,” he says. “The lyrics about the Go-Mart cassettes, the unhappily married folks at the Elks Lodge or the Bernard Coffindaffer crosses you see all over the Southeast. He was a West Virginia guy and by all accounts a very prickly hang."`,
        `“If You Could Only See Me Now” is Matheny trying his hand at writing a standard, or, as he describes it, writing a song “where you don’t see any fingerprints on the glass.” “Heartless People” inspires a simple but potent response from Matheny, who sums up the track thusly: “Don’t let the bastards get you down. It’s a cold world out there.”`,
        `If there’s a centerpiece to That Grand, Old Feeling, it’s “Down at the Hotel Canfield,” a track inspired by the Dubuque, IA, hotel infamous for a 1946 fire that killed dozens. Rebuilt in 2013, the hotel’s surroundings are as eerie as its backstory, as Matheny describes a visit to the town as being “super creepy.” The song itself is its own kind of ghost story, as Matheny admits, “I ain’t what I used to be.” Like “Bird of Youth,” “Hotel Canfield” came to Matheny the night before he and his band went into the studio to begin work on the LP.`,
        `“We stayed there after a gig and we had a horrible night's sleep,” he says. “And we came back a few months later and played at the same club. And we were all really excited to get back there because we were really fascinated with the place. I was talking to the guy at the club and we were like, ‘Man, we had a horrible night's sleep. What is the deal with that place? It feels really weird. Is it?’ ‘Oh, yeah. One of the worst hotel fires in America happened at that place.’”`,
        `Fans of Matheny’s will recognize the song “Christian Name,” a track he released, with the Centro-matic cover “Flashes and Cables” as its b-side, as a single in 2018. For That Grand, Old Feeling, Matheny revisited the track and gave it an updated studio treatment, with its road-weary message fitting well with the rest of the album. `,
        `“I wanted to give it more of a proper home on an actual record,” he says. “It’s very much a tour song, the kind of road music you write while you're out there doing it. We released our first record in 2017 and then hit the road really, really hard on some spectacularly grueling, money-losing, soul-crushing tours. It’s the kind of thing you have to do when you're getting a new venture off the ground. Most people don't get a shortcut around that.”`,
        `That Grand, Old Feeling closes with “Stranger’s Voice,” a groovy rocker that name-checks Matheny’s like-minded contemporary John R. Miller and, thematically, picks up where “Christian Name” left off. “We were in a really, really hard spot, with barely any money for gasoline and no money for food,” he says. “We were on the ‘vegan chili circuit’ there for a while, playing in a lot of backrooms of backrooms of art galleries, that kind of thing. That one’s another road tune. And it’s mostly about how you can’t really go home again, either.”`,
        `While That Grand, Old Feeling is a document of Matheny’s own journey as a seeker, he hopes that the album can inspire anyone else out there searching for meaning in their own lives, whether they’re searching at a truck stop or in an album of old photographs. “I feel like I've just been trying to recapture that youthful excitement my entire life, trying to regain that clarity and that feeling of purpose,” he says. “And it comes and goes. I mostly seem to be looking for it at gas stations and rest areas and at gigs. But I think a lot of people are probably looking for it in a lot of places like that, too. Pilgrim to pilgrim, I hope you find it.”`,
      ],
      social: {
        facebook: "http://www.facebook.com/thewilliammatheny",
        instagram: "http://instagram.com/william_matheny",
        youtube:
          "https://www.youtube.com/channel/UCdiJL1kaXYJ57NwBHftWkog/featured",
        tiktok: "https://www.tiktok.com/@william_matheny",
        twitter: "https://twitter.com/William_Matheny",
      },
      agents: [
        { ...AllenRoper, type: "booking" },
        { ...JasonMiles, type: "booking" },
      ],
      listen: {
        amazon: "https://music.amazon.com/artists/B0016NER4K",
        apple:
          "https://music.apple.com/us/artist/william-matheny/1172936365?app=music",
        spotify: "https://open.spotify.com/artist/5ffXgMSb7TTuOLvb56MxGx",
        youtube: "https://music.youtube.com/browse/UCQ1TeQSjR_0Zza4XzVtLyqg",
      },
      photos: [
        "110522_WilliamMatheny_FILM_EmmaDelevante_-28_bgko4p",
        "110522_WilliamMatheny_EmmaDelevante_-136_gnnr8g",
      ],
      tracks: [
        {
          name: "Living Half to Death",
          url: "https://p.scdn.co/mp3-preview/989b7553c5fcf084205367f7f2d768f894993216?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Blood Moon Singer",
          url: "https://p.scdn.co/mp3-preview/7b8502d373e531c9d016883634ccd03c8b5eeca8?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "God's Left Hand",
          url: "https://p.scdn.co/mp3-preview/5ca033115ad07921387284a1e97a3d434bea215c?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Moon Over Kenova",
          url: "https://p.scdn.co/mp3-preview/4bbddf0c9ee89826aee9b793816aa76013c69b25?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "29 Candles",
          url: "https://p.scdn.co/mp3-preview/41773114fa048c84765bcdace43c169835e2914a?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["funk-you"]: {
      name: "Funk You",
      imageUrl: "funk-you_yb8chh",
      website: "http://funkyoumusic.com/",
      bio: [
        "For over a decade, Funk You has captivated audiences with their unrivaled alchemy of modern musical sensibilities and the last fading embers of the chitlin circuit. Comprised of nine kindred spirits from Augusta, GA, - Gavin Hamilton (Lead Vocals), Evan Miller (Guitar), William Foster (Vocals, Keys), Will Clark (Vocals, Drums), Palmer Owens (Percussion), Mark ‘Earl’ Dykes (Vocals, Bass), Gnarly G (Saxophone), Josh Spilliards (Trombone, Sousaphone), and Geoff Wood (Trumpet, Guitar) - this close-knit troupe is driven by an unwavering passion for live performance and emboldened by their own exuberance - making them one of the most electrifying acts in contemporary funk.",
        "The octet’s journey began in 2011 with the release of Funk You, quickly followed by its companion album Funk You II (released 2012). This early material laid the groundwork for the growth of a ravenous grassroots fan base in the southern US.",
        `In 2016, Funk You released Apparitions, a crucial milestone that launched them onto the national scene via the project's single "She's So High". The song quickly gained traction on regional radio and has since amassed over one million plays on Spotify. This was just the beginning of an incredible adventure that saw them perform at some of the nation’s biggest festivals, including Sweetwater 420 Festival, Peach Music Festival, and Summer Camp Music Festival; whilst providing direct support for renowned acts like Gov't Mule, Galactic and Pigeons Playing Ping Pong.`,
        `The band celebrated their tenth anniversary in 2021 and marked the occasion with the release of studio album Moving Forward, a seven-song tour-de-force that places their dynamic studio prowess front and center. Recorded at Atlanta's Prana Recording Studios, and mixed by Clark and Andy Headland, the project was met with thunderous applause from fans and critics alike. Described by Live for Live Music as a "funky, rockin' good time...", the band’s sonic maturation shines on each track.`,
        `As Funk You charges forward into a new era, they are grateful for all that has come before and blessed by the opportunity to continue doing what they love most: creating music that moves both body and soul.`,
      ],
      social: {
        facebook: "https://www.facebook.com/funkyoumusic/",
        spotify: "https://play.spotify.com/artist/1ydMwlr8PsTcShNu8uqDvz",
        youtube: "https://www.youtube.com/c/funkyoumusic",
        instagram: "http://www.instagram.com/funkyoumusic",
      },
      agents: [{ ...AllenRoper, type: "management" }, MattKolinski, EricPuente],
      listen: {
        amazon: "https://music.amazon.com/artists/B0051D59ZW",
        apple: "https://music.apple.com/us/artist/funk-you/400528998?app=music",
        spotify: "https://open.spotify.com/artist/1ydMwlr8PsTcShNu8uqDvz",
        youtube: "https://music.youtube.com/browse/UCMqnfb0Ia8HVYhXh5Iatv-g",
      },
      tracks: [
        {
          name: "She's so High",
          url: "https://p.scdn.co/mp3-preview/383043d3bb1a91e598f8541d75f73c9fd6ef459c?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Ring That Belle",
          url: "https://p.scdn.co/mp3-preview/4a3f03b09b6e2e5e84bf2026a2c64404ce1d3ec1?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Supernatural",
          url: "https://p.scdn.co/mp3-preview/199ba0dae914ba99932284a60f62148cd1f0657d?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Baby in a Bucket",
          url: "https://p.scdn.co/mp3-preview/80feaeb92903c3d2102cc89255bddf088c3b0cac?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Red & Black",
          url: "https://p.scdn.co/mp3-preview/c467bbead609adc844df71f5ac5e310e2041cb78?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["the-kind-thieves"]: {
      name: "The Kind Thieves",
      imageUrl: "1D4A3147_iywtuj",
      bio: [
        "Hailing from the heart of the Appalachian mountains, The Kind Thieves are a musical tour de force to be reckoned with. Showcasing 3 song writers, beautiful harmonies, intense lead work, and vicious grooves, you never know what to expect when these boys take the stage. Strap in and hold on, The Kind Thieves are coming for you.",
      ],
      social: {
        facebook: "https://www.facebook.com/kindthievesofficial",
        instagram: "https://www.instagram.com/thekindthieves",
        spotify: "https://open.spotify.com/artist/0sNSNAuIGb1GdrS2Gs08HD",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B078VM2GM1",
        apple:
          "https://music.apple.com/us/artist/the-kind-thieves/1332136662?app=music",
        spotify: "https://open.spotify.com/artist/0sNSNAuIGb1GdrS2Gs08HD",
        youtube: "https://music.youtube.com/browse/UClm762ZJWm1oeMOW8bP-_ug",
      },
      photos: [
        "1D4A3067_ne52jx",
        "1D4A3126_nosu9a",
        "1D4A3197_hy3aox",
        "the-kind-thieves_bzvdam",
      ],
      videos: ["D7UqOVLKEsQ"],
      tracks: [
        {
          name: "Fire & Flood",
          url: "https://p.scdn.co/mp3-preview/005779047babde9ed0ba801bdb56c8d617c96496?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Shallow Grave",
          url: "https://p.scdn.co/mp3-preview/3998bf406d4a969a42f9cd79af695e4ef3e7402d?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Dear Mary",
          url: "https://p.scdn.co/mp3-preview/6b536c9fe94be2ad22b98535d9a52676944240d3?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Children of the Sun",
          url: "https://p.scdn.co/mp3-preview/d985e2c5f28120f65f948f5b804989b344ade8ae?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Armageddon",
          url: "https://p.scdn.co/mp3-preview/0f866f41a17f3c5272fce628bf3633f0c38ef789?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["roxy-roca"]: {
      name: "ROXY ROCA",
      imageUrl: "roxy-roca_dn1bfw",
      website: "https://www.roxyroca.com/",
      bio: [
        `Drawing on the rich tradition of the Texas blues with a heavy dose of classic rock and dripping with attitude, ROXY ROCA is a high-octane rock band on a mission to prove rock n’ roll ain’t dead. Four core members make up the band with electrifying front man Taye Cannon on vocals, Athens, Greece’s own guitar-hero Babis ‘BB’ Tyropolous on six-string, Quinn Walls on the low end and backing vocals, and drummer Ryan Greenblatt holding it down on drums. Taking a page from the notebooks of legends like ZZ Top, Rolling Stones, Freddie King, Aerosmith, AC/DC and Led Zeppelin, ROXY ROCA sets the stage ablaze with well crafted songs and a powerhouse presence that commands an audience. The band originally formed in Austin, TX as a soul/funk outfit, but as the phoenix rises from the ashes anew and more powerful, so does ROXY ROCA emerging from the pandemic with new life and a new sound. Their upcoming album Greasy breaks new ground for the band as they made the conscious decision to ditch green eyed soul for the primal rhythms of rock n’ roll. `,
        `“The pandemic was very difficult and even detrimental to our careers in many ways, but one of the positives to come out of it was that it gave us an opportunity to make some big changes. The pandemic ended up being a great ‘reset button’ for us, and we’re better for it,” said Greenblatt.`,
        `Greasy was recorded at Edgewater Studios in Houston in July of 2022. After writing almost 20 potential new songs for the album, the team at Edgewater and the band settled on the nine best and most stylistically cohesive songs to complete their new blues rock-driven record, and the resulting album is nothing short of top notch. While the band is no longer aiming for James Brown, the DNA makeup of ROXY ROCA is steeped in heavy grooves and R&B, and this album serves as a natural bridge between their previous sound and where they’re headed on future albums. Much like their aforementioned music idols, ROXY ROCA’s brand of rock n’ roll has some boogie in it, and that’s just the way they like it.`,
        ` Accompanying the band on the album, as well as live, is Adam Pryor on keys. Even at the tender age of 23, Adam is a stand-out phenom who has shared the stage with legends such as Buddy Guy. It was Walls who brought Adam into the fold, and he shines throughout the record. As the story goes, without even a single rehearsal with the band, he was able to nail all of his parts on the album in a single two-hour session. And that’s on a true B3 and Fender Rhodes– no keyboard plugins here. `,
        `“ROXY ROCA’s theme since the beginning has been love, perseverance, and higher-self remembrance,” said Cannon. “This album continues with that vibration and a whole lot of attitude. As a band, we take on the troubles of humanity while offering a silver lining wrapped in a rock and roll state of mind.”`,
        `It was 2010 when lead singer Taye Cannon had a chance encounter with a guitar playing acquaintance, and the two discussed Cannon’s vision to bring a James Brown-like show to Austin. They linked up with a mutual friend and bassist and began writing songs with a full horn section in mind. The first show was an official ACL afterparty at the North Door, and the band has basically hit the ground running ever since. The band’s moniker, ROXY ROCA, was inspired by Lenny Kravitz’s late mother, actress Roxie Roker, best known for her role as Helen Willis on the 1975 sitcom “The Jeffersons,” one of Cannon’s childhood favorites.`,
        `“In terms of equality, that show had an effect on me,” said Cannon. “The relationship between Helen (Roker) and Tom Willis (Franklin Cover) really stuck with me. I loved how they let all the name calling and ridicule just roll off their backs in the name of love. Later in middle school, I was really into what Lenny was preaching, ‘Let Love Rule,’ only to find out that Roxie was his mother… and there she was again. When it came time to pick a name for the band we were looking for something that just sounded like a soul band. Somebody in the room said ‘Roxie Roker’ and all those memories came back. I knew that was it. We decided to make it a play on her name, and ROXY ROCA was born. Now, like Kravitz we do what we do in the name of love.” `,
        `Over the years, ROXY ROCA steadily rose through the ranks in Austin and beyond. They have been regulars at some of the city’s most iconic venues including Antone’s, The Continental Club, The Parish and Hotel Vegas, with two long-running residencies at various points – first at the now shuttered Blackheart on Rainey street and later at C Boy’s Heart & Soul. In 2013 ROXY ROCA ventured out of Austin to play their first major festival: Bayfest in Mobile, Alabama. The following day, to the chagrin of many, it was the upstart soul band out of Austin that had made the headlines on AL.Com and the Mobile Press Register. Equipped with a can’t-miss, leave-it-all-on-the-stage live show, ROXY ROCA was able to parlay the success of Bayfest and the video release for their track “Try My Love” into more touring opportunities and opening slots for high-profile acts such as the legendary B.B. King, Tom Jones, St. Paul and the Broken Bones, Trombone Shorty, Bob Schneider, a two night stint as the backing band for blues legend Bobby Rush, Black Pumas, Lee Fields, Delbert McClinton, Blues Traveler and many others. Clearly, industry standouts love the band. In 2015 ROXY ROCA played roughly 230 shows, and from that point until the pandemic it was common for the band to eclipse the 150 show mark each year spending months on the road. In the midst of near constant domestic touring, in both 2017 and 2018 ROXY ROCA had the privilege to travel to Japan to play a series of concerts. `,
        `“The people were amazing, gracious and warm,” said Greenblatt of their Japan tours. “We played with local bands at every show and got to hang out with them afterward. We made real connections.”`,
        `While the new album is a stark departure from their previous work, there were signs ROXY ROCA could drift more into rock territory. In 2016 the band recorded its second full length album with notable rock producer Chris “Frenchie” Smith (...And You Will Know Us by the trail of Dead, the Toadies, Jet, Built to Spill) at The Bubble Studio. Through their work with Smith, the band’s heavier influences began to come through and their sound started to evolve from funk and soul to hard hitting, authentic rock n’ roll.`,
        `Toward the end of 2019 ROXY ROCA had made the decision to pause touring in order to write a new album with the goal of recording and touring to support the album the following year. But, like the rest of the music industry and the world at large, the Covid-19 pandemic had other plans. It changed their trajectory and put the band on a new path leading them to this moment on the precipice of the second act for ROXY ROCA. And the future looks bright – real bright.`,
        "“My favorites! An explosive take no prisoners, soul and roll, high energy, Detroit meets Texas style rumble!” said Kevn Kinney of Drivin’ N Cryin’. GRAMMY-winning blues legend Bobby Rush said “See this band and you’ll be hooked forever!”",
      ],
      social: {
        facebook: "https://www.facebook.com/roxyroca/",
        instagram: "https://www.instagram.com/roxyrocamusic/?hl=en",
        youtube: "https://www.youtube.com/channel/UCGxesneFsbDixd3gpdRvCZg",
        spotify: "https://open.spotify.com/artist/3m28dyU7wbL3ne8WeZqEeF",
      },
      agents: [{ ...AllenRoper, type: "booking" }],
      listen: {
        amazon: "https://music.amazon.com/artists/B00PGXOXBS",
        apple:
          "https://music.apple.com/us/artist/roxy-roca/940172820?app=music",
        spotify: "https://open.spotify.com/artist/3m28dyU7wbL3ne8WeZqEeF",
        youtube: "https://youtube.com/channel/UCQXx4P8DlBgO8j8y6rDghWA",
      },
      tracks: [
        {
          name: "Taurus",
          url: "https://p.scdn.co/mp3-preview/156b2e071bedb80e2bfa0213d6b3c3830df7733b?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Mind Blown",
          url: "https://p.scdn.co/mp3-preview/ea3a650f862bc1b6c81423da6f3926cd431dfc76?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Don't Call Me (Maybe I'll Call You)",
          url: "https://p.scdn.co/mp3-preview/af59370b4a938d7e35743750b8f05b80687f50fc?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Try My Love",
          url: "https://p.scdn.co/mp3-preview/2d25fd62c2835c5a7eccac8df96781aad139f821?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Cornbread",
          url: "https://p.scdn.co/mp3-preview/b2fe492d12b82e59ae195caebc2f1cec37380a8a?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["tand"]: {
      name: "Tand",
      imageUrl: "Tand_Appv_Promo_2023_a_gwy2ar",
      website: "https://tandtheband.com/",
      bio: [
        `Tand is a 5-piece rock band from South Florida known for their deep catalog of originals, covers and high energy live shows. The band’s first official studio release, Puzzle Piece, was released in 2022 and will be followed by their first full length album in late 2023.`,
        `With a relentless touring schedule and frequent performances at major music festivals including Summer Camp Music Festival, Peach Music Festival and Suwannee Hulaween, Tand has solidified their place as one of the most exciting up-and-coming m usical acts.`,
      ],
      social: {
        instagram: "http://www.instagram.com/tandtheband",
        facebook: "http://facebook.com/tandtheband",
        spotify: "https://open.spotify.com/artist/6VC6mZuswk6M1p7AJKFdh6",
        nugsnet: "https://2nu.gs/Tand",
      },
      agents: [
        { ...AllenRoper, type: "booking" },
        { ...JasonMiles, type: "booking" },
      ],
      photos: [
        "Tand_Appv_LiveShot_2023_a_yoyxnk",
        "Tand_FP_Rear_Photo_ZSmith_web_fuzbxu",
        "Tand_Appv_Promo_2023_b_rey3gk",
      ],
      videos: ["nIt9yFY_F_4", "pk1bv_j81P4"],
      listen: {
        amazon: "https://music.amazon.com/artists/B001TVS5WE",
        apple: "https://music.apple.com/us/artist/tand/1486254695?app=music",
        spotify: "https://open.spotify.com/artist/6VC6mZuswk6M1p7AJKFdh6",
        youtube: "https://music.youtube.com/browse/UCxIDC1GA1JJFTnSoxJ12MWw",
      },
      tracks: [
        {
          name: "Fortresses",
          url: "https://p.scdn.co/mp3-preview/76a349cb6ae9edf08f6c51aaea8a8a4a0872bbc5?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Puzzle Piece",
          url: "https://p.scdn.co/mp3-preview/a7befb737fe4de89aa1cb74a70aa52f231f4263c?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Opposite Attraction",
          url: "https://p.scdn.co/mp3-preview/881443616f312780b6db94b4f6efb39cb100b71b?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Bloom Bloom (12/11/21) - Live",
          url: "https://p.scdn.co/mp3-preview/ecd3e080fbe686a18adada5507f54c35e4510276?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "The Entertainer",
          url: "https://p.scdn.co/mp3-preview/92354695bceecf3027854c771a909a569fe6d0a9?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["brothers-gillespie"]: {
      name: "The Brothers Gillespie",
      imageUrl: "brothers-gillespie_ygv2g5",
      website: "https://www.brothersgillespie.com/",
      bio: [
        `Drawing from their Southern Appalachian roots and channeling the gritty rock ‘n’ roll they were raised on, The Brothers Gillespie spin heartfelt yarns with an alternative edge”.  Blending beautiful, catchy lyricism in the vein of the Avett Brothers, with a Futurebirds approach to pure good time rock n roll, The Brothers Gillespie deliver a modern homegrown sound that could pass for your favorite vinyl record.`,
      ],
      social: {
        instagram: "https://www.instagram.com/thebrothersgillespie/",
        facebook: "https://www.facebook.com/thebrothersgillespie/",
        youtube: "https://www.youtube.com/@thebrothersgillespie5995",
      },
      agents: [MichaelKrell],
      photos: ["The_Brothers_Gillespie_vssnqk"],
      videos: ["Yt25c5KlCxg", "4OiuZNNviuM"],
      listen: {
        amazon: "https://music.amazon.com/artists/B07GWYRMLG",
        apple:
          "https://music.apple.com/us/artist/the-brothers-gillespie/1434411437?app=music",
        spotify: "https://open.spotify.com/artist/0Qzs6k37sHst4PoLSzJFVW",
        youtube: "https://youtube.com/channel/UCxMy56IY_OCBAVWa6u7HLag",
      },
      tracks: [
        {
          name: "Angst & Ivory",
          url: "https://p.scdn.co/mp3-preview/12e607ace691deb4fa24b2d0a78819495bcb2703?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "October Greene",
          url: "https://p.scdn.co/mp3-preview/b60ab56a8df18382a9156ee8628ba3ca1784d315?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Bilberry Blues",
          url: "https://p.scdn.co/mp3-preview/f8a46d50f9571df84558bbf3b2032efff02eccf9?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Not Another Love Song",
          url: "https://p.scdn.co/mp3-preview/51807b5e53f3541c50d71b68a31c873306e9f836?cid=cfe923b2d660439caf2b557b21f31221",
        },
        {
          name: "Headlights",
          url: "https://p.scdn.co/mp3-preview/8c5cb29ce256bd9c07e5beb742f18cb576fc9ec6?cid=cfe923b2d660439caf2b557b21f31221",
        },
      ],
    },
    ["kyle-kelly"]: {
      name: "Kyle Kelly",
      imageUrl: "Kyle_Kelly_Promo_Pic_mn33qp",
      website: "https://kylekellyofficial.com/",
      bio: [
        `Kyle Kelly, a North Carolina native, discovered his love for music at the early age of eight. Kyle was drawn to the old classic sounds of greats such as Lynyrd Skynyrd and Waylon Jennings, which inspired him to learn guitar and drums. From classic cars to classic country music, this 26 year old country music artist is a true throwback, embracing the look and sounds of the ‘70s and ‘80s. A nostalgic feel is often reflected in Kyle’s music while still implementing his own personal touch of a modern spin.`,
      ],
      social: {
        instagram: "https://www.instagram.com/kylekelly_music/",
        facebook: "https://www.facebook.com/kyle.kelly.9693",
        youtube: "https://www.youtube.com/@kylekelly5037",
      },
      agents: [MichaelKrell],
      photos: [
        "Kyle_Kelly_Tour_Pic_4_y7i8du",
        "Kyle_Kelly_Radio_Room_zu4b6x",
        "Kyle_Kelly_Tour_Pic_3_ddt6zc",
        "Kyle_Kelly_Tour_Pic_2_rot4s5",
        "KK_930_Club_dw5byx",
        "Kyle_Kelly_Tour_Pic_1_zxmn4n",
      ],
      videos: ["gzEBmehs2xQ", "Eau3MdP5rTg"],
      listen: {
        amazon: "https://music.amazon.com/artists/B07FS7RXK6",
        apple:
          "https://music.apple.com/us/artist/kyle-kelly/1522538786?app=music",
        spotify: "https://open.spotify.com/artist/608zlyuQHcUfZWSzIV2RtO",
        youtube: "https://youtube.com/channel/UCQpcQDkgRi1MeRbL1haYGYA",
      },
      tracks: [
        {
          name: "Lyin'",
          url: "https://p.scdn.co/mp3-preview/54ae074eaee3c57dfb629d00e90e195149385692?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Dancing with a Borrowed Angel",
          url: "https://p.scdn.co/mp3-preview/8c93984969cec027e9577140e731057931ccd9fa?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Sway",
          url: "https://p.scdn.co/mp3-preview/7e698260b81311088b4b3a046c33e4b30f1faec5?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Lake Weekend",
          url: "https://p.scdn.co/mp3-preview/92d38c5fb04ea7a4e250f52e33b50a06b989bc20?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Traveler's Getdown (Take No.2)",
          url: "https://p.scdn.co/mp3-preview/a59efecc8c883cb03a78255032aa98b4f77271cd?cid=0b297fa8a249464ba34f5861d4140e58",
        },
      ],
    },
    ["jimmy-wooten"]: {
      name: "Jimmy Wooten",
      imageUrl: "jimmy-wooten_vlvp2v",
      website: "https://jimmywooten.net/",
      bio: [
        `For over 15 years Jimmy Wooten has been delivering audiences from Texas to the East Coast a high energy concert style show with soulful vocals and searing guitar solos straight from the heart.  In 2021, he left a career as a member of country music legend Neal McCoy’s touring band to continue to focus on his own music career.  Wooten captivates audiences with his honest songwriting, and ability to connect with individuals from every walk of life.`,
        `Digging from his roots in blues, country, rock, and soul, along with his unique entertaining style, he leaves audiences with a show they will never forget.  One of his most recent singles “Lay You Down” hit two Spotify Editorial playlists growing his audience nationwide.`,
      ],
      social: {
        instagram: "https://www.instagram.com/jimmywooten",
        facebook: "https://www.facebook.com/jimmywootenmusic/",
        youtube: "https://www.youtube.com/@jimmywooten4865",
      },
      agents: [MichaelKrell],
      photos: ["JW_Magnolia_Motor_Lounge_2_1_kikunk", "century-link_1_emvltg"],
      videos: ["ThMHZnCL5vk", "MXVJPs6DXow"],
      listen: {
        amazon: "https://music.amazon.com/artists/B001229VN2",
        apple:
          "https://music.apple.com/us/artist/jimmy-wooten/1456126900?app=music",
        spotify: "https://open.spotify.com/artist/0sZlzSKhjreEO385HbTo0y",
        youtube: "https://youtube.com/channel/UC4LKu5ap_2srBzNqN6veHfg",
      },
      tracks: [
        {
          name: "Lay You Down",
          url: "https://p.scdn.co/mp3-preview/01c0579ae607b55197be5b736c035adc3d01435e?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Shine",
          url: "https://p.scdn.co/mp3-preview/4d41a2d5912592e0abf583af4eed936f5abb2957?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "They're Playin' Our Song",
          url: "https://p.scdn.co/mp3-preview/48a61c1fc62a5c66b452431b4f246ff91848c020?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Coming Home",
          url: "https://p.scdn.co/mp3-preview/d0cf0a2385680e3d9bc09d4db3861454e14d132b?cid=0b297fa8a249464ba34f5861d4140e58",
        },
        {
          name: "Money Ain't Everything",
          url: "https://p.scdn.co/mp3-preview/5163d4c7610aaf45d2f8d222a816d1c92e7a7d33?cid=0b297fa8a249464ba34f5861d4140e58",
        },
      ],
    },
  },
};
