import Image from "next/image";
import React from "react";

export default function Footer({ font }: { font: string }) {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between text-white bg-black rounded-t-[2.625rem] p-7 pr-4 md:py-7 md:px-0">
      <div className="flex items-center space-x-2 md:ml-[6.75rem]">
        <h1 className={`${font} text-sm md:text-2xl font-normal`}>CatWiki</h1>

        {/* image */}
        <div className="relative w-6 h-6 md:w-10 md:h-10">
          <Image
            src="/logo/cat.png"
            alt="cat-image"
            fill
            className="-scale-x-100"
          />
        </div>
      </div>

      <div className="flex items-center space-y-4 space-x-2 md:space-y-0 md:space-x-3.5 md:mr-8">
        <p className="font-normal text-xs md:text-2xl">©</p>
        <p className="font-normal text-xs md:text-lg">
          created by <span className="font-bold underline">Rohan Jacob</span> -
          devChallenge.io 2021
        </p>
      </div>
    </section>
  );
}
