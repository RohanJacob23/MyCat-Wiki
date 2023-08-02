import { Mystery_Quest } from "next/font/google";
import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

const mystery_quest = Mystery_Quest({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-5 md:px-24 text-white">
      {/* Header */}
      <Header />

      {/* Hero section */}
      <Hero font={mystery_quest.className} />

      {/* second section */}
      <Content />

      {/* footer section */}
      <Footer font={mystery_quest.className} />
    </main>
  );
}
