import React from 'react';
import { usePrices } from '../../costumHooks/usePrices';
import PriceCard from './PriceCard';

export default function Prices() {
  const { prices, isLoading, error } = usePrices();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-[#7E7E7E]">Loading services...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-red-500">
          Error loading services: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0 px-20 pb-[45.625rem] max-lg:pb-[31.562rem] max-sm:pb-[10.5rem] max-sm:px-10">
      <h2
        className="font-[700] uppercase text-3xl text-[#737373] 
      mb-10 max-lg:text-2xl max-lg:mb-6 max-sm:text-sm"
      >
        prices
      </h2>
      <div className="flex flex-col max-sm:gap-4">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
}
