import React from "react";
import Logo from "../navbar/Logo";
import whiteLogo from "@/app/assets/whiteLogo.svg";

const FooterAbout = () => {
  return (
    <div className="space-y-6">
      <Logo logo={whiteLogo} />

      <div className="space-y-3 ">
        <h2 className="text-2xl ">About Us</h2>
        <p className="text-sm leading-relaxed opacity-90">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default FooterAbout;
