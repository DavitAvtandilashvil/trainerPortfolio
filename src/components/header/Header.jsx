import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex ">
      <Link className="flex gap-[1.6rem] mr-auto" to={"/"}>
        <img
          className="w-[8.8rem] h-[5.8rem]"
          src="/testLogo.svg"
          alt="textLogo"
        />

        <img
          className="hidden md:flex md:w-[5.2rem] md:h-[5.8rem] w-[7.4rem] h-[4.8rem]"
          src="/locoIcon.svg"
          alt="logo"
        />
      </Link>

      <div className="flex border border-[#4D4D4D] bg-[#222222] py-[10px] px-[20px] items-center rounded-[20rem] gap-[68px] text-[1.6rem] font-[400] text-[white]">
        <NavLink
          className={({ isActive }) =>
            `rounded-[48px] font-[400] py-[13px] transition-all duration-[1s]  easy-in-out ${
              isActive &&
              "lg:px-[3.4rem] px-[4.8rem] text-[black] font-[700] bg-[#D7FD44] "
            }`
          }
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-[48px] font-[400] transition-all duration-[1s] py-[13px]  easy-in-out ${
              isActive &&
              "lg:px-[3.4rem] px-[4.8rem]  text-[black] font-[700] bg-[#D7FD44] "
            }`
          }
          to={"/stories"}
        >
          {" "}
          STORIES
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-[48px] font-[400] transition-all duration-[1s]  py-[13px] easy-in-out ${
              isActive &&
              "lg:px-[3.4rem] px-[4.8rem]  text-[black] font-[700] bg-[#D7FD44] "
            }`
          }
          to={"/services"}
        >
          SERVICES
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-[48px] font-[400] transition-all duration-[1s] py-[13px] easy-in-out  ${
              isActive &&
              "lg:px-[3.4rem] px-[4.8rem]  text-[black] font-[700] bg-[#D7FD44]"
            }`
          }
          to={"/contact"}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}
