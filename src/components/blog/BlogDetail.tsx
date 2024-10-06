import Image from "next/image";
import React from "react";

interface CartProps {
  image: string;
  title?: string;
  description?: string;
}

const BlogDetail = ({ image, title, description }: CartProps) => {
  return (
    <div className=" md:flex items-center  ">
      <div className=" w-full md:w-1/2 relative h-[200px] md:h-[350px]">
        <Image
          src={image}
          alt="services"
          layout="fill" // Resmi konteynere doldur
          objectFit="cover" // Resmin tam uyumlu olması için
          className="rounded-md"
        />
      </div>
      <div className=" w-full md:w-3/4 p-0 md:p-12 ">
        <h2 className="font-semibold md:font-bold text-[20px] md:text-2xl py-2 ">
          {title}
        </h2>

        <p className=" text-[14px] md:text-[15px] ">{description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
