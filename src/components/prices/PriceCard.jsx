import React, { useState } from 'react';
import ArrowIcon from '/images/arrow.png';
import VerticalArrow from '/images/verticalarrow.png';
import DropdownContent from './DropdownContent';

export default function PriceCard({ price }) {
  const [isOpen, setIsOpen] = useState(false);

  const sessions = [
    { count: 5, price: price.price * 5 * 0.9 },
    { count: 10, price: price.price * 10 * 0.8 },
    { count: 1, price: price.price, label: 'SINGLE SESSION:' },
  ];

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between bg-[#222222] rounded-[8.75rem] py-4 pr-4 pl-8 
        max-sm:py-2 max-sm:pl-6"
      >
        <span className="font-[700] uppercase text-xl text-[#C4C4C4] max-sm:text-sm">
          {price.name}
        </span>
        <img
          src={isOpen ? VerticalArrow : ArrowIcon}
          alt="Toggle"
          className="cursor-pointer transition-opacity duration-300 
          max-sm:w-[50px] max-sm:h-[50px] max-sm:rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <DropdownContent sessions={sessions} isOpen={isOpen} />
    </div>
  );
}
