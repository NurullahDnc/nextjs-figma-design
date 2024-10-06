import React from 'react'

const FooterContact = () => {
  return (
    <div className=" space-y-3 ">
            <h2 className="text-2xl">Contact Us</h2>

      <div className="">
        <h3 className="font-semibold text-xl">Business Hours:</h3>
        <ol className="list-decimal text-[15px] leading-relaxed opacity-90 ">
          <li> Monday to Saturday: 9:30 am - 4:30 pm</li>
        </ol>
      </div>

      <div className="">
        <h3 className="font-semibold text-xl">Address:</h3>
        <ol className="list-decimal text-[15px] leading-relaxed opacity-90 ">
          <li> A-67 south Ex Delhi-11002</li>
        </ol>
      </div>

      <div className="">
        <h3 className="font-semibold text-xl">Email:</h3>
        <ol className="list-decimal text-[15px] leading-relaxed opacity-90 ">
          <li>nurullah.dinc.156@gmail.com</li>
        </ol>
      </div>


      <div className="">
        <h3 className="font-semibold text-xl">phone:</h3>
        <ol className="list-decimal text-[15px] leading-relaxed opacity-90 ">
          <li>1800 - 458495-4455</li>
        </ol>
      </div>

       
    </div>
  )
}

export default FooterContact
