import { technology } from "../assets/data.json";
import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import portLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import portPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import { useState } from "react";
import {
  ImgFadeAnimation,
  TextFadeAnimation,
} from "~/components/animation/fadeAnimation";

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

function updateTechnologies(oldTech: Technology[]): Technology[] {
  const newTech = oldTech.map((tech) => {
    switch (tech.name) {
      case "Launch vehicle":
        return {
          ...tech,
          images: {
            portrait: vehiclePortrait,
            landscape: vehicleLandscape,
          },
        };
      case "Spaceport":
        return {
          ...tech,
          images: {
            portrait: portPortrait,
            landscape: portLandscape,
          },
        };
      case "Space capsule":
        return {
          ...tech,
          images: {
            portrait: capsulePortrait,
            landscape: capsuleLandscape,
          },
        };

      default:
        return tech;
    }
  });
  return newTech;
}

export default function Technology() {
  const [updatedTech, setUpdatedTech] = useState<Technology[]>(
    updateTechnologies(technology),
  );
  const [selectedTech, setSelectedTech] = useState<Technology>(updatedTech[0]);

  return (
    <div className="flex min-h-lvh overflow-hidden bg-(image:--bg-technology-mobile) bg-cover bg-center bg-no-repeat px-300 pt-[calc(var(--spacing-navbar-height-mobile)+var(--spacing-300))] pb-600 text-white tablet:bg-(image:--bg-technology-tablet) tablet:p-500 tablet:pt-[calc(var(--spacing-navbar-height-tablet)+var(--spacing-500))] desktop:bg-(image:--bg-technology-desktop) desktop:px-0 desktop:pt-[calc(var(--spacing-navbar-height-desktop)+var(--spacing-600))] desktop:pb-600 desktop:pl-40">
      <div className="flex grow flex-col items-center gap-300 desktop:max-w-7xl desktop:items-start">
        <h2 className="flex gap-300 text-preset-6-mobile text-white uppercase tablet:self-start tablet:text-preset-5-tablet desktop:text-preset-5-desktop">
          <span className="font-bold tracking-[4.7px] opacity-25">03</span>
          <span>Space launch</span>
        </h2>
        <div className="flex w-full grow flex-col gap-400 pt-16 desktop:flex-row desktop:pt-0">
          <div className="relative grow desktop:order-2">
            <ImgFadeAnimation
              name={selectedTech.name}
              src={selectedTech.images.landscape}
              className="top-0 left-1/2 h-full min-w-dvw -translate-x-1/2 object-cover desktop:hidden"
            />
            <ImgFadeAnimation
              name={selectedTech.name}
              src={selectedTech.images.portrait}
              className="top-1/2 left-1/2 hidden size-152 -translate-1/2 object-cover desktop:block"
            />
          </div>
          <div className="flex flex-col items-center gap-500 desktop:flex-row">
            <div className="flex justify-center gap-200 desktop:flex-col desktop:gap-400">
              {updatedTech.map(({ name }, i) => (
                <button
                  key={name}
                  className={`flex size-10 items-center justify-center rounded-full border border-white/25 text-preset-4-mobile transition-all duration-600 hover:border-white tablet:size-14 tablet:text-preset-4-tablet desktop:size-20 desktop:text-preset-4-desktop [&.active]:bg-white [&.active]:text-blue-900 ${selectedTech.name === name ? "active" : ""} `}
                  onClick={() => {
                    setSelectedTech(
                      updatedTech.find((tech) => tech.name === name) ||
                        updatedTech[0],
                    );
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex max-w-lg flex-col gap-200 text-center desktop:text-left">
              <h3 className="flex flex-col gap-200 text-preset-4-mobile uppercase tablet:text-preset-4-tablet desktop:text-preset-4-desktop">
                <span className="text-preset-4-mobile opacity-50 tablet:text-preset-4-tablet desktop:text-preset-4-desktop">
                  THE TERMINOLOGY…
                </span>
                <span className="relative text-preset-3-mobile tablet:text-preset-3-tablet desktop:text-preset-3-desktop">
                  <span className="invisible"> {selectedTech.name}</span>
                  <TextFadeAnimation animationkey={selectedTech.name}>
                    {selectedTech.name}
                  </TextFadeAnimation>
                </span>
              </h3>
              <p className="relative text-preset-9-mobile text-blue-300 tablet:text-preset-9-tablet desktop:text-preset-9-desktop">
                <span className="invisible">{selectedTech.description}</span>
                <TextFadeAnimation animationkey={selectedTech.name}>
                  {selectedTech.description}
                </TextFadeAnimation>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
