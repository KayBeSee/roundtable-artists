"use client";

import { CldImage } from "next-cloudinary";
import { Artist } from "types";

interface Props {
  artist: Artist;
}

export const MainImage = ({ artist }: Props) => {
  return (
    <CldImage
      className="absolute inset-0 h-full w-full object-cover brightness-125"
      src={artist.imageUrl}
      alt={`${artist.name} Photo`}
      width="960"
      height="600"
      crop="thumb"
      gravity="faces"
      sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
    />
  );
};
