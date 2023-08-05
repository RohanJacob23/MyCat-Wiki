import React from "react";

export default function RatingLevel({ rating }: { rating: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`${
            i + 1 <= rating ? "bg-[#544439]" : "bg-[#E0E0E0]"
          } rounded-lg w-[3.75rem] h-3`}
        ></div>
      ))}
    </>
  );
}
