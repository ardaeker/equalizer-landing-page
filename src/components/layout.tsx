import { classNames } from "@/utils/class-names";

function Illustration(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames("h-96 w-96 rounded-full blur-3xl", props.className)} />;
}

function BackgroundPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={312} height={468} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#66E2DC"
          d="M78 0c43.078 0 78 34.922 78 78v234h-56C44.772 312 0 267.228 0 212V78C0 34.922 34.922 0 78 0Z"
        />
        <path fill="#191826" d="M156 312h78c43.078 0 78 34.922 78 78s-34.922 78-78 78-78-34.922-78-78v-78Z" />
        <rect width={78} height={78} x={234} y={78} fill="#FFB964" rx={39} />
        <rect width={78} height={78} x={234} fill="#FA7453" rx={39} />
        <rect width={156} height={156} y={312} fill="#FA7453" rx={78} />
        <rect width={78} height={156} x={156} fill="#191826" rx={39} />
        <rect width={154} height={154} x={157} y={157} stroke="#191826" strokeWidth={2} rx={77} />
        <rect width={76} height={76} x={157} y={196} stroke="#191826" strokeWidth={2} rx={38} />
      </g>
    </svg>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative mx-auto max-w-360">
      <Illustration className="hidden md:absolute md:-top-48 md:-left-25 md:block md:bg-orange-500/15 lg:-left-12.5" />
      <Illustration className="absolute -top-38 -right-48 bg-cyan-400/[0.2825] md:top-26 md:right-22 lg:right-34.5" />
      <Illustration className="absolute top-30 -right-48 bg-orange-400/[0.1532] md:top-94 md:right-22 lg:right-34.5" />
      <Illustration className="hidden md:absolute md:top-310 md:-right-45 md:block md:bg-orange-500/15 lg:top-300.75 lg:-right-32 lg:bottom-56" />
      <div className="relative mx-auto max-w-360">
        <BackgroundPattern className="hidden md:absolute md:-top-10 md:-right-12.5 md:block lg:right-0" />
        <div className="mx-auto min-h-screen w-full max-w-280">{children}</div>
      </div>
    </div>
  );
}
