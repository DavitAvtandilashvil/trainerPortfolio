/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 30%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="p-2 focus:outline-none ">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        d="M 2 4 L 20 4"
        variants={{
          closed: { d: "M 2 4 L 20 4" },
          open: { d: "M 2 4 L 20 20", transition: { duration: 0.2 } },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 11.5 L 20 11.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0, transition: { duration: 0.1 } },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 19 L 20 19"
        variants={{
          closed: { d: "M 2 19 L 20 19" },
          open: { d: "M 2 20 L 20 4", transition: { duration: 0.2 } },
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);
