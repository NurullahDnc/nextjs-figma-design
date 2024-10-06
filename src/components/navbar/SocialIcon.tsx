import React from "react";
import instagram from "@/app/assets/instagram.svg";
import facebook from "@/app/assets/facebook.svg";
import twitter from "@/app/assets/twitter.svg";
import youtube from "@/app/assets/youtube.svg";
import Image from "next/image";


interface SocialIconData {
    title: string;  
    link: string;  
  }

export default function SocialIcon() {
  const data: SocialIconData[] = [
    { title: instagram, link: "#" },
    { title: facebook, link: "#" },
    { title: twitter, link: "#" },
    { title: youtube, link: "#" },
  ];

  return (
    <div className=" flex items-center gap-4 ">
      {data.map(( item, i ) => (
        <a href={item.link} key={i} >
          <Image src={item.title} alt={item.title} width={24} height={24} className="object-cover "  />
        </a>
      ))}
    </div>
  );
}
