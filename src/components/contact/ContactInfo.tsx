import React from "react";

import locationIcon from "@/app/assets/locationIcon.svg";
import phoneIcon from "@/app/assets/phoneIcon.svg";
import timeIcon from "@/app/assets/timeIcon.svg";
import InfoItem from "../heroSection/InfoItem ";

const ContactInfo = () => {
  const data = [
    {
        address: "A-655 Karol bagh, Near Delhi 93 ",
      email: "nurullah.dinc.156@gmail.com",
      phone: " 520 000 000",
      hours: "Monday – Friday : 09:00 – 20:00",
    },
  ];

  return (
    <div className=" w-5/6  mx-auto grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 ">
       <InfoItem icon={locationIcon} title="Address" description={data[0].address} />
      <InfoItem icon={phoneIcon} title="Phone" description={data[0].phone} email={data[0].email} />
      <InfoItem icon={timeIcon} title="Open Hour" description={data[0].hours} />
    </div>
  );
};

export default ContactInfo;
