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
      className="relative flex-1 w-screen h-fit flex-row"
    >
      {/* <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-300 cover-full"></div> */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start absolute"
      >
        <div className="flex flex-col pl-8 ">
          <div className="max-w-fit badge flex flex-row shadow-lg px-8 py-4 text-slate-700 rounded-lg">
            <span className="my-auto text-5xl">👋🏻</span>
            <div className="ml-5">
              <p className="text-start">Hello, I am</p>
              <h1 className="text-5xl font-semibold">Xinyun</h1>
            </div>
          </div>
          <div className="my-4" />
          <div className="max-w-fit badge flex flex-col justify-end align-bottom shadow-lg px-8 py-4 text-slate-700 rounded-lg uppercase">
            <p>Web Developer</p>
            <p>Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className=" relative w-screen h-fit mx-auto flex items-end justify-center"
      >
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rounded-full bg-gradient-to-br from-transparent to-gray-200 shadow-sm
          absolute top-44 w-80 h-80 mx-auto z-0 
          "
        />
        <Image
          src={images.profile}
          alt="profile_bg"
          className=" w-fit"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className=" w-fit justify-end absolute top-0 right-0 flex flex-col max-lg:flex-row max-lg:relative max-lg:mx-auto"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <>
            <div
              className="rounded-full shadow-lg w-20 h-20 p-4 bg-white my-8 mx-8 
              even:even:w-32 even:h-32 even:ml-16 
              hover:ring-2 ring-white transition-all duration-200 ease-linear hover:shadow-2xl
              hover:my-12 hover:mx-12
              "
              key={`circle-${index}`}
            >
              <Image
                src={circle}
                className="object-cover "
                // layout="fill"
                // objectFit="cover"
              />
            </div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
