import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "./components/logos";

interface Option {
  title: string;
  href: string;
}

const options: Option[] = [
  {
    title: "Roster",
    href: "/artists",
  },
  // {
  //   title: "About",
  //   href: "/about",
  // },
  {
    title: "Contact",
    href: "/contact",
  },
];

const OptionItem = ({ option }: { option: Option }) => (
  <li className="text-slate-900 flex items-center justify-center hover:underline hover:decoration-2 hover:underline-offset-4 decoration-[#B9A48E] rounded-2xl transition-all duration-200">
    <Link
      href={option.href}
      className="flex items-center justify-center h-full w-full py-2 px-3 sm:py-4 sm:px-5 text-lg font-semibold"
    >
      {option.title}
    </Link>
  </li>
);

export default function Home() {
  return (
    <main className="h-screen w-screen p-24 flex flex-col items-center justify-center from-white via-[#F3EFEB] to-white bg-gradient-to-br">
      <div className="pt-0 pb-4 sm:pb-0">
        <div className="h-64 w-64 relative">
          <Image
            src="/ROUNDTABLE.svg"
            layout="fill"
            alt="Roundtable Agency Logo"
            className=""
          />
        </div>
      </div>
      <div className="">
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"> */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1">
          {options.map((option) => (
            <OptionItem key={option.href} option={option} />
          ))}
        </ul>
      </div>
      <div className="mt-6 md:mt-0 md:absolute md:top-4 md:right-4">
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100093469365130"
              target="_blank"
            >
              <Facebook
                className={`fill-gray-600 hover:fill-[#AF8961] w-6 h-6 hover:scale-110 transition duration-300 cursor-pointer`}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/roundtableartists/"
              target="_blank"
            >
              <Instagram
                className={`fill-gray-600 hover:fill-[#AF8961] w-6 h-6 hover:scale-110 transition duration-300 cursor-pointer`}
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
