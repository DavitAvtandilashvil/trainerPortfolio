import React, { useState } from 'react';
import ArrowIcon from '/images/arrow.png';
import VerticalArrow from '/images/verticalarrow.png';
import DropdownContent from './DropdownContent';

export default function PriceCard({ price }) {
  const [isOpen, setIsOpen] = useState(false);

  const sessions =
    price.name === 'private personal training'
      ? [
          { count: 5, price: price.sessions_five, label: '5 Sessions:' },
          { count: 10, price: price.sessions_ten, label: '10 Sessions:' },
          { count: 1, price: price.sessions_single, label: 'Single Session:' },
        ]
      : price.name === 'Group Training (Up to 6 people)'
      ? [
          { count: 5, price: price.sessions_five, label: '5 Sessions:' },
          { count: 10, price: price.sessions_ten, label: '10 Sessions:' },
          {
            count: 1,
            price: price.sessions_single,
            label: 'Single Session per person:',
          },
        ]
      : price.name === 'Online Personal Training'
      ? [
          { count: 5, price: price.sessions_five, label: '5 Sessions:' },
          { count: 10, price: price.sessions_ten, label: '10 Sessions:' },
          {
            count: 1,
            price: price.sessions_single,
            label: 'Monthly Plan per month:',
          },
        ]
      : price.name === 'Outdoor Running (Up to 4 people)'
      ? [
          { count: 5, price: price.sessions_five, label: '5 Sessions:' },
          { count: 10, price: price.sessions_ten, label: '10 Sessions:' },
          { count: 1, price: price.sessions_single, label: 'Single Session:' },
        ]
      : price.name === 'Nutrition and Meal Plans'
      ? [
          {
            count: 4,
            price: price.sessions_five,
            label: 'Basic Meal Plan (4 Weeks):',
          },
          {
            count: 8,
            price: price.sessions_ten,
            label: 'Comprehensive Meal Plan (8 Weeks):',
          },
          {
            count: 0,
            price: price.sessions_single,
            label: 'Custom Meal Plan:',
          },
        ]
      : price.name === 'Weight Loss Program'
      ? [
          { count: 4, price: price.sessions_five, label: '4 Weeks Plan:' },
          { count: 8, price: price.sessions_ten, label: '8 Weeks Plan:' },
          { count: 12, price: price.sessions_single, label: '12 Weeks Plan:' },
        ]
      : [];

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
          alt={isOpen ? 'Collapse sessions' : 'Expand sessions'}
          className="cursor-pointer transition-opacity duration-300 
          max-sm:w-[50px] max-sm:h-[50px] max-sm:rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <DropdownContent sessions={sessions} isOpen={isOpen} />
    </div>
  );
}
