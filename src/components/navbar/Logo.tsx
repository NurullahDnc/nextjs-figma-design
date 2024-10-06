import Image from "next/image";
import React from "react";
import Logoİmage from "@/app/assets/Logo.svg";
import Link from "next/link";

interface LogoProps {
  logo?: string;
}

export default function Logo({ logo }: LogoProps) {
  return (
    <div className=" cursor-pointer">
      <Link href="/" aria-label="logo">
        <Image
          src={logo ? logo : Logoİmage}
          alt="logo"
          className="object-cover"
          width={145}
          height={85}
          priority
        />
      </Link>
    </div>
  );
}
