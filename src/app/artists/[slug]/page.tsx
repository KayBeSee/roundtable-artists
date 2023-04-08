import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { data } from "data";
import { Artist } from "types";
import Image from "next/image";
import Link from "next/link";
import { TrackListingPlayer } from "./TrackListingPlayer";

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
      className={`${className} mt-10 border-t border-gray-900/10 divide-y flex flex-col divide-gray-900/10 pt-10`}
    >
      <div className="py-10">
        <dt className="text-sm font-semibold leading-6 text-gray-600">
          Responsible Agent{artist.agents.length > 1 ? "s" : ""}
        </dt>
        <div className="grid grid-cols-1 gap-8">
          {artist.agents.map((agent, agentIdx) => (
            <a
              key={agentIdx}
              href={`mailto:${agent.email}`}
              className="group mt-2 flex flex-col leading-10 tracking-tight"
            >
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
              <span className="text-md text-gray-500">{agent.email}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col">
          <h3 className={`text-md font-semibold leading-6 text-gray-600`}>
            Media
          </h3>
          <ul
            role="list"
            className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {[
              {
                name: "IMG_4985.HEIC",
                size: "3.9 MB",
                source:
                  "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
                current: true,
              },
              {
                name: "IMG_4985.HEIC",
                size: "3.9 MB",
                source:
                  "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
                current: true,
              },
              {
                name: "IMG_4985.HEIC",
                size: "3.9 MB",
                source:
                  "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
                current: true,
              },
              // More files...
            ].map((file) => (
              <li key={file.name} className="relative">
                <div
                  className={clsx(
                    file.current
                      ? "ring-2 ring-indigo-500 ring-offset-2"
                      : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                    "aspect-[10/7] group block w-full overflow-hidden rounded-lg bg-gray-100"
                  )}
                >
                  <img
                    src={file.source}
                    alt=""
                    className={clsx(
                      file.current ? "" : "group-hover:opacity-75",
                      "pointer-events-none object-cover"
                    )}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.name}
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TrackListingPlayer tracks={artist.tracks} />
    </dl>
  );
};

export default async function ArtistPage({ params }: Props) {
  const { slug } = params;
  const artist = data.artists[slug];

  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="max-w-6xl sm:max-w-7xl mx-auto px-6 lg:px-8 mt-4">
        <Link
          href="/artists"
          className="group inline-flex space-x-3 text-sm font-medium text-gray-600 hover:text-gray-500 mb-6 sm:mb-12"
        >
          <ArrowLongLeftIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-400"
            aria-hidden="true"
          />
          <span>Back to Roster</span>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src={`/artists/${artist.imageUrl}`}
                fill
                alt=""
              />
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
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#AF8961]">
                Artist
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {artist.name}
              </h1>
              <div className="max-w-xl">
                {artist.bio?.map((line, i) => (
                  <p key={i} className={clsx(i === 1 ? "mt-6" : "mt-8")}>
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
