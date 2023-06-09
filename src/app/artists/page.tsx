"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { data } from "data";
import { Artist } from "types";
import clsx from "clsx";

const OptionItem = ({ option, slug }: { option: Artist; slug: string }) => (
  <li className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
    <Link
      href={`/artists/${slug}`}
      className="flex flex-col items-center justify-center h-full w-full text-lg font-semibold"
    >
      <div className="absolute inset-0 -z-10 h-full w-full">
        <CldImage
          src={option.imageUrl}
          alt={`${option.name} Photo`}
          width="960"
          height="600"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="rounded-2xl object-cover object-top h-full w-full"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#745B44]/90 via-gray-900/40 group-hover:opacity-0 transition-all duration-200" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900/90 via-gray-900/40 opacity-0 group-hover:opacity-100 transition-all duration-200" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <h3
          className={clsx(
            option.name.length > 30 ? "text-xl md:text-lg" : "text-2xl",
            "mt-3 whitespace-nowrap font-semibold leading-6 text-white group-hover:-translate-y-2 transition-all duration-200"
          )}
        >
          <span className="absolute inset-0" />
          {option.name}
        </h3>
      </div>
    </Link>
  </li>
);

export default function Artists() {
  return (
    <main className="px-4 lg:px-24 py-32 flex flex-col from-white via-[#F3EFEB] to-white bg-gradient-to-br">
      <h1 className="whitespace-pre-wrap text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-center">
        Roster
      </h1>
      <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 overflow-hidden">
        {Object.keys(data.artists)
          .sort((a, b) => a.localeCompare(b))
          .map((artist, i) => (
            <OptionItem key={i} option={data.artists[artist]} slug={artist} />
          ))}
      </ul>
    </main>
  );
}
