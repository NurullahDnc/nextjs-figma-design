import SectionImage from "@/components/heroSection/SectionImage";
import SectionTitle from "@/components/heroSection/SectionTitle";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" md:flex  md:h-[71vh]   ">
      <div className="flex items-center justify-center flex-1 md:pb-0 my-4 ">
        <SectionTitle />
      </div>

      <div className="flex-1 flex items-center justify-center ">
        <SectionImage />
      </div>
    </div>
  );
}
