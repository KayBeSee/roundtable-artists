import { data } from "data";

export default function Footer() {
  return (
    <footer className="bg-slate-100/20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-between mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            <span>
              Website by{" "}
              <a
                href="https://kevinmulcrone.com"
                target="_blank"
                className="hover:underline hover:decoration-1 hover:underline-offset-2 decoration-[#B9A48E]"
              >
                Kevin Mulcrone
              </a>
            </span>
            <span>
              &copy; {new Date().getFullYear()} {data.name}. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
