import React from "react";
import RatingLevel from "../RatingLevel";

interface CatDescriptionProps {
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

export default function CatDescription({
  name,
  description,
  temperament,
  origin,
  life_span,
  adaptability,
  affection_level,
  child_friendly,
  grooming,
  intelligence,
  health_issues,
  social_needs,
  stranger_friendly,
}: CatDescriptionProps) {
  return (
    <div className="flex flex-col lg:w-1/2 mt-8 lg:mt-0">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <h1 className="font-semibold text-3xl md:text-4xl">{name}</h1>
        <p className="text-lg font-medium">{description}</p>
        <p className="text-black font-medium text-base">
          <span className="font-bold">Temperament: </span>
          {temperament}
        </p>
        <p className="text-black font-medium text-base">
          <span className="font-bold">Origin: </span>
          {origin}
        </p>
        <p className="text-black font-medium text-base">
          <span className="font-bold">Life Span: </span>
          {life_span}
        </p>
      </div>

      {/* cat features */}
      <div className="flex flex-col mt-8 space-y-8">
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Adaptability:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={adaptability} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Affection level:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={affection_level} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Child Friendly:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={child_friendly} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Grooming:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={grooming} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Intelligence:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={intelligence} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Health issues:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={health_issues} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Social needs:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={social_needs} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
          <p className="text-black font-bold text-base">Stranger friendly:</p>
          <div className="flex items-center space-x-2 lg:ml-8">
            <RatingLevel rating={stranger_friendly} />
          </div>
        </div>
      </div>
    </div>
  );
}
