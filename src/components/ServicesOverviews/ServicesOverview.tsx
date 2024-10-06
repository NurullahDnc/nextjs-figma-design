import React from "react";

type ItemProps = {
    title: string;
    description: string;
  };

  export default function ServicesOverview({ title, description }: ItemProps) {
    return (
    <div className=" ">
      <h2 className=" py-1 text-primary text-lg ">{title}</h2>
      <p className="text-black ">{description}</p>
    </div>
  );
}
