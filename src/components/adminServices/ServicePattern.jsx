import ArrowIcon from "/images/arrow.png";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
export default function ServicePattern() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#222] flex justify-between items-center  text-[#C4C4C4] text-[1.4rem] font-[700] rounded-[2rem] py-[10px] px-[24px] ">
        <div className="flex flex-col gap-[20px] items-start">
          <p className="md:text-[20px] text-[14px] font-[700]">
            private personal training
          </p>
          <div className={`${isOpen ? "flex flex-col pb-[10px]" : "hidden"}`}>
            <div className="flex items-center gap-[5px]">
              <div className="bg-[white] w-[8px] h-[8px] rounded-full"></div>
              <p className="text-[white] ">Price</p>
            </div>

            <div>
              <ul className="text-[#ABABAB] md:text-[1.8rem] text-[1.5rem] font-[400]">
                <li>Single Session One-on-one training session (60 minutes)</li>
                <li>5-Session Package5 one-on-one training sessions</li>
                <li>10-Session Package10 one-on-one training sessions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <img
            src={ArrowIcon}
            alt={isOpen ? "Collapse sessions" : "Expand sessions"}
            className="cursor-pointer md:w-[50px] md:h-[50px] w-[3rem] h-[3rem] transition-transform duration-300 transform"
            onClick={() => setIsOpen(!isOpen)}
            style={{ transform: isOpen ? "rotate(-60deg)" : "rotate(0deg)" }}
            aria-expanded={isOpen}
          />
          <button
            className={`${
              isOpen ? "flex" : "hidden"
            } bg-[#D7FD44]  transition duration-1000 ease-in-out md:w-[50px] md:h-[50px] w-[3rem] h-[3rem]  items-center justify-center rounded-full`}
          >
            <img src="/Frame.svg" alt="edit" />
          </button>
          <button
            className={`${
              isOpen ? "flex" : "hidden"
            } bg-[#D7FD44]  transition duration-1000 ease-in-out md:w-[50px] md:h-[50px] w-[3rem] h-[3rem]  items-center justify-center rounded-full`}
          >
            <MdDelete color="black" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
