import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <section>
      <div className="relative w-32 h-11 mt-6 md:mt-7">
        <Image src="/logo/CatwikiLogo.svg" alt="cat-logo" fill />
      </div>
    </section>
  );
}
