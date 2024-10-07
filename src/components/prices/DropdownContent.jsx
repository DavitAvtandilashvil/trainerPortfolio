import React from 'react';
import IconCross from '/images/cross.png';

export default function DropdownContent({ sessions, isOpen }) {
  return (
    <div
      className={`flex items-center justify-between bg-[#4D4D4D] border 
          border-[#D7FD44] rounded-[8.75rem] py-[2.125rem] pr-4 pl-8 
          max-sm:flex-col max-sm:gap-1 max-sm:py-4 max-sm:px-6 max-sm:items-start
        ${
          isOpen
            ? 'my-4 opacity-100 max-sm:mt-4 max-sm:mb-0'
            : 'max-h-0 opacity-0'
        }`}
    >
      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 max-sm:p-0"
        >
          <div className="flex items-center gap-4 ">
            <img
              src={IconCross}
              alt=""
              className="max-sm:w-[0.875rem] max-sm:h-[0.875rem]"
            />
            <span className="text-base text-[#C4C4C4] uppercase max-sm:text-xs">
              {session.label || `${session.count} SESSIONS:`} $
              {Math.round(session.price)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
