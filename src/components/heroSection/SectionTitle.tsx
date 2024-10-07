import React from "react";
import { Button } from "../ui/button";

export default function SectionTitle() {
  return (
    <div className=" p-0 sm:p-10 md:p-24 space-y-5 space-x-4 ">
      <p className=" text-primary text-2xl pl-4 ">Welcome to Dental Clinic</p>

      <h1 className="text-black font-bold text-[35px] md:text-[40px] leading-[45px]  ">
        Professional,Warm and friendly Dental care for you
      </h1>

      <p className=" text-gray text-lg  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
        et, lectus sit lorem id integer.
      </p>

      <Button className=" px-10 py-6 bg-primary text-white  ">
        Make Appointment
      </Button>
    </div>
  );
}
