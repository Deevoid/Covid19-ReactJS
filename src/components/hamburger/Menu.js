import * as React from "react";
import { motion } from "framer-motion";
import ListMenu from "./ListMenu";
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
    {/* {itemIds.map((i) => (
      <ListMenu i={i} key={i} />
    ))} */}
  </motion.ul>
);
const itemIds = [0, 1, 2, 3, 4];

export default Menu;
