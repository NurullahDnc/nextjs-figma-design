import Image from "next/image";
import React from "react";
import bgservices from "@/app/assets/bgservices.svg";
import ServicesOverviews from "@/components/ServicesOverviews/ServicesOverviews";

const ServicesOverview = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center mt-[290px] md:mt-16 relative ">
      <div className=" opacity-0 md:opacity-100 ">
        <Image
          src={bgservices}
          alt="bgservices"
          width={500}
          height={500}
          className=" "
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <ServicesOverviews />
      </div>
    </div>
  );
};

export default ServicesOverview;
