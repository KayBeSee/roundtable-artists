export interface Artist {
  name: string;
  imageUrl: string;
}

interface DataConfig {
  name: string;
  contacts: {
    name: string;
    email: string;
    phone?: string;
  }[];
  artists: {
    [key: string]: Artist;
  };
}

export const data: DataConfig = {
  name: "Roundtable Artists",
  contacts: [
    {
      name: "Allen Roper",
      email: "allenroper12@gmail.com",
      phone: "706-347-0448",
    },
    {
      name: "Jason Miles",
      email: "milesandmilesentertainment@gmail.com",
    },
  ],
  artists: {
    litz: {
      name: "LITZ",
      imageUrl: "litz.jpg",
    },
    ["buffalo-wabs-the-price-hill-hustle"]: {
      name: "Buffalo Wabs & The Price Hill Hustle",
      imageUrl: "buffalo-wabs-the-price-hill-hustle.jpg",
    },
    ["charlie-brown-superstar"]: {
      name: "Charlie Brown Superstar",
      imageUrl: "charlie-brown-superstar.jpg",
    },
    ["darrin-hacquard"]: {
      name: "Darrin Hacquard",
      imageUrl: "darrin-hacquard.jpg",
    },
    ["eric-bolander"]: {
      name: "Eric Bolander",
      imageUrl: "eric-bolander.jpg",
    },
    ["crypto-wave-radio"]: {
      name: "crypto WAVE radio",
      imageUrl: "crypto-wave-radio.jpg",
    },
    ["jaden-decker"]: {
      name: "Jaden Decker",
      imageUrl: "jaden-decker.jpg",
    },
    ["jeremy-short"]: {
      name: "Jeremy Short",
      imageUrl: "jeremy-short.jpg",
    },
    ["root-shock"]: {
      name: "Root Shock",
      imageUrl: "root-shock.jpeg",
    },
    ["sneezy"]: {
      name: "Sneezy",
      imageUrl: "sneezy.jpg",
    },
    ["the-talismen"]: {
      name: "The Talismen",
      imageUrl: "the-talismen.jpg",
    },
    ["wayne-graham"]: {
      name: "Wayne Graham",
      imageUrl: "wayne-graham.jpg",
    },
    ["william-matheny"]: {
      name: "William Matheny",
      imageUrl: "william-matheny.jpg",
    },
    ["funk-you"]: {
      name: "Funk You",
      imageUrl: "funk-you.jpeg",
    },
    ["the-kind-thieves"]: {
      name: "The Kind Thieves",
      imageUrl: "the-kind-thieves.jpg",
    },
    ["roxy-roca"]: {
      name: "ROXY ROCA",
      imageUrl: "roxy-roca.jpg",
    },
    ["tand"]: {
      name: "Tand",
      imageUrl: "tand.jpg",
    },
  },
};
