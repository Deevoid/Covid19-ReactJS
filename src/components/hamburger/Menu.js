import * as React from "react";
import { motion } from "framer-motion";
import ListMenu from "./ListMenu";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
  closed: {
    display: "none",

    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Menu = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <ListMenu i={i} key={i} />
    ))}
  </motion.ul>
);
const itemIds = [0, 1, 2, 3, 4];

export default Menu;
