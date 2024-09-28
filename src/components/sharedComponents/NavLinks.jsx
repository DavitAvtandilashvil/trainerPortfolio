/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavLinks({ rounded, border }) {
  const navsArray = [
    { title: "HOME", linkTo: "/" },
    { title: "STORIES", linkTo: "/stories" },
    { title: "SERVICES", linkTo: "/services" },
    { title: "CONTACT", linkTo: "/contact" },
  ];
  console.log(rounded);
  return (
    <div
      style={{
        borderRadius: rounded,
        border: border === "top" ? "none" : "1px solid #4D4D4D",
        borderTop: border === "top" ? "1px solid #4D4D4D" : "1px solid #4D4D4D",
      }}
      className="flex w-full  transition-all duration-75 ease-in-out justify-around border-[#4D4D4D] bg-[#222222] py-[10px] px-[20px] items-center gap-[5px]  lg:gap-[6.8rem] md:gap-[15px] md:text-[1.6rem] text-[1.4rem] font-[400] text-[white]"
    >
      {navsArray.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `font-[400]     rounded-[48px]  transition-all duration-[1s] ease-in-out ${
              isActive
                ? "lg:px-[3.4rem]  py-[13px]   px-[2rem] text-[black] font-[700] bg-[#D7FD44]"
                : " py-[13px] px-[0.5rem]"
            }`
          }
          key={item.linkTo}
          to={item.linkTo}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
