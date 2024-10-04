import { Link, useLocation } from "react-router-dom";
import NavLinks from "../sharedComponents/NavLinks";
import { useEffect } from "react";
export const navsArray = [
  { title: "Home", linkTo: "/" },
  { title: "About Me", linkTo: "/stories" },
  { title: "Success Story", linkTo: "/stories" },
  { title: "Services", linkTo: "/services" },
  { title: "Contact", linkTo: "/contact" },
];
export default function Footer() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <footer className="bg-[#242424] md:pb-[40px] pb-[80px] pt-[4rem] px-[4rem] flex flex-col md:flex-row md:items-center  justify-between ">
        <Link className="flex gap-[0.8rem]  pb-[4.2rem]" to={"/"}>
          <img
            className="md:w-[8.8rem] transition-all duration-[1s] ease-in-out  md:h-[5.8rem] w-[7.4rem] h-[4.8rem]"
            src="/testLogo.svg"
            alt="textLogo"
          />

          <img
            className=" md:w-[5.2rem] transition-all duration-[1s] ease-in-out w-[4.1rem] h-[4rem] md:h-[5.8rem] lg:w-[7.4rem] lg:h-[4.8rem]"
            src="/locoIcon.svg"
            alt="logo"
          />
        </Link>
        <div>
          <div className="flex pb-[4.2rem] flex-col md:flex-row gap-[0.8rem] lg:gap-[4.1rem] text-[1.2rem] font-[400] text-[#C4C4C4]  transition-all duration-[1s] ease-in-out">
            {navsArray.map((item) => (
              <Link key={item.linkTo} to={item.linkTo}>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-[1rem] pb-[3rem] text-center font-[400] text-[#C4C4C4]">
              © 2024 Transform with Tuna. All rights reserved.
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:flex-row items-center gap-[24px]  transition-all duration-[1s] ease-in-out">
          <img
            className="cursor-pointer"
            src="/footerNavIcons/facebook.svg"
            alt="facebook"
          />
          <img
            className="cursor-pointer"
            src="/footerNavIcons/instagram.svg "
            alt="instagram"
          />
          <img
            className="cursor-pointer"
            src="/footerNavIcons/twitter.svg"
            alt="twitter"
          />
          <img className="cursor-pointer" src="/footerNavIcons/x.svg" alt="" />
        </div>
      </footer>

      <div className=" transition-all duration-[1s] ease-in-out w-full flex md:hidden  ">
        <NavLinks border={"top"} />
      </div>
    </>
  );
}
