import { Mystery_Quest } from "next/font/google";
import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import { Breeds, Images } from "@/types/types";

const mystery_quest = Mystery_Quest({ weight: ["400"], subsets: ["latin"] });

async function fetchBreeds(): Promise<Breeds[]> {
  // need to change the revalidate opition to 3600
  const res = await fetch("https://api.thecatapi.com/v1/breeds");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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

async function fetchSavannahCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=sava",
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

async function fetchNorwegianCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=norw",
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

async function fetchSelkrikCatImage(): Promise<Images[]> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=srex",
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
  const breeds = await fetchBreeds();
  const bengalCatImage = await fetchBengalCatImage();
  const savannahCatImage = await fetchSavannahCatImage();
  const norwegianCatImage = await fetchNorwegianCatImage();
  const selkrikCatImage = await fetchSelkrikCatImage();
  const allFourImages = [
    ...bengalCatImage,
    ...savannahCatImage,
    ...norwegianCatImage,
    ...selkrikCatImage,
  ];
  return (
    <main className="px-5 md:px-24">
      {/* Header */}
      <Header />

      {/* Hero section */}
      <Hero
        font={mystery_quest.className}
        breeds={breeds}
        allFourImages={allFourImages}
      />

      {/* second section */}
      <Content />

      {/* footer section */}
      <Footer font={mystery_quest.className} />
    </main>
  );
}
