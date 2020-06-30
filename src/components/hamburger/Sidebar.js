import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./Dimension";
import Ham from "./Ham";
import Menu from "./Menu";
import ScrollLock from "react-scrolllock";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80vw 40px)`,
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 80vw 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      {/* <ScrollLock isActive={isOpen} accountForScrollbars="false"></ScrollLock> */}
      <motion.div
        className="sidebar-nav"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <Ham toggle={() => toggleOpen()} />

        <motion.div className="sidebar-bg" variants={sidebar}>
          <Menu />
        </motion.div>
      </motion.div>
    </>
  );
};
export default Sidebar;
