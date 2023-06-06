"use client";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

import { Artist } from "types";
import Image from "next/image";

interface Props {
  artist: Artist;
}

export const ArtistVideos = ({ artist }: Props) => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [content, setContent] = useState<JSX.Element>(<div></div>);

  // if no media, remove this section
  if (!artist.videos || artist.videos?.length === 0) {
    return null;
  }

  return (
    <>
      <Transition show={isModalOpen}>
        <Dialog
          onClose={() => {
            setIsModalOpen(false);
          }}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 -translate-y-20"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="mx-auto max-w-2xl rounded bg-white relative">
                {content}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      <div className="py-10">
        <div className="flex flex-col">
          <h3 className={`text-md font-semibold leading-6 text-gray-600`}>
            Videos
          </h3>
          <ul
            role="list"
            className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-12"
          >
            {artist.videos?.map((file, i) => {
              return (
                <li key={i} className="relative">
                  <div
                    className={clsx(
                      "relative focus-within:ring-2 focus-within:ring-[#AF8961] focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                      "aspect-[10/7] group block w-full overflow-hidden rounded-lg bg-gray-100"
                    )}
                  >
                    <iframe
                      // width="560"
                      // height="315"
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${file}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
