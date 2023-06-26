import clsx from "clsx";
import { data } from "data";
import { Artist } from "types";
// import { CldImage } from "next-cloudinary";
// import Image from "next/image";

import { TrackListingPlayer } from "./TrackListingPlayer";
import { ListenNowButtons } from "./ListenNowButtons";
import { ArtistPhotos } from "./Photos";
import { ArtistVideos } from "./Videos";
import { SocialButtons } from "./SocialButtons";
import { MainImage } from "./MainImage";

interface Props {
  params: {
    slug: string;
  };
}

interface MetadataProps {
  artist: Artist;
  className: string;
}

const Metadata = ({ artist, className }: MetadataProps) => {
  return (
    <dl
      className={`${className} mt-10 border-t border-gray-900/10 divide-y flex flex-col divide-gray-900/10`}
    >
      <div className="py-10">
        <dt className="text-sm font-semibold leading-6 text-gray-600 mb-3">
          Contact{artist.agents.length > 1 ? "s" : ""}:
        </dt>
        <div className="grid grid-cols-1 gap-8">
          {artist.agents.map((agent, agentIdx) => (
            <a
              key={agentIdx}
              href={`mailto:${agent.email}`}
              className="group mt-2 flex flex-col tracking-tight"
            >
              {agent.type === "all" ? (
                <span className="capitalize text-sm text-gray-500 mb-0">
                  Booking, Management
                </span>
              ) : (
                <span className="capitalize text-sm text-gray-500 mb-0">
                  {agent.type}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900">
                {agent.name}
                <svg
                  viewBox="0 0 3 6"
                  className="ml-4 w-auto h-2 overflow-visible inline -mt-px text-[#B9A48E] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-md text-gray-500 mt-1">{agent.email}</span>
            </a>
          ))}
        </div>
      </div>
      <ListenNowButtons artist={artist} />
      <TrackListingPlayer artist={artist} />
    </dl>
  );
};

export default async function ArtistPage({ params }: Props) {
  const { slug } = params;
  const artist = data.artists[slug];

  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-8">
              {artist.name}
            </h1>
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <MainImage artist={artist} />
              <div className="absolute inset-0 bg-gray-100 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#D4C1AE] to-[#E2D6C8] opacity-40"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
            <Metadata artist={artist} className="hidden sm:block" />
            {slug === "william-matheny" ? (
              <ArtistVideos artist={artist} />
            ) : null}
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="max-w-xl">
                <SocialButtons artist={artist} />
                {artist.bio?.map((line, i) => (
                  <p
                    key={i}
                    className={clsx(i === 0 ? "mt-4 sm:mt-4" : "mt-8")}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {artist.website ? (
              <div className="mt-10 flex">
                <a
                  href={artist.website}
                  className="text-base font-semibold leading-7 text-[#AF8961] hover:opacity-80"
                >
                  Visit {artist.name}&apos;s website
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ) : null}
          </div>
          <Metadata className="block sm:hidden" artist={artist} />
        </div>
        {slug !== "william-matheny" ? <ArtistVideos artist={artist} /> : null}
        <ArtistPhotos artist={artist} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const artistSlugs = Object.keys(data.artists);

  const formattedSlugs = artistSlugs.map((slug) => ({
    slug,
  }));

  return formattedSlugs;
}
