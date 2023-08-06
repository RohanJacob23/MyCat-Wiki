import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Images } from "@/types/types";
import { Allison, Mystery_Quest } from "next/font/google";
import Image from "next/image";
import React from "react";

const mystery_quest = Mystery_Quest({ weight: ["400"], subsets: ["latin"] });

async function fetchBengalCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng",
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

async function fetchCartreuxCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=char",
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

async function fetchKhaoManeeCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=khao",
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

export default async function page() {
  const bengal = await fetchBengalCatImage();
  const cartreux = await fetchCartreuxCatImage();
  const khaoManee = await fetchKhaoManeeCatImage();
  const allImages = [...bengal, ...cartreux, ...khaoManee];
  console.log(allImages);
  return (
    <main className="flex flex-col px-5 md:px-24 min-h-screen">
      <Header />

      <section className="text-[#291507] grow mt-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Top 10 most searched breeds
        </h1>

        <div className="flex flex-col space-y-14 mt-14 mb-24">
          {allImages.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-11"
            >
              <Image
                src={cat.url}
                alt="cat-image"
                width={400}
                height={400}
                className="w-40 h-40 rounded-3xl object-cover"
              />

              <div className="flex flex-col space-y-4 md:space-y-6">
                <h1 className="text-2xl md:text-4xl font-semibold">
                  {cat.breeds[0].name}
                </h1>
                <p className="font-medium text-lg">
                  {cat.breeds[0].description}
                </p>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-11">
            <Image
              src="/cat-images/image1.png"
              alt="cat-image"
              width={400}
              height={400}
              className="w-40 h-40 rounded-3xl object-cover"
            />

            <div className="flex flex-col space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl font-semibold">Bengal</h1>
              <p className="font-medium text-lg">
                Bengals are a lot of fun to live with, but they're definitely
                not the cat for everyone, or for first-time cat owners.
                Extremely intelligent, curious and active, they demand a lot of
                interaction and woe betide the owner who doesn't provide it.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-11">
            <Image
              src="/cat-images/image1.png"
              alt="cat-image"
              width={400}
              height={400}
              className="w-40 h-40 rounded-3xl object-cover"
            />

            <div className="flex flex-col space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl font-semibold">Bengal</h1>
              <p className="font-medium text-lg">
                Bengals are a lot of fun to live with, but they're definitely
                not the cat for everyone, or for first-time cat owners.
                Extremely intelligent, curious and active, they demand a lot of
                interaction and woe betide the owner who doesn't provide it.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <Footer font={mystery_quest.className} />
    </main>
  );
}
