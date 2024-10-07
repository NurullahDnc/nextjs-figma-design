import React from "react";
import Image from "next/image";

interface InfoItemProps {
  icon: string;
  title: string;
  description: string;
  email? : string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description, email }) => {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <Image src={icon} alt={title} />
      <h2 className="text-2xl text-black font-semibold">{title}</h2>
      <p className="text-gray ">{description}</p>
      <p className="text-gray ">{email} </p>
    </div>
  );
};

export default InfoItem;
