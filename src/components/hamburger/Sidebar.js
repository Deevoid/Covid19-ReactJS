import React from "react";
import { motion, useCycle } from "framer-motion";
import Ham from "./Ham";
import Menu from "./Menu";

const sidebar = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 100,
    },
  },
  closed: {
    x: 500,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div
      className="sidebar-nav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Ham toggle={() => toggleOpen()} />

      <motion.div className="sidebar-bg" variants={sidebar}>
        <Menu />
      </motion.div>
    </motion.div>
  );
};
export default Sidebar;
