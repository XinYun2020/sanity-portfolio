import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="bg-slate-300 bg-opacity-25 w-full flex justify-between items-center py-2 px-4 border border-slate-300 border-opacity-25 fixed z-20 backdrop-blur-sm">
        <div className="flex justify-start items-center font-bold text-slate-700">
          {"<x.z>"}
        </div>
        <ul className="flex-1 flex justify-center items-center list-style-none">
          {["home", "about", "contact", "work", "skills", "contact"].map(
            (item) => (
              <li
                key={`link-${item}`}
                className="px-4 cursor-pointer flex-col "
              >
                {/* <div className="w-1 h-1 bg-transparent rounded-full hover:bg-blue-700"></div> */}
                <a
                  href={`#${item}`}
                  className="text-decoration-none text-slate-700 uppercase flex-col font-semibold 
                  hover:text-blue-700 hover:underline underline-offset-4 transition-all duration-200 ease-linear"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        {/* FOR MOBILE */}
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`rounded-full bg-slate-600 text-slate-300 align-middle font-bold text-xl ${
              toggle ? " opacity-0" : ""
            }`}
          >
            <HiMenuAlt4 />
          </button>

          {toggle ? (
            <motion.div
              // whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="fixed top-0 bottom-0 right-0 z-10 px-4 py-2 w-4/5  
              flex justify-start items-end flex-col 
              h-screen 
              bg-white bg-opacity-70 shadow-lg backdrop-blur-sm lg:hidden md:hidden
             
              
              "
            >
              <button
                onClick={() => setToggle(false)}
                className="text-blue-700 z-30 font-bold text-2xl hover:text-gray-300 transition duration-200 ease-linear align-middle"
              >
                <HiX />
              </button>

              <ul className=" list-style-none w-full h-wull p-0 m-0 flex flex-col items-start justify-start gap-8">
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li
                    key={item}
                    className="px-4 cursor-pointer flex-col transition-all duration-300 ease-in-out"
                  >
                    <a
                      href={`#${item}`}
                      className="text-decoration-none text-slate-700 uppercase flex-col font-semibold 
                                hover:text-blue-700 transition-all duration-200 ease-linear
                                "
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
