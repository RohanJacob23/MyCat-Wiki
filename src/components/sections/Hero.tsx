"use client";

import {
  ArrowRightIcon,
  Cross1Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Breeds, Images } from "@/types/types";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero({
  font,
  breeds,
  allFourImages,
}: {
  font: string;
  breeds: Breeds[];
  allFourImages: Images[];
}) {
  const [breedsArr, setBreedsArr] = useState(breeds);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node) &&
        window.innerWidth >= 768
      ) {
        // User clicked outside of the element
        setShowSearch(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setBreedsArr(() => {
      if (search === "") {
        return breeds;
      }
      return breeds.filter((breed) =>
        breed.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, breeds]);

  return (
    <section className="mt-6 md:mt-8 w-full  text-white">
      {/* first upper section */}
      <div className="hero-img rounded-t-[2.625rem] px-7 py-6 md:px-24 md:pt-28 md:pb-36">
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
        <div className="relative w-24 md:w-96 md:mt-14 mt-4" ref={elementRef}>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="rounded-[3.6rem] h-8 md:h-[4.35rem] font-medium md:pl-7 md:pr-16 text-black md:text-xl"
            onClick={() => setShowSearch(true)}
          />
          <MagnifyingGlassIcon className="text-black absolute top-2 right-2 md:top-6 md:right-5 w-3.5 h-3.5 md:w-6 md:h-6" />

          {/* search suggestion modal */}
          <div
            className={`hidden md:block ${
              showSearch ? "opacity-100" : "opacity-0"
            } absolute -ml-7 top-0 md:ml-0 md:top-20 w-full bg-white text-black rounded-3xl transition-all duration-500 z-50`}
          >
            <ScrollArea
              className={`h-52 rounded-3xl ${showSearch ? "" : "hidden"}`}
            >
              <div className="flex flex-col text-lg font-medium p-2">
                {breedsArr.map((breed) => (
                  <Link
                    href={`/${breed.id}`}
                    className="py-5 px-3 cursor-pointer rounded-xl hover:bg-[#979797]/10"
                    key={breed.id}
                  >
                    {breed.name}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* second below section */}
      <div className="bg-[#E3E1DC] text-[#291507] rounded-b-[2.625rem] px-7 pt-5 pb-14 md:px-24 md:pt-10 md:pb-24">
        <p className="text-xs md:text-lg font-medium">Most Searched Breeds</p>
        <span className="bg-[#4D270C] block w-10 h-0.5 md:w-16 md:h-1.5 rounded-[4.8rem] mt-2"></span>

        <div className="flex items-end justify-between mt-4 mb-7 md:mt-9 md:mb-12">
          <h1 className="font-bold text-lg w-48  md:text-[3rem] md:w-[33.5rem] leading-normal">
            66+ Breeds For you to discover
          </h1>

          <Link
            href="/top"
            className="hidden md:flex items-center opacity-60 space-x-1.5 cursor-pointer"
          >
            <span className="font-bold text-lg">SEE MORE</span>
            <ArrowRightIcon className="w-6 h-6 text-[#291507]" />
          </Link>
        </div>

        {/* top cat image grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-3.5 md:gap-12 relative">
          <div className="absolute top-1 -left-1 sm:top-8 sm:-left-4 w-8 h-[6rem] sm:w-12 sm:h-44 bg-[#DEC68B] rounded-[8.75rem]"></div>
          {allFourImages.map((image) => (
            <div
              key={image.id}
              className="flex flex-col md:space-y-5 space-y-3"
            >
              <div className="relative w-[6.5rem] h-[6.5rem] sm:w-[13.75rem] sm:h-[13.75rem]">
                <Image
                  src={image.url}
                  alt="cat-image"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h1 className="font-semibold text-xs md:text-lg">
                {image.breeds[0].name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/* search Modal */}
      <div
        className={`${
          showSearch ? "opacity-100 z-10" : "opacity-0 -z-10"
        } block md:hidden absolute top-0 left-0 w-full h-[25rem] rounded-b-xl text-black bg-white transition-all duration-500`}
      >
        <div
          className={`${
            showSearch ? "flex" : "hidden"
          } flex-col w-full h-full px-5 space-y-2`}
        >
          <Button
            className="mt-2 bg-transparent hover:bg-[#9797971A] border-none self-end"
            onClick={() => setShowSearch(false)}
            variant="ghost"
          >
            <Cross1Icon className="h-4 w-4 text-black" />
          </Button>

          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="rounded-[3.6rem] h-11 font-medium md:pl-7 md:pr-16 text-black md:text-xl"
              onClick={() => setShowSearch(true)}
            />
            <MagnifyingGlassIcon className="text-black absolute top-2 right-2 w-6 h-6" />
          </div>
          <ScrollArea className="h-full mb-4 mt-2 rounded-3xl">
            <div className="flex flex-col text-lg font-medium p-2">
              {breedsArr.map((breed) => (
                <Link
                  href={`/${breed.id}`}
                  className="py-4 px-2 cursor-pointer rounded-xl hover:bg-[#979797]/10"
                  key={breed.id}
                >
                  {breed.name}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
