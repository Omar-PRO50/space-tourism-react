import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [];
}

export default function Home() {
  return (
    <div className="flex h-lvh bg-(image:--bg-home-mobile) bg-cover bg-center bg-no-repeat p-300 pt-[calc(var(--spacing-navbar-mobile)+var(--spacing-300))] tablet:bg-(image:--bg-home-tablet) tablet:px-500 tablet:pt-[calc(var(--spacing-navbar-tablet)+var(--spacing-1600))] tablet:pb-1600 desktop:items-end desktop:bg-(image:--bg-home-desktop) desktop:pt-[calc(var(--spacing-navbar-desktop)+var(--spacing-1600))]">
      <div className="flex w-full flex-col items-center desktop:flex-row desktop:justify-between">
        <div className="flex max-w-135 flex-col gap-300 text-center desktop:text-left">
          <h1 className="flex flex-col gap-300 uppercase">
            <span className="text-preset-6-mobile text-blue-300 tablet:text-preset-5-desktop">
              So, you want to travel to
            </span>

            <span className="text-preset-1-mobile text-white tablet:text-preset-1-desktop">
              Space
            </span>
          </h1>
          <p className="text-preset-9-mobile text-blue-300 tablet:text-preset-9-tablet desktop:text-preset-9-desktop">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex grow-1 items-center justify-center text-preset-4-mobile text-blue-900 uppercase tablet:items-end tablet:text-preset-4-desktop desktop:justify-end">
          <a
            href="/destination"
            className="flex size-[9rem] items-center justify-center rounded-full bg-white ring-[80px] ring-transparent transition-all duration-600 hover:ring-white/10 tablet:size-68"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}
