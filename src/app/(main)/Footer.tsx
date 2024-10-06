import FooterAbout from "@/components/footer/FooterAbout";
import FooterContact from "@/components/footer/FooterContact";
import FooterSocialMedia from "@/components/footer/FooterSocialMedia";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full px-5 md:px-20   py-11 bg-primary text-white mx-auto ">
      <div className="flex justify-center" >
        <FooterAbout />
      </div>

      <div className="flex md:justify-center " >
        <FooterContact />
      </div>

      <div className=" flex md:justify-center">
        <FooterSocialMedia />
      </div>

   
    </div>
  );
};

export default Footer;
