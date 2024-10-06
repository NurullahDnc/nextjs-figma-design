import { servicesData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import ServicesOverview from "./ServicesOverview";

const ServicesOverviews = () => {
  return (
    <div className=" md:flex items-center justify-center  ">
      <div className=" md:w-1/2 my-8 mt-7 mr-5 ">
        <Image
          src={servicesData.servicesImage}
          alt="bgservices"
          width={650}
          height={500}
          className="object-cover -rotate-6 rounded-lg  "
        />
      </div>

      <div className=" md:w-1/2  space-y-5 ">
      
        <h2 className=" font-bold text-2xl uppercase ">
          {servicesData.servicesTitle}
        </h2>

        {servicesData.services.map((item, i) => (
          <ServicesOverview
            key={i}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesOverviews;
