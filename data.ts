export interface Artist {
  name: string;
  imageUrl: string;
  bio?: string[];
  agents: Contact[];
  website?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    spotify?: string;
    youtube?: string;
  };
}

interface Contact {
  name: string;
  email: string;
  phone?: string;
}

interface DataConfig {
  name: string;
  description: string;
  contacts: Contact[];
  artists: {
    [key: string]: Artist;
  };
}

const AllenRoper: Contact = {
  name: "Allen Roper",
  email: "allenroper12@gmail.com",
  phone: "706-347-0448",
};

const JasonMiles: Contact = {
  name: "Jason Miles",
  email: "milesandmilesentertainment@gmail.com",
};

export const data: DataConfig = {
  name: "Roundtable Artists",
  description: "",
  contacts: [AllenRoper, JasonMiles],
  artists: {
    litz: {
      name: "LITZ",
      imageUrl: "litz.jpg",
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
      },
      agents: [AllenRoper],
    },
    ["buffalo-wabs-the-price-hill-hustle"]: {
      name: "Buffalo Wabs & The Price Hill Hustle",
      imageUrl: "buffalo-wabs-the-price-hill-hustle.jpg",
      bio: [
        "It’s hard to stay still around these boys. They’ve got that toe-tapping, knee-slapping, boot-stomping kind of sound. They get you moving and shaking. Buffalo Wabs & The Price Hill Hustle—part rowdy honkytonk, part old-time pioneers—equates to a sound that sticks with your soul and leaves you singing barefoot into the star sky.",
        "They pull from all sorts of genres—from Lead Belly to John Prine, from Woody Guthrie to Willy Tea Taylor —to create something unique and deep-rooted. These guys lean into the rhythms of the Ohio River Valley—where they’ve walked upon—and look to the songs in the muddy water and the tradition it carries.",
        "To get “hustled” is to get the full-body musical experience—that head-boppin’, hip-swaying, soul-singing with the stranger next to you. It’s the kind of music that encapsulates you into a community of sound, one that becomes familiar once you hear it, like maybe, you’ve been listening to them forever.",
      ],
      agents: [AllenRoper, JasonMiles],
      social: {
        instagram: "https://www.instagram.com/pricehillhustle",
        facebook: "https://www.facebook.com/pricehillhustle",
        youtube: "https://www.youtube.com/@BuffaloWabs",
      },
    },
    ["charlie-brown-superstar"]: {
      name: "Charlie Brown Superstar",
      imageUrl: "charlie-brown-superstar.jpg",
      website: "https://charliebrownsuperstar.com/",
      bio: [
        "Charlie Brown Superstar (Brett Fuller) is a DJ, producer, remixer, and artist from Huntington, WV. A veteran of the West Virginia DJ scene, playing at such clubs as Gumby’s, Gyrationz, and the V Club since the mid 90s, Fuller is known for playing a wide range of music with a focus on Nu Disco and house, and is also known in the Nu Disco/Disco Edit scene as a producer.",
        "He has released music with labels across the world, including Candy Beach Records in Spain, Thunder Jam Records in Israel, and Sound Exhibitions Records and Boutade Musique, both out of Italy, as well as American labels, Bent Ant and Fresh Farm Records. Fuller’s songs have charted on all three major DJ music sites: Traxsource, Beatport, and Juno Download. His track “Never Gonna Stop” with Alpaca Edits (England) spent weeks at #2 on Traxsource Lounge/Chill Out chart. Several of his songs have also been included on the Traxsource “Essential List.” In addition to his solo work, in the early 2000s, Fuller also released 2 full-length records and toured with the band Hyatari, and was also a touring member of the 90s band Chum.",
        "Currently, Fuller concentrates on what he calls Mountain Funk, an eclectic blend of jam, funk, and electronic, with elements of local flavor, that he has showcased at festivals such as Mountain Music Fest, Brew Skies, and Kickin’ It On the Creek, and, more locally, Huntington Music and Arts Fest and Funktafest. Fuller has played clubs across the Midwest, including in Indiana, Kentucky, and Ohio, and is part of the Rust Belt Alliance, which features DJs based in Pittsburgh, Detroit, and Huntington.",
      ],
      social: {
        facebook: "https://www.facebook.com/charliebrownsuperstar",
        instagram: "https://www.instagram.com/charliebrownsuperstar/?hl=en",
      },
      agents: [AllenRoper],
    },
    ["darrin-hacquard"]: {
      name: "Darrin Hacquard",
      imageUrl: "darrin-hacquard.jpg",
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
      agents: [AllenRoper],
    },
    ["eric-bolander"]: {
      name: "Eric Bolander",
      imageUrl: "eric-bolander.jpg",
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
      agents: [AllenRoper],
    },
    ["crypto-wave-radio"]: {
      name: "crypto WAVE radio",
      imageUrl: "crypto-wave-radio.jpg",
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
      agents: [AllenRoper],
    },
    ["jaden-decker"]: {
      name: "Jaden Decker",
      imageUrl: "jaden-decker.jpg",
      website: "https://www.jadendecker.com/",
      bio: [
        "Jaden Decker is a country music performer from Missoula, Montana. Drawing on his family’s midwestern roots, Jaden’s music is fueled by a goal to blend country/americana with a psychedelic jam-band sound, to ultimately create his labeled genre of “Rocky Mountain Country.” The 16-year-old has played 70+ shows in 2022, embarking on two national tours already, which were both completely independently booked.",
        "Jaden’s live performance consists of him and his acoustic guitar, accompanied by a pedalboard, which greatly adds to the jam-band sound, previously mentioned. Decker knows how to get a crowd moving, and his live set reflects that beautifully. Taking the audience on a journey, they are not only left in awe by the 16-year-old, but it feels as if there is also a connection created between Jaden and the crowd.",
      ],
      social: {
        instagram: "https://www.instagram.com/jadenwdecker",
        facebook: "https://www.facebook.com/jadendeckerofficial",
        youtube: "https://www.youtube.com/user/jadendecker",
        spotify:
          "https://open.spotify.com/artist/5cJ2IQj7rxvFdn9DBAlXJK?si=Pd47aO7CQe-Sjh3Tw5QOYA",
      },
      agents: [AllenRoper],
    },
    ["jeremy-short"]: {
      name: "Jeremy Short",
      imageUrl: "jeremy-short.jpg",
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
      agents: [AllenRoper],
    },
    ["root-shock"]: {
      name: "Root Shock",
      imageUrl: "root-shock.jpeg",
      bio: [
        "Conscious, soulful, even healing—that’s how many fans of Root Shock have described the band’s infectious sound and energy. They’ve developed a voice that transcends genre but can make anyone move their body and uplift their spirit.",
        "Spearheaded by the powerhouse vocals of Jessica Brown, the Root Shock sound is at once commanding and cathartic, but never at the expense of a velvety, carefully placed jazz or neo-soul lick. Phil Grajko’s smooth earthy vocals complement his guitar style inspired by Latin, prog, and psychedelic rock textures—often in tandem with mad keyboard genius Brian Lauri. Rounding out the band, bassist Elliot Jarvis and drummer Tyre Outerbridge make for a formidable rhythm section fluent in patterns ranging from reggae to funk to reggaeton and maybe even metal.",
        "In 2016, Root Shock released a self-titled album, produced by Jason “Jocko” Randall at More Sound Studio, and followed that up with the “Many Paths” EP in 2018 & the Waves single in 2019. These recordings are proof of the band’s democratic songwriting process, with thoughtful lyrics from Brown and Grajko that invoke hope in dark times, warn against injustice, and imagine a future where everyone is free to be who they are. Always honest and thought provoking. The next album is currently in the works.",
        "Today, Root Shock is bringing their renowned live show to clubs, festivals, and concert halls across the Northeast and beyond, delighting audiences from all walks of life with a positive message and danceable tunes.",
      ],
      agents: [AllenRoper],
    },
    ["sneezy"]: {
      name: "Sneezy",
      imageUrl: "sneezy.jpg",
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
      agents: [AllenRoper],
    },
    ["the-talismen"]: {
      name: "The Talismen",
      imageUrl: "the-talismen.jpg",
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
      agents: [AllenRoper],
    },
    ["wayne-graham"]: {
      name: "Wayne Graham",
      imageUrl: "wayne-graham.jpg",
      website: "https://www.waynegraham.co/",
      bio: [
        "Wayne Graham is a four piece folk/rock band from Whitesburg, KY. In the decade since the band’s inception, they have released eight full length records that showcase their broad range of influences as well as their outside-the-box approach as songwriters, musicians, home recordists, and human beings.",
      ],
      social: {
        youtube: "https://www.youtube.com/user/waynegrahammusic",
        instagram: "https://www.instagram.com/wayne_insta_graham/",
        facebook: "https://www.facebook.com/wgmusic",
      },
      agents: [AllenRoper],
    },
    ["william-matheny"]: {
      name: "William Matheny",
      imageUrl: "william-matheny.jpg",
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
        spotify:
          "https://open.spotify.com/artist/5ffXgMSb7TTuOLvb56MxGx?si=h-qpJkPQT8mTTUSQBIiQ7g",
        youtube:
          "https://www.youtube.com/channel/UCdiJL1kaXYJ57NwBHftWkog/featured",
      },
      agents: [AllenRoper, JasonMiles],
    },
    ["funk-you"]: {
      name: "Funk You",
      imageUrl: "funk-you.jpeg",
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
      agents: [AllenRoper],
    },
    ["the-kind-thieves"]: {
      name: "The Kind Thieves",
      imageUrl: "the-kind-thieves.jpg",
      bio: [
        "Hailing from the heart of the Appalachian mountains, The Kind Thieves are a musical tour de force to be reckoned with. Showcasing 3 song writers, beautiful harmonies, intense lead work, and vicious grooves, you never know what to expect when these boys take the stage. Strap in and hold on, The Kind Thieves are coming for you.",
      ],
      social: {
        facebook: "https://www.facebook.com/kindthievesofficial",
        instagram: "https://www.instagram.com/thekindthieves",
        spotify: "https://open.spotify.com/artist/0sNSNAuIGb1GdrS2Gs08HD",
      },
      agents: [AllenRoper],
    },
    ["roxy-roca"]: {
      name: "ROXY ROCA",
      imageUrl: "roxy-roca.jpg",
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
      agents: [AllenRoper],
    },
    ["tand"]: {
      name: "Tand",
      imageUrl: "tand.jpg",
      website: "https://tandtheband.com/",
      bio: [
        `Tand is a 5-piece improvisational rock band from South Florida. Known for their expressive songwriting, vast catalog of originals and covers, and high energy live performances, the band is sure to satisfy all musical tastes! In just a short 5-years of performing together, Tand has performed at national festivals such as Suwannee Hulaween, Peach Music Festival, Summer Camp Music Festival and North Beach Music Festival, and shared the stage with Pigeons Playing Ping Pong, Perpetual Groove, Spafford and more. Tand is currently touring in support of their newest EP “Puzzle Piece” released in early 2022, and plans to release their first full length album in the later part of the year. Their mission: to bring listeners on a different musical journey each show, telling a story through song weaved together by spontaneous bouts of improvisation.`,
      ],
      social: {
        instagram: "http://www.instagram.com/tandtheband",
        facebook: "http://facebook.com/tandtheband",
        spotify: "https://open.spotify.com/artist/6VC6mZuswk6M1p7AJKFdh6",
      },
      agents: [AllenRoper, JasonMiles],
    },
  },
};
