/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion } from "framer-motion";

import { MenuToggle } from "./Toggle";
import { Link } from "react-router-dom";

const modalVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

export const Modal = ({ toggle, isOpen }) => {
  const navsArray = [
    { title: "Home", linkTo: "/" },

    { title: "Success Story", linkTo: "/stories" },
    { title: "Services", linkTo: "/services" },
    { title: "Contact", linkTo: "/contact" },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  console.log(navsArray);
  return (
    <motion.div
      className="fixed md:hidden top-0 right-0 w-full h-full bg-[#121212] flex  items-center justify-center z-[50]"
      variants={modalVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={toggle}
    >
      <div className="absolute top-[15px] right-[24px]">
        <MenuToggle isOpen={isOpen} />
      </div>

      <div className="text-[white]" onClick={(e) => e.stopPropagation()}>
        <ul className="text-[24px] flex flex-col font-[700] gap-[20px] text-center">
          {navsArray.map((item) => (
            <Link
              key={item.title}
              to={item.linkTo}
              onClick={toggle}
              className="cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
