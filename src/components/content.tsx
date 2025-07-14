import Image from "next/image";
import * as Icons from "@/assets/icons";

function BackgroundPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={312} height={468} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#66E2DC"
          d="M234 78c43.078 0 78 34.922 78 78v156h-56c-55.228 0-100-44.772-100-100v-56c0-43.078 34.922-78 78-78Z"
        />
        <rect width={78} height={78} x={78} y={78} fill="#FCFAF9" rx={39} />
        <rect width={78} height={156} fill="#66E2DC" rx={39} />
        <rect width={156} height={156} y={156} fill="#FFB964" rx={78} />
        <g stroke="#FCFAF9" strokeWidth={2} transform="translate(0 312)">
          <rect width={154} height={154} x={1} y={1} rx={77} />
          <rect width={76} height={76} x={40} y={79} rx={38} />
        </g>
      </g>
    </svg>
  );
}

export function Content() {
  return (
    <main className="md:px-10 md:py-50 lg:px-0">
      <div className="md:relative md:h-150 md:w-full md:rounded-xl md:bg-slate-900">
        <BackgroundPattern className="hidden md:absolute md:top-0 md:left-0 md:block lg:left-92" />
        <div className="relative mt-27.5 h-95 w-full bg-slate-900 md:hidden" aria-hidden>
          <BackgroundPattern className="absolute top-0 left-1/2 -translate-x-1/2" />
          <Image
            src="/illustration-app.png"
            alt=""
            width={210}
            height={430}
            className="absolute -top-27.5 left-1/2 -translate-x-1/2"
            priority
          />
        </div>
        <div
          className="hidden md:absolute md:-top-28.5 md:left-11 md:block md:h-139 md:w-70 lg:-top-30.25 lg:left-25 lg:h-160.5 lg:w-78"
          aria-hidden
        >
          <Image src="/illustration-app.png" alt="" priority fill />
        </div>
        <div className="relative bg-orange-500 px-5 pt-12 pb-28 md:absolute md:right-16 md:-bottom-28.5 md:max-w-89 md:rounded-2xl md:p-12 lg:-bottom-30.25 lg:max-w-128 lg:p-14">
          <h2 className="text-2xl font-bold text-slate-900">Premium EQ</h2>
          <p className="mt-6 text-base font-normal text-slate-900 md:text-lg lg:text-xl">
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening
            experience to a whole new level and access all our incredible features!
          </p>
          <p className="mt-10 flex items-center gap-x-4">
            <span className="text-3xl font-bold text-slate-900">$4</span>
            <span className="text-xl font-normal text-slate-900">/ month</span>
          </p>
          <div className="mt-12 space-y-4">
            <button className="group flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-slate-900 px-8 py-4 transition-colors duration-200 hover:bg-cyan-500 [&>*]:transition-colors [&>*]:duration-200">
              <Icons.Apple className="mb-0.5 fill-white group-hover:fill-slate-900" aria-hidden />
              <span className="text-lg font-bold text-white group-hover:text-slate-900">iOS Download</span>
            </button>
            <button className="group bg-cream-100 flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl px-8 py-4 transition-colors duration-200 hover:bg-yellow-500">
              <Icons.Android className="mb-0.5 fill-slate-900" aria-hidden />
              <span className="text-lg font-bold text-slate-900">Android Download</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
