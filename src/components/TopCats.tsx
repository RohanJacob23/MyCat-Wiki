import Image from "next/image";
import React from "react";

export default function TopCats({
  id,
  url,
  name,
  description,
}: {
  id: string;
  url: string;
  name: string;
  description: string;
}) {
  return (
    <div
      key={id}
      className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-11"
    >
      <Image
        src={url}
        alt="cat-image"
        width={400}
        height={400}
        className="w-40 h-40 rounded-3xl object-cover"
      />

      <div className="flex flex-col space-y-4 md:space-y-6">
        <h1 className="text-2xl md:text-4xl font-semibold">{name}</h1>
        <p className="font-medium text-lg">{description}</p>
      </div>
    </div>
  );
}
