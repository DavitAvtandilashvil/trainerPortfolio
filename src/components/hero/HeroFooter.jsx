import React from 'react';
import StarImage from "/images/star.png";

export default function HeroFooter() {
  return (
    <div
      className="flex items-center justify-between pl-[8rem] 
    pr-[8rem] py-4 bg-[#D7FD44] max-lg:pl-[5rem] 
    max-lg:pr-[5rem] max-sm:pl-[2.5rem] max-sm:pr-[2.5rem] max-sm:py-1"
    >
      <img className="max-sm:hidden" src={StarImage} alt="" />

      <h2
        className="font-[800] text-3xl text-black w-[7.125rem] 
      max-sm:w-[9rem] max-sm:text-xs max-sm:text-center"
      >
        200 + <span className="font-[500] text-sm">Happy Customers</span>
      </h2>

      <h2
        className="font-[800] text-3xl text-black w-[11.4rem] 
      max-sm:w-[9rem] max-sm:text-xs max-sm:text-center"
      >
        3 + <span className="font-[500] text-sm">Years Of Training Experience</span>
      </h2>

      <h2
        className="font-[800] text-3xl text-black w-[8.75rem] 
      max-sm:w-[9rem] max-sm:text-xs max-sm:text-center"
      >
        98 % <span className="font-[500] text-sm">Customer Satisfaction</span>
      </h2>

      <img className="max-sm:hidden" src={StarImage} alt="" />
    </div>
  );
}
