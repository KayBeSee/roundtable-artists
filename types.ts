export interface DataConfig {
  name: string;
  description: string;
  contacts: Contact[];
  artists: {
    [key: string]: Artist;
  };
  style: StyleConfig;
  analytics: {
    googleAnalyticsCode: string;
  };
}

export interface Track {
  name: string;
  url: string;
}

export interface ArtistListen {
  amazon?: string;
  apple?: string;
  spotify?: string;
  youtube?: string;
  soundcloud?: string;
  mixcloud?: string;
}

export interface Artist {
  name: string;
  imageUrl: string;
  bio?: string[];
  agents: Contact[];
  website?: string;
  listen: ArtistListen;
  photos?: string[];
  videos?: string[];
  social?: {
    facebook?: string;
    instagram?: string;
    spotify?: string;
    youtube?: string;
    nugsnet?: string;
    tiktok?: string;
    twitter?: string;
  };
  tracks: Track[];
}

interface StyleConfig {
  roster: {
    trackListing: string;
  };
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  type?: "booking" | "management" | "all";
  title?: string;
}
