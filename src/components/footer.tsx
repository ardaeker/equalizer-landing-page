import Link from "next/link";
import * as Icons from "@/assets/icons";

export function Footer() {
  return (
    <footer className="space-y-8 px-5 pt-16 pb-20 md:px-10 lg:flex lg:gap-x-32 lg:px-0">
      <Icons.Equalizer aria-label="Equalizer Logo" />
      <div className="max-md:space-y-8 md:flex md:items-center md:justify-between lg:flex-1">
        <div className="text-base font-normal text-slate-900">
          <p>All rights reserved &copy; Equalizer {new Date().getFullYear()}</p>
          <p>
            <span>Have any problems? Contact us via social media or email us at</span>
            <Link
              href="mailto:equalizer@example.com"
              className="block max-w-max font-bold transition-colors duration-200 hover:text-orange-500"
            >
              equalizer@example.com
            </Link>
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-8 [&_svg]:transition-colors [&_svg]:duration-200">
            <li>
              <Link href="#" className="group" aria-label="Follow us on Facebook">
                <Icons.Facebook className="fill-slate-900 group-hover:fill-orange-500" aria-hidden />
              </Link>
            </li>
            <li>
              <Link href="#" className="group" aria-label="Follow us on Instagram">
                <Icons.Instagram className="fill-slate-900 group-hover:fill-orange-500" aria-hidden />
              </Link>
            </li>
            <li>
              <Link href="#" className="group" aria-label="Follow us on Twitter">
                <Icons.Twitter className="fill-slate-900 group-hover:fill-orange-500" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
