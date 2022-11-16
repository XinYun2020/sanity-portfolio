import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="info"
      >
        <div className="">
          <div className="badge">
            <span>👋🏻</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
