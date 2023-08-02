import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";

export default function Hero({ font }: { font: string }) {
  const tempCatImages = [
    { url: "image1.png", name: "Bengal" },
    { url: "image2.png", name: "Savannah" },
    { url: "image3.png", name: "Norwegian Cat" },
    { url: "image1.png", name: "Selkirk Rex" },
  ];
  return (
    <section className="mt-6 md:mt-8 w-full">
      {/* first upper section */}
      <div className="hero-img relative rounded-t-[2.625rem] px-7 py-6 md:px-24 md:pt-28 md:pb-36">
        <div className="flex items-center space-x-6 md:mb-3 mb-2">
          <h1 className={`${font} text-sm md:text-[4rem]`}>CatWiki</h1>

          {/* image */}
          <div className="hidden md:block relative w-20 h-16">
            <Image
              src="/logo/cat.png"
              alt="cat-image"
              fill
              className="-scale-x-100"
            />
          </div>
        </div>

        <div>
          <h1 className="font-medium text-[0.625rem] md:text-2xl w-[8.5rem] md:w-[23rem]">
            Get to know more about your cat breed
          </h1>
        </div>

        {/* input */}
        <div className="relative w-24 md:w-96 md:mt-14 mt-4">
          <Input
            type="text"
            placeholder="Search"
            className="rounded-[3.6rem] h-8 md:h-[4.35rem] font-medium md:pl-7 md:pr-16 text-black md:text-xl"
          />
          <MagnifyingGlassIcon className="text-black absolute top-2 right-2 md:top-6 md:right-5 w-3.5 h-3.5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* second below section */}
      <div className="bg-[#E3E1DC] text-[#291507] rounded-b-[2.625rem] px-7 pt-5 pb-14 md:px-24 md:pt-10 md:pb-24">
        <p className="text-xs md:text-lg font-medium">Most Searched Breeds</p>
        <span className="bg-[#4D270C] block w-10 h-0.5 md:w-16 md:h-1.5 rounded-[4.8rem] mt-2"></span>

        <div className="flex items-end justify-between mt-9 mb-12">
          <h1 className="font-bold text-lg w-48  md:text-[3rem] md:w-[33.5rem] leading-normal">
            66+ Breeds For you to discover
          </h1>

          <div className="hidden md:flex items-center opacity-60 space-x-1.5 cursor-pointer">
            <p className="font-bold text-lg">SEE MORE</p>
            <ArrowRightIcon className="w-6 h-6 text-[#291507]" />
          </div>
        </div>

        {/* top cat image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3.5 md:gap-12 relative">
          <div className="absolute top-4 -left-1 md:top-8 md:-left-4 w-8 h-6.5rem md:w-12 md:h-44 bg-[#DEC68B] rounded-[8.75rem]"></div>
          {tempCatImages.map((image) => (
            <div
              key={image.name}
              className="flex flex-col md:space-y-5 space-y-3"
            >
              <div className="relative w-[6.5rem] h-[6.5rem] md:w-[13.75rem] md:h-[13.75rem]">
                <Image
                  src={`/cat-images/${image.url}`}
                  alt="cat-image"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h1 className="font-semibold text-xs md:text-lg">{image.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
