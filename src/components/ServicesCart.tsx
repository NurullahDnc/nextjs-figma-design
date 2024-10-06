import Image from "next/image";
import React from "react";

export interface CartProps {
  image: string;
  title: string;
  description: string;
  rotate?: boolean
}

export default function ServicesCart({
  image,
  title,
  description,
  rotate,
}: CartProps) {
  return (
    <div className=" md:flex items-center py-3 ">
      <div className=" w-1/1 md:w-1/2  ">
        <Image
          src={image}
          alt={title}
          className={`object-cover rounded-lg ${rotate && "-rotate-3"} `}
          width={600}
        />
      </div>
      <div className=" w-1/1 md:w-1/2 space-y-5 mt-7 md:mt-0 ">
        <h2 className=" text-black text-3xl font-semibold ">{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}
