/* eslint-disable react/prop-types */
import { useRef, useState, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLinks({ rounded, border, navsArray }) {
  // const navsArray = [
  //   { title: "HOME", linkTo: "/" },
  //   { title: "STORIES", linkTo: "/stories" },
  //   { title: "SERVICES", linkTo: "/services" },
  //   { title: "CONTACT", linkTo: "/contact" },
  // ];

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const refs = useRef([]);
  const location = useLocation();

  const getLeftOffset = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 410 && screenWidth > 0) {
      return 17;
    } else if (screenWidth >= 411 && screenWidth <= 768) {
      return 8;
    } else {
      return 18;
    }
  };

  const getWidthAdjustment = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 410 && screenWidth > 0) {
      return 5;
    } else if (screenWidth >= 411 && screenWidth <= 768) {
      return 25;
    } else {
      return 0;
    }
  };

  const updatePosition = (activeIndex) => {
    if (refs.current[activeIndex]) {
      const { width, left } = refs.current[activeIndex].getBoundingClientRect();
      const offset = getLeftOffset();
      const widthAdjustment = getWidthAdjustment();
      setPosition({
        width: width + widthAdjustment,
        opacity: 1,
        left: left - refs.current[0].getBoundingClientRect().left + offset,
      });
    }
  };

  useLayoutEffect(() => {
    const activeIndex = navsArray.findIndex(
      (nav) => nav.linkTo === location.pathname
    );

    if (refs.current[0]) {
      updatePosition(activeIndex);
    }

    const handleResize = () => {
      updatePosition(activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  const handleClick = (index) => {
    updatePosition(index);
  };

  return (
    <div
      style={{
        borderRadius: rounded,
        border: border === "top" ? "none" : "1px solid #4D4D4D",
        borderTop: border === "top" ? "1px solid #4D4D4D" : "1px solid #4D4D4D",
      }}
      className="flex w-full md:relative  fixed bottom-0 z-10 transition-all duration-75 ease-in-out  justify-between border-[#4D4D4D] bg-[#222222] md:py-[10px] py-[20px] px-[20px] items-center md:text-[1.6rem] text-[1.2rem] font-[400] text-[white]"
    >
      {navsArray.map((item, index) => {
        return (
          <NavLink
            ref={(el) => (refs.current[index] = el)}
            onClick={() => handleClick(index)}
            className={({ isActive }) =>
              `rounded-[48px] relative z-10 transition-colors duration-200 ease-in-out lg:px-[3.4rem] md:py-[13px] py-[1rem] md:px-[2rem] px-[1rem] font-[700] ${
                isActive ? "text-black" : "text-white"
              }`
            }
            key={index}
            to={item.linkTo}
          >
            {item.title}
          </NavLink>
        );
      })}
      <motion.div
        animate={{
          left: position.left,
          width: position.width,
          opacity: position.opacity,
        }}
        transition={{ duration: 0.2, type: "tween" }}
        className="bg-[#D7FD44] absolute z-0 h-[48px] rounded-full "
      />
    </div>
  );
}
