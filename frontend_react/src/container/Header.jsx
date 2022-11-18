import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { images } from "../../src/constants/index";
import { AppWrap } from "../wrapper";

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
    <div className="app__header app__flex flex flex-1 w-screen h-screen flex-row pb-0 px-2 max-xl:flex-col max-sm:pb-1 max-sm:px-2 ">
      {/* <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-300 cover-full"></div> */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info flex flex-[0.65] flex-col justify-start items-start h-full mx-2  max-xl:mr-6 ml-8"
      >
        <div className="app__header-badge w-full flex justify-end items-end flex-col">
          <div className="badge-cmp app__flex py-2 px-4 bg-white rounded-xl flex flex-row w-auto shadow-lg text-slate-700 ">
            <span className="my-auto text-5xl">👋🏻</span>
            <div className="ml-5 flex-col">
              <p className="p-text text-start">Hello, I am</p>
              <h1 className="head-text text-5xl font-semibold">Xinyun</h1>
            </div>
          </div>
          <div className=" my-4" />
          <div className="tag-cmp app__flex py-2 px-4 bg-white rounded-xl flex-row w-auto shadow-lg text-slate-700 uppercase">
            <p className="p-text w-full uppercase text-right">Web Developer</p>
            <p className="p-text w-full uppercase text-right">Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img relative w-screen h-fit mx-auto flex items-end justify-center"
      >
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle rounded-full bg-gradient-to-br from-transparent to-gray-200 shadow-sm
          absolute top-44 w-80 h-80 mx-auto z-0"
        /> */}

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=" rounded-full bg-gradient-to-br from-transparent to-gray-200 shadow-sm
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
        className="app__header-circles flex-[0.75] flex flex-col justify-evenly items-start h-full ml-1 mr-8 max-lg:flex-row max-lg:relative max-lg:mx-auto"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <>
            <div
              className="circle-cmp app__flex rounded-full shadow-lg w-20 h-20 p-4 bg-white my-8 mx-8 
              even:even:w-32 even:h-32 even:ml-16 
              hover:ring-2 ring-white transition-all duration-200 ease-linear hover:shadow-2xl
              hover:my-12 hover:mx-12
              "
              key={`circle-${index}`}
            >
              <Image
                src={circle}
                className="object-cover "
                alt="profile_bg"
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

export default AppWrap(Header, "home"); // no need for id="home"
