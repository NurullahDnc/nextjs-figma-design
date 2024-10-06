

import React from 'react'

interface TitleProps {
    title: string;
    description?: string;
  
}

export default function Title({title, description} :  TitleProps) {
  return (
    <div className=' text-center space-y-2 my-10 '>

        <h2 className='text-3xl font-bold '>
            {title}
        </h2>

        <p className=' text-lg '>
            {description}
        </p>
      
    </div>
  )
}
