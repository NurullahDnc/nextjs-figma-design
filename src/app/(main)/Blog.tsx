import Cart from "@/components/Cart";
import MoreButton from "@/components/MoreButton ";
import Title from "@/components/Title";
import { cartData } from "@/lib/data";
import React from "react";

const Blog = () => {
  return (
    <div className=" w-[90%] mx-auto  ">
      <Title
        title="Our Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
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
        {cartData.length > 8 && <MoreButton href="/blog" />}
      </div>
    </div>
  );
};

export default Blog;
