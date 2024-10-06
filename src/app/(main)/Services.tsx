import Cart from "@/components/Cart";
import MoreButton from "@/components/MoreButton ";
import Title from "@/components/Title";
import { cartData } from "@/lib/data";
import React from "react";

export default function Services() {
  return (
    <div className="w-[90%] mx-auto mt-80 sm:mt-20 ">
      <Title
        title="Our Umbrella of Services"
        description="Pain free procedures in dentistry"
      />

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-7 ">
        {cartData.slice(0, 8).map((item, i) => (
          <div
            key={i}
            className=" hover:scale-105 transition-all cursor-pointer  "
          >
            <Cart
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        {cartData.length > 8 && <MoreButton href="/services" />}
      </div>
    </div>
  );
}
