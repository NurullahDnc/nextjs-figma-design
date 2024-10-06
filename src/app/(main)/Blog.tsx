import Blogs from "@/components/blog/Blogs";
import MoreButton from "@/components/MoreButton ";
import { cartData } from "@/lib/data";
import React from "react";

const Blog = () => {
  return (
    <div className=" w-[90%] mx-auto  ">
      
      <Blogs />

      <div className="mt-5">
        {cartData.length > 8 && <MoreButton href="/blog" />}
      </div>
    </div>
  );
};

export default Blog;
