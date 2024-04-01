import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
      >
        <ul>
          <li>Home</li>
          <li>Core Team</li>
          <li>Events</li>
          <li>Vote</li>
        </ul>
      </motion.nav>
  );
};

export default Navbar;
