"use client";

import { useState } from "react";
import Image from "next/image";
import hamburgerMenu from "@/app/assets/hamburger-menu.png";
import SocialIcon from "./SocialIcon";

const items = [
  { title: "About", link: "/about" },
  { title: "Doctor", link: "/doctor" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

export default function MenuItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex">
        <ol className="flex gap-2    text-[#0F1320] text-[14px] md:gap-[30px]">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative after:content-[''] after:absolute font-semibold after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Hamburger Menüsü */}
      <div className="md:hidden">
        <Image
          src={hamburgerMenu}
          alt="hamburger-menu"
          className="text-[#0F1320] cursor-pointer"
          width={24}
          height={24}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Açılan Menü */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md z-10">
          <ol className="flex flex-col text-[#0F1320] text-[14px] p-4">
            {items.map((item, index) => (
              <li key={index} className="py-2">
                <a href={item.link} className="block">
                  {item.title}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <SocialIcon />
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
