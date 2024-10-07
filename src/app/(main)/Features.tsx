import { featuresData } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16">
      {featuresData.map((item, i) => (
        <div
          key={i}
          className="bg-primary rounded-2xl p-2 space-y-2 text-white  "
        >
          <div className="flex justify-end ">
            <Image src={item.icon} alt={item.icon} width={80} height={80} />
          </div>
          <h3 className=" font-bold text-lg ">{item.title}</h3>
          <p className=" text-[15px] ">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
