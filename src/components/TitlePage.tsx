import Link from "next/link";
import React from "react";

interface TitlePageProps {
  title: string;
  breadcrumb: string;
}

const TitlePage = ({ title, breadcrumb }: TitlePageProps) => {
  return (
    <div className="flex justify-center items-center flex-col py-5 w-full bg-primary text-white ">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-[16px] text-black ">
        {" "}
        <Link href={`/`}>Home /</Link> {breadcrumb}
      </p>
    </div>
  );
};

export default TitlePage;
