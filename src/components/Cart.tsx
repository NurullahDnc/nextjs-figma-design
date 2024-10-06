import TextClip from "@/lib/TextClip";
import Image from "next/image";
import React from "react";

interface CartProps {
  image: string;
  title?: string;
  description?: string;
}

export default function Cart({ image, title, description }: CartProps) {
  return (
    <div className="   ">
      <Image src={image} alt="services" className="rounded-md object-cover" />

      <h2 className="font-semibold md:font-bold text-14 md:text-[17px] py-2 " >
        <TextClip text={title} length={65} />
      </h2>

      <p className=" text-[12.5px] md:text-[15px] ">
        <TextClip text={description} length={170}  />
      </p>
    </div>
  );
}
