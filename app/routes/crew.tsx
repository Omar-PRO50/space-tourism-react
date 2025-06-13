import { crew } from "../assets/data.json";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";
import { useState } from "react";
import {
  ImgFadeAnimation,
  TextFadeAnimation,
} from "~/components/ui/fadeAnimation";
type Crew = {
  name: string;
  images: {
    webp: string;
  };
  role: string;
  bio: string;
};

function updateCrews(oldCrew: Crew[]): Crew[] {
  const newCrew = oldCrew.map((crew) => {
    switch (crew.name) {
      case "Douglas Hurley":
        return { ...crew, images: { webp: douglas } };
      case "Mark Shuttleworth":
        return { ...crew, images: { webp: mark } };
      case "Victor Glover":
        return { ...crew, images: { webp: victor } };
      case "Anousheh Ansari":
        return { ...crew, images: { webp: anousheh } };
      default:
        return crew;
    }
  });
  return newCrew;
}

export default function Crew() {
  const [updatedCrews, setUpdatedCrews] = useState<Crew[]>(updateCrews(crew));
  const [selectedCrew, setSelectedCrew] = useState<Crew>(updatedCrews[0]);

  return (
    <div className="flex min-h-lvh overflow-hidden bg-(image:--bg-crew-mobile) bg-cover bg-center bg-no-repeat p-300 pt-[calc(var(--spacing-navbar-mobile)+var(--spacing-300))] text-white tablet:bg-(image:--bg-crew-tablet) tablet:p-500 tablet:pt-[calc(var(--spacing-navbar-tablet)+var(--spacing-500))] desktop:bg-(image:--bg-crew-desktop) desktop:pt-[calc(var(--spacing-navbar-desktop)+var(--spacing-600))] desktop:pb-600">
      <div className="mx-auto flex grow flex-col items-center gap-300 desktop:max-w-277.5">
        <h2 className="flex gap-300 text-preset-6-mobile text-white uppercase tablet:self-start tablet:text-preset-5-tablet desktop:text-preset-5-desktop">
          <span className="font-bold tracking-[4.7px] opacity-25">02</span>
          <span>Meet your crew</span>
        </h2>
        {/*div and image */}
        <div className="flex w-full grow flex-col gap-400 desktop:flex-row">
          {/*div */}
          <div className="flex flex-col items-center gap-300 pt-500 desktop:flex-1 desktop:items-start desktop:gap-500 desktop:pt-0 desktop:pb-600">
            <div className="flex max-w-lg flex-col gap-300 text-center desktop:grow desktop:justify-center desktop:text-left">
              <h3 className="flex flex-col gap-100 uppercase">
                <span className="relative text-preset-4-mobile opacity-50 tablet:text-preset-4-tablet desktop:text-preset-4-desktop">
                  <span className="invisible">{selectedCrew.role}</span>
                  <TextFadeAnimation animationkey={selectedCrew.name}>
                    {selectedCrew.role}
                  </TextFadeAnimation>
                </span>
                <span className="relative text-preset-3-mobile tablet:text-preset-3-tablet desktop:text-preset-3-desktop">
                  <span className="invisible">{selectedCrew.name}</span>
                  <TextFadeAnimation animationkey={selectedCrew.name}>
                    {selectedCrew.name}
                  </TextFadeAnimation>
                </span>
              </h3>
              <p className="relative text-preset-9-mobile text-blue-300 tablet:text-preset-9-tablet desktop:text-preset-9-desktop">
                <span className="invisible"> {selectedCrew.bio}</span>
                <TextFadeAnimation animationkey={selectedCrew.name}>
                  {selectedCrew.bio}
                </TextFadeAnimation>
              </p>
            </div>
            <div className="flex justify-center gap-200 desktop:gap-500">
              {updatedCrews.map(({ name }) => (
                <button
                  key={name}
                  className={`size-2.5 cursor-pointer rounded-full bg-white opacity-15 transition-all duration-600 desktop:size-[15px] [&.active]:opacity-100 [&:not(.active)]:hover:opacity-50 ${selectedCrew.name === name ? "active" : ""} `}
                  onClick={() => {
                    setSelectedCrew(
                      updatedCrews.find((crew) => crew.name === name) ||
                        updatedCrews[0],
                    );
                  }}
                ></button>
              ))}
            </div>
          </div>
          <div className="relative min-h-[230px] w-full flex-1">
            <ImgFadeAnimation
              name={selectedCrew.name}
              src={selectedCrew.images.webp}
              className="bottom-0 left-1/2 h-[340px] max-h-full w-[271.24px] -translate-x-1/2 [mask-image:linear-gradient(to_bottom,white_0%,white_77%,transparent_92%)] object-contain [-webkit-mask-image:linear-gradient(to_bottom,white_0%,white_77%,transparent_92%)] tablet:-bottom-[calc(var(--spacing-500)+57px)] tablet:h-[560px] tablet:max-h-6/5 tablet:w-[446.74px] desktop:bottom-1/2 desktop:h-[676px] desktop:w-full desktop:translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
