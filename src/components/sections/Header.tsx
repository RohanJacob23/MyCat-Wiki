import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <section className="pt-6 md:pt-7">
      <div className="relative w-32 h-11">
        <Image src="/logo/CatwikiLogo.svg" alt="cat-logo" fill />
      </div>
    </section>
  );
}
