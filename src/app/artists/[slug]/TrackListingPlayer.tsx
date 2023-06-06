"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Artist, Track } from "types";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { Equalizer } from "./Equalizer";
import { data } from "data";
import { ListenNowButtons } from "./ListenNowButtons";

interface Props {
  artist: Artist;
}

export const TrackListingPlayer = ({ artist }: Props) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [currentAudioUrl, setCurrentAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.pause();
      ref.current = new Audio(currentAudioUrl);
      ref.current.play();
      ref.current.onended = () => {
        setCurrentAudioUrl("");
        setIsPlaying(false);
      };
    } else {
      ref.current = new Audio(currentAudioUrl);
      ref.current.play();
      ref.current.onended = () => {
        setCurrentAudioUrl("");
        setIsPlaying(false);
      };
    }
  }, [currentAudioUrl]);

  useEffect(() => {
    return () => {
      ref.current!.pause();
      setCurrentAudioUrl("");
      setIsPlaying(false);
    };
  }, []);

  const togglePlay = (url: string) => {
    if (currentAudioUrl === url) {
      if (!isPlaying) {
        ref.current!.play();
        setIsPlaying(true);
      } else {
        ref.current!.pause();
        setIsPlaying(false);
      }
    } else {
      setCurrentAudioUrl(url);
      setIsPlaying(true);
    }
  };

  return (
    <div className={clsx("prose w-full py-10")}>
      <div className="flex items-end">
        <h3 className={`text-md font-semibold leading-6 text-gray-600`}>
          Listen
        </h3>
        <span className={`text-sm text-gray-500 ml-2`}>
          - Click tracks for preview
        </span>
      </div>
      <ol
        className={clsx(
          "list-none columns-1 list-inside pl-0 not-prose mt-2 gap-8 space-y-2"
        )}
      >
        {artist.tracks.map((item, i) => (
          <li
            key={item.name}
            className={clsx(
              item.url === currentAudioUrl ? "font-semibold" : "",
              "text-[#B9A48E]  hover:bg-white/20 hover:cursor-pointer group not-prose font-semibold rounded-xl"
            )}
          >
            <button
              onClick={() => {
                togglePlay(item.url);
              }}
              className="not-prose items-center flex px-2 py-1"
            >
              <span
                className={clsx(
                  currentAudioUrl === item.url && isPlaying
                    ? "hidden"
                    : "flex group-hover:hidden",
                  "mr-2 mt-0 w-4 h-4 flex items-center opacity-60"
                )}
              >
                {i + 1}
              </span>
              <PlayIcon
                className={clsx(
                  (currentAudioUrl === item.url && !isPlaying) ||
                    currentAudioUrl !== item.url
                    ? "group-hover:flex"
                    : currentAudioUrl === item.url && !isPlaying
                    ? ""
                    : "",
                  "w-4 h-4 hidden mr-2"
                )}
              />
              <PauseIcon
                className={clsx(
                  currentAudioUrl === item.url && isPlaying
                    ? "group-hover:flex"
                    : "hidden",
                  "w-4 h-4 hidden mr-2"
                )}
              />
              <Equalizer
                className={clsx(
                  currentAudioUrl === item.url && isPlaying
                    ? "flex group-hover:hidden"
                    : "hidden",
                  `w-4 h-4 mr-2`
                )}
              />

              {item.name}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
