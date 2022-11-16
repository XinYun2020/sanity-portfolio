import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { images } from "../../src/constants/index";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div
      id="home"
      className="flex-1 w-screen h-screen flex-row h-screen lg:flex-col "
    >
      {/* <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-300 cover-full"></div> */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start"
      >
        <div className="flex flex-col pl-8 ">
          <div className="max-w-fit badge flex flex-row shadow-lg px-8 py-4 text-slate-700 rounded-lg">
            <span className="my-auto text-5xl">👋🏻</span>
            <div className="ml-5">
              <p className="text-start">Hello, I am</p>
              <h1 className="text-5xl font-semibold">Xinyun</h1>
            </div>
          </div>
          <div className="my-4"/>
          <div className="max-w-fit badge flex flex-col justify-end align-bottom shadow-lg px-8 py-4 text-slate-700 rounded-lg uppercase">
            <p>Web Developer</p>
            <p>Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className=" "
      >
        <Image
          src={images.profile}
          alt="profile_bg"
        />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-300 shadow-md"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className=""
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className="flex"
            key={`circle-${index}`}
          >
            <Image
              src={circle}
              className="w-8 h-8"
              // layout="fill"
              // objectFit="cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
