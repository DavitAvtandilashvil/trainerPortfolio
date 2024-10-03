import React from 'react';
import ArrowIcon from '/images/arrow.png';

export default function () {
  const prices = [
    "private personal training",
    "Group Training (Up to 6 people)",
    "Online Personal Training",
    "Outdoor Running (Up to 4 people)",
    "Nutrition and Meal Plans",
    "Weight Loss Program",
  ];

  return (
    <div className="pt-0 px-20 pb-[45.625rem] max-lg:pb-[31.562rem] max-sm:pb-[10.5rem] max-sm:px-10">
      <h2
        className="font-[700] uppercase text-3xl text-[#737373] mb-10 
      max-lg:text-2xl max-lg:mb-6 max-sm:text-sm"
      >
        prices
      </h2>
      <div className="flex flex-col gap-5 max-sm:gap-4">
        {prices.map((price, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#222222] 
            rounded-[8.75rem] py-4 pr-4 pl-8 max-sm:py-2 max-sm:pl-6"
          >
            <span className="font-[700] uppercase text-xl text-[#C4C4C4] max-sm:text-sm">
              {price}
            </span>
            <img src={ArrowIcon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
