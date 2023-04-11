export interface DataConfig {
  name: string;
  description: string;
  contacts: Contact[];
  artists: {
    [key: string]: Artist;
  };
  style: StyleConfig;
}

export interface Track {
  name: string;
  url: string;
}

export interface ArtistListen {
  amazon: string;
  apple: string;
  spotify: string;
  youtube: string;
}

export interface Artist {
  name: string;
  imageUrl: string;
  bio?: string[];
  agents: Contact[];
  website?: string;
  listen: ArtistListen;
  media: string[];
  social?: {
    facebook?: string;
    instagram?: string;
    spotify?: string;
    youtube?: string;
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
}
