import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import { useState } from "react";
import { destinations } from "../assets/data.json";
import {
  ImgFadeAnimation,
  TextFadeAnimation,
} from "~/components/ui/fadeAnimation";

type Destination = {
  name: string;
  images: {
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

function updateDestinations(oldDes: Destination[]): Destination[] {
  const newDes = oldDes.map((dest) => {
    switch (dest.name.toLowerCase()) {
      case "moon":
        return { ...dest, images: { webp: moon } };
      case "mars":
        return { ...dest, images: { webp: mars } };
      case "europa":
        return { ...dest, images: { webp: europa } };
      case "titan":
        return { ...dest, images: { webp: titan } };
      default:
        return dest;
    }
  });
  return newDes;
}

export default function Destination() {
  const [updatedDestinations, setUpdatedDestinations] = useState<Destination[]>(
    updateDestinations(destinations),
  );
  const [selectedDestination, setSelectedDestination] = useState<Destination>(
    updatedDestinations[0],
  );

  return (
    <div className="flex min-h-lvh justify-center bg-(image:--bg-destination-mobile) bg-cover bg-center bg-no-repeat p-300 pt-[calc(var(--spacing-navbar-mobile)+var(--spacing-300))] text-white tablet:bg-(image:--bg-destination-tablet) tablet:p-500 tablet:pt-[calc(var(--spacing-navbar-tablet)+var(--spacing-500))] desktop:bg-(image:--bg-destination-desktop) desktop:pt-[calc(var(--spacing-navbar-desktop)+var(--spacing-600))]">
      <div className="flex grow flex-col items-center gap-300 desktop:max-w-277.5">
        <h2 className="flex gap-300 text-preset-6-mobile text-white uppercase tablet:self-start tablet:text-preset-5-tablet desktop:text-preset-5-desktop">
          <span className="font-bold tracking-[4.7px] opacity-25">01</span>
          <span>Pick your distination</span>
        </h2>
        <div className="flex w-full grow flex-col items-center gap-400 desktop:flex-row">
          <div className="relative w-full flex-1">
            <ImgFadeAnimation
              className="top-1/2 left-1/2 w-[150px] -translate-1/2 tablet:w-[300px] desktop:w-[480px]"
              name={selectedDestination.name}
              src={selectedDestination.images.webp}
            />
          </div>
          <div className="flex flex-1 desktop:justify-center">
            <div className="flex max-w-lg flex-col gap-300 text-center desktop:max-w-md desktop:items-start desktop:gap-500 desktop:text-left">
              <div className="flex gap-400 self-center text-preset-8-mobile text-blue-300 tablet:text-preset-8-desktop desktop:self-start">
                {updatedDestinations.map(({ name }) => (
                  <button
                    onClick={() => {
                      setSelectedDestination(
                        updatedDestinations.find(
                          (dest) => dest.name === name,
                        ) || updatedDestinations[0],
                      );
                    }}
                    key={name}
                    className={`nav-underline flex h-400 cursor-pointer items-start uppercase transition-all hover:text-white [&.active]:text-white ${selectedDestination.name === name ? "active" : ""}`}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-200">
                <h3 className="relative text-preset-2-mobile uppercase tablet:text-preset-2-tablet desktop:text-preset-2-desktop">
                  <span className="invisible">{selectedDestination.name}</span>
                  <TextFadeAnimation animationkey={selectedDestination.name}>
                    {selectedDestination.name}
                  </TextFadeAnimation>
                </h3>
                <p className="relative text-preset-9-mobile text-blue-300 tablet:text-preset-9-tablet desktop:text-preset-9-desktop">
                  <span className="invisible">
                    {selectedDestination.description}
                  </span>
                  <TextFadeAnimation animationkey={selectedDestination.name}>
                    {selectedDestination.description}
                  </TextFadeAnimation>
                </p>
              </div>
              <hr className="w-full opacity-25" />
              <div className="flex flex-col gap-300 uppercase tablet:flex-row">
                <div className="flex flex-col gap-100 tablet:grow">
                  <div className="text-preset-7-desktop text-blue-300">
                    AVG. DISTANCE
                  </div>
                  <div className="relative text-preset-6-desktop">
                    <span className="invisible">
                      {" "}
                      {selectedDestination.distance}
                    </span>
                    <TextFadeAnimation animationkey={selectedDestination.name}>
                      {selectedDestination.distance}
                    </TextFadeAnimation>
                  </div>
                </div>
                <div className="flex flex-col gap-100 tablet:grow">
                  <div className="relative text-preset-7-desktop text-blue-300">
                    Est. travel time
                  </div>
                  <div className="relative text-preset-6-desktop">
                    <span className="invisible">
                      {selectedDestination.travel}
                    </span>
                    <TextFadeAnimation animationkey={selectedDestination.name}>
                      {selectedDestination.travel}
                    </TextFadeAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
