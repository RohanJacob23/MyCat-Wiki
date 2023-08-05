import CatDescription from "@/components/sections/CatDescription";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Images } from "@/types/types";
import { Mystery_Quest } from "next/font/google";
import Image from "next/image";
import React from "react";

const mystery_quest = Mystery_Quest({ weight: ["400"], subsets: ["latin"] });

async function fetchCatBreed(catId: string): Promise<Images[]> {
  // need to change the revalidate opition to 3600
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&limit=9`,
    {
      headers: { "x-api-key": process.env.API_KEY ?? "" },
      next: { revalidate: 3600 },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params: { catId },
}: {
  params: { catId: string };
}) {
  const cat = await fetchCatBreed(catId);
  const breed = cat[0].breeds[0];
  return (
    <main className="px-5 md:px-24">
      <Header />

      {/* cat description */}
      <section className="flex flex-col lg:flex-row justify-center lg:gap-28 px-4 md:px-8 mt-10 text-[#291507]">
        <div className="relative">
          <Image
            src={cat[0].url}
            alt="cat-logo"
            width={400}
            height={400}
            className="object-cover rounded-3xl w-56 h-56 md:w-[23rem] md:h-[23rem] relative z-10"
          />
          <div className="absolute top-4 -left-2 md:top-8 md:-left-4 w-8 h-40 md:w-20 md:h-80 bg-[#DEC68B] rounded-[8.75rem]"></div>
        </div>

        <CatDescription
          name={breed.name}
          description={breed.description}
          temperament={breed.temperament}
          origin={breed.origin}
          life_span={breed.life_span}
          adaptability={breed.adaptability}
          affection_level={breed.affection_level}
          child_friendly={breed.child_friendly}
          grooming={breed.grooming}
          intelligence={breed.intelligence}
          health_issues={breed.health_issues}
          social_needs={breed.social_needs}
          stranger_friendly={breed.stranger_friendly}
        />
      </section>

      {/* other photos */}
      <section className="mt-20 mb-20 lg:mb-44">
        <h1 className="text-[#291507] font-semibold text-3xl md:text-4xl mb-10">
          Other Photos
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-x-12 md:gap-y-14">
          {cat.map((image, i) => (
            <>
              {i !== 0 && (
                <Image
                  key={i}
                  src={image.url}
                  alt="cat-logo"
                  width={400}
                  height={400}
                  className="rounded-3xl w-36 h-36 md:h-[17.375rem] md:w-[17.375rem] object-cover"
                />
              )}
            </>
          ))}
        </div>
      </section>

      <Footer font={mystery_quest.className} />
    </main>
  );
}
