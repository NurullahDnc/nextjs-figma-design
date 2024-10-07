import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Maps from "@/components/GoogleMap";
import Title from "@/components/Title";
import TitlePage from "@/components/TitlePage";
import React from "react";

const page = () => {
  return (
    <div>
      <TitlePage title="Our Contact" breadcrumb="Contact" />

      <div className=" w-[90%] mx-auto ">
        <Title title="Biz Nerdeyiz" />
        
        <ContactInfo />
        <Maps />

        <ContactForm />
      </div>
    </div>
  );
};

export default page;
