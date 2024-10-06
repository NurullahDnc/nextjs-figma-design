import React from "react";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface MoreButtonProps {
  onClick?: () => void;
  label?: string;
  href: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({
  onClick,
  label = "Daha Fazla",
  href,
}) => {
  return (
    <div className="w-full mx-auto flex justify-center my-2 text-primary">
      <Link href={href}>
        <Button
          onClick={onClick}
          variant="ghost"
          className="px-7 py-6 text-[17px]  flex items-center justify-center gap-2  hover:text-primary hover:bg-white "
        >
          {label}
          <FaArrowRightLong size={22} />
        </Button>
      </Link>
    </div>
  );
};

export default MoreButton;
