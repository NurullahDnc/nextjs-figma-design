import Image from "next/image";
import React from "react";
import servicesImage1 from "@/app/assets/servicesImage1.svg";

const SectionImage = () => {
  return (
    <div className="flex items-center justify-center mt-5 p-5">
      <Image
        src={servicesImage1}
        alt="Ana bölüm resmi"
        className="object-cover -rotate-3 rounded-lg"
        width={700}
      />
    </div>
  );
};

export default SectionImage;
