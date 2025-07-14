import * as Icons from "@/assets/icons";

export function Header() {
  return (
    <header className="space-y-16 px-5 py-16 md:space-y-32 md:px-10 lg:px-0">
      <Icons.Equalizer aria-label="Equalizer Logo" />
      <div className="space-y-10">
        <h1 className="-tracking-px text-2xl font-bold text-balance text-slate-900 max-lg:max-w-104 md:text-3xl lg:text-4xl">
          We make your music sound extraordinary
        </h1>
        <p className="max-w-126 text-base font-normal text-slate-900 md:text-lg lg:max-w-184 lg:text-xl">
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with
          a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>
    </header>
  );
}
