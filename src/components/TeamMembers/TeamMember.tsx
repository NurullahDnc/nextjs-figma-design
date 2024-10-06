import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface TeamMemberProps {
  team: {
    image: string;
    title: string;
    branch: string;
    Facebook: string;
    instagram: string;
    twitter: string;
  };
}

const TeamMember = ({ team }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center group">
      <Image
        src={team.image}
        alt={team.title}
        width={350}
        height={400}
        className="object-cover mb-4"
      />
      <h3 className="text-lg font-semibold uppercase ">{team.title}</h3>

      <p className="text-primary text-lg mb-2 ">{team.branch}</p>

      <div className="flex space-x-5 mb-3 ">
        <a href={team.Facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-primary" size={22} />
        </a>
        <a href={team.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-primary" size={22} />
        </a>
        <a href={team.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-primary" size={22} />
        </a>
      </div>

      <div className="h-1 w-full bg-transparent group-hover:bg-primary transition-all duration-300 " />
    </div>
  );
};

export default TeamMember;
