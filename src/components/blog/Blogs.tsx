import React from 'react'
import Title from '../Title'
import { cartData } from '@/lib/data'
import BlogCart from "@/components/BlogCart";

const Blogs = () => {
  return (
    <div>
      <Title
        title="Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
      />

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-7 ">
        {cartData.slice(0, 8).map((item, i) => (
          <div
            key={i}
            className=" hover:scale-105 transition-all"
          >
            <BlogCart
              image={item.image}
              title={item.title}
              description={item.description}
              link={`/blog?postId=${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
