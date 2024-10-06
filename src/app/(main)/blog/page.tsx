"use client"
import React, { Suspense } from "react";
import BlogDetail from "@/components/blog/BlogDetail";
import Blogs from "@/components/blog/Blogs";
import TitlePage from "@/components/TitlePage";
import { cartData } from "@/lib/data";
import { useSearchParams } from 'next/navigation';

const BlogContent = () => {
    const searchParams = useSearchParams();
    const postId = searchParams.get('postId');
    const findBlog = cartData.filter((item) => item.id === postId);

    return (
      <>
        {findBlog.map((item, i) => (
          <div key={i}>
            <BlogDetail
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
        <Blogs />
      </>
    );
};

const page = () => {
  return (
    <div>
      <TitlePage title="Blog" breadcrumb="Our Blog" />
      <div className="w-[90%] mx-auto mt-16 mb-7">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
