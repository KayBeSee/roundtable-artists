import { Artist } from "types";

import {
  Instagram,
  Facebook,
  SpotifyIcon,
  YouTube,
} from "@/app/components/logos";

interface SocialLogos {
  [key: string]: ({ className }: { className: string }) => JSX.Element;
}

const streamingProviders: SocialLogos = {
  facebook: Facebook,
  instagram: Instagram,
  spotify: SpotifyIcon,
  youtube: YouTube,
};

interface Props {
  artist: Artist;
}

export const SocialButtons = ({ artist }: Props) => {
  return (
    <div className="">
      <div className={`rounded-2xl px-2 py-2 relative`}>
        <div className="flex gap-10 justify-center">
          {artist.social &&
            Object.keys(artist.social).map((service) => {
              const StreamLogo = streamingProviders[service];

              return (
                <a
                  //   @ts-ignore
                  href={artist.social[service]}
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 md:w-8 md:h-8 relative"
                  key={service}
                >
                  <StreamLogo
                    className={`fill-gray-600 hover:fill-[#AF8961] w-40 h-16 md:w-28 md:h-12 hover:scale-110 transition duration-300 cursor-pointer`}
                  />
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
