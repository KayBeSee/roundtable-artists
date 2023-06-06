import { data } from "data";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 flex-1">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
          Contact
        </h1>
        <div className="mt-6 max-w-2xl mx-auto lg:mt-12 w-full flex items-center justify-center">
          <div className="mt-10 space-y-8 grid text-base leading-7 text-gray-600 w-full">
            {data.contacts.map((contact) => (
              <a
                href={`mailto:${contact.email}`}
                key={contact.email}
                className="group"
              >
                <p className="text-slate-900 font-medium">
                  {contact.name}{" "}
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
                </p>
                <p className="text-slate-500">{contact.title}</p>
                <p className="text-slate-600">{contact.email}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
