"use client";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

import { Artist } from "types";
import Image from "next/image";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  artist: Artist;
}

export const ArtistPhotos = ({ artist }: Props) => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [content, setContent] = useState<JSX.Element>(<div></div>);

  // if no media, remove this section
  if (!artist.photos || artist.photos?.length === 0) {
    return null;
  }

  const clickPhoto = (file: string) => {
    setContent(
      <>
        <Image
          src={`https://res.cloudinary.com/dyxybmew8/image/upload/w_1280/${file}.jpg`}
          blurDataURL={`https://res.cloudinary.com/dyxybmew8/image/upload/w_32/${file}.jpg`}
          placeholder="blur"
          alt=""
          width={1280}
          height={853}
          className={clsx(
            "group-hover:opacity-75",
            "aspect-[3/2]",
            "pointer-events-none object-cover"
          )}
        />
        <a
          href={`https://res.cloudinary.com/dyxybmew8/image/upload/${file}.jpg`}
          download={`${file}.jpg`}
          className="flex items-center text-gray-100 group absolute"
        >
          <ArrowDownCircleIcon className="w-4 h-4 mr-1" />
          <span className="group-hover:underline">Download</span>
        </a>
      </>
    );
  };

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
            Photos
          </h3>
          <ul
            role="list"
            className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {artist.photos?.map((file, i) => {
              const imageUrl = `https://res.cloudinary.com/dyxybmew8/image/upload/w_120,h_84/${file}.jpg`;

              return (
                <li key={i} className="relative">
                  <div
                    className={clsx(
                      "relative focus-within:ring-2 focus-within:ring-[#AF8961] focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                      "aspect-[10/7] group block w-full overflow-hidden rounded-lg bg-gray-100"
                    )}
                  >
                    <Image
                      src={imageUrl}
                      alt=""
                      width={250}
                      height={250}
                      className="pointer-events-none object-cover absolute inset-0 h-full w-full brightness-125 saturate-0 group-hover:saturate-100"
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
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                      onClick={() => {
                        clickPhoto(file);
                        setIsModalOpen(true);
                      }}
                    >
                      <span className="sr-only">
                        View details for {imageUrl}
                      </span>
                    </button>
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
