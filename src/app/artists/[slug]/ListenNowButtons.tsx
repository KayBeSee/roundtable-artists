import { Artist } from "types";

import {
  AppleMusic,
  AmazonMusic,
  Spotify,
  YoutubeMusic,
  Mixcloud,
  Soundcloud,
} from "@/app/components/logos";

interface StreamingLogos {
  [key: string]: ({ className }: { className: string }) => JSX.Element;
}

const streamingProviders: StreamingLogos = {
  apple: AppleMusic,
  amazon: AmazonMusic,
  spotify: Spotify,
  youtube: YoutubeMusic,
  soundcloud: Soundcloud,
  mixcloud: Mixcloud,
};

interface Props {
  artist: Artist;
}

export const ListenNowButtons = ({ artist }: Props) => {
  return (
    <div className="">
      <div className={`rounded-2xl px-8 py-8 relative`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {Object.keys(artist.listen).map((service) => {
            const StreamLogo = streamingProviders[service];

            return (
              <a
                //   @ts-ignore
                href={artist.listen[service]}
                target="_blank"
                className="flex items-center justify-center w-40 h-16 md:w-28 md:h-12 relative"
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
