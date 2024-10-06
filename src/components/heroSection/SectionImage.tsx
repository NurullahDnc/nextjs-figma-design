import Image from "next/image";
import React from "react";
import BgPurpleCircle from "@/app/assets/BgPurpleCircle.svg";
import sectionImage from "@/app/assets/sectionImage.svg";

const SectionImage = () => {
  return (
    <div className="relative w-full overflow-hidden md:overflow-visible  ">
      <Image
        src={BgPurpleCircle}
        alt="Arka plan dairesi"
        className="absolute bottom-16 md:bottom-10 left-36  "
        width={800}
        height={800}
        objectFit="cover"
      />

      <div className="relative z-10 flex items-center top-2 md:top-0 -right-5 md:right-16 h-full">
        <Image
          src={sectionImage}
          alt="Ana bölüm resmi"
          className="object-contain "  
        />
      </div>
    </div>
  );
};

export default SectionImage;
