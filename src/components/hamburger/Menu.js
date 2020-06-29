import * as React from "react";
import { motion } from "framer-motion";
import Navigation from "../navigation";

const variants = {
  open: {
    display: "block",
  },
  closed: {
    display: "none",
  },
};

export const Menu = () => (
  <motion.ul variants={variants}>
    <Navigation />
  </motion.ul>
);

export default Menu;
