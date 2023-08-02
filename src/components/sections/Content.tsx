import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:space-x-16 pt-16 pb-6 md:py-[6.25rem] text-[#291507]">
      <div className="flex flex-col">
        <span className="bg-[#4D270C] block w-10 h-0.5 md:w-16 md:h-[0.2rem] rounded-[4.8rem] mb-4"></span>
        <h1 className="font-bold text-[2rem] md:text-[3rem] leading-normal md:w-[26.87rem] mb-11">
          Why should you have a cat?
        </h1>
        <p className="font-medium text-lg md:text-lg md:w-[28rem] mb-7 md:mb-16">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>

        <div className="flex items-center opacity-60 space-x-1.5 cursor-pointer">
          <p className="font-bold text-xs md:text-lg">READ MORE</p>
          <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-[#291507]" />
        </div>
      </div>

      {/* image grid */}
      <div className="grid grid-cols-2 gap-5 mt-16 md:mt-0">
        <div className="grid gap-5">
          {/* first image */}
          <Image
            src="/cat-images/image2.png"
            alt="cat-image"
            width={400}
            height={400}
            className="rounded-3xl w-60"
          />

          {/* second image */}
          <Image
            src="/cat-images/image1.png"
            alt="cat-image"
            width={400}
            height={400}
            className="rounded-3xl w-60"
          />
        </div>
        {/* third image */}
        <Image
          src="/cat-images/image3.png"
          alt="cat-image"
          width={400}
          height={400}
          className="rounded-3xl w-60"
        />
      </div>
    </section>
  );
}
