import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
motion;
import { AppWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []); // onMount

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]); // retrigger the shuffle animation of the card once change the tab catergory (slide from bottom to top)

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]); // retrigger animation

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item))); // keep if the work have the selected tags
      }
    }, 500); // 500 ms
  };

  return (
    <>
      <h2 className="text-4xl text-center">
        My Creative <span className=" text-purple-800">Portfolio </span>
        Section
      </h2>
      <div className="app__work-filter flex flex-row justify-start items-center flex-wrap mt-12 mx-0 mb-8">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item py-1 px-4 rounded-lg bg-white m-1
              text-slate-700 font-semibold cursor-pointer
              transition-all duration-300 ease-in-out hover:bg-purple-700 hover:text-white
              app__flex p-text 
               ${
                 activeFilter === item
                   ? "item-active bg-purple-700 text-white"
                   : ""
               }
              `}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item app__flex flex flex-col w-72 m-4 p-2 rounded-lg bg-white text-slate-700
            cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"
            key={index}
          >
            <div className="app__work-img app__flex flex w-full h-56 relative">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />
              {/* POP OUT FROM LEFT TO RIGHT WHEN HOVER */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }} // staggerChildren: element going to show one after another
                className="app__work-hover app__flex flex absolute z-20 top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-50 rounded-xl 
                opacity-0 translate duration-300 ease-in-out justify-center items-center"
              >
                {/* EYE */}
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="norefer"
                >
                  <motion.div
                    whildInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex flex w-12 h-12 rounded-full bg-black bg-opacity-50 text-white translate duration-300 ease-in-out m-4"
                  >
                    <AiFillEye className="m-auto text-2xl" />
                  </motion.div>
                </a>
                {/* GITHUB */}
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="norefer"
                >
                  <motion.div
                    whildInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex flex w-12 h-12 rounded-full bg-black bg-opacity-50 text-white translate duration-300 ease-in-out m-4"
                  >
                    <AiFillGithub className="m-auto text-2xl" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            {/* TITLE AND DESCRIPTION OF THE PROJECT */}
            <div className="app__work-content app__flex mt-2 p-1 w-full relative flex-col text-center leading-6">
              <h4 className="bold-text font-bold">{work.title}</h4>
              <p className="p-text mt-3 font-light">{work.description}</p>
              <div className="app__work-tag app__flex absolute z-30 py-1 px-2 rounded-xl bg-white -top-10 justify-center flex left-1/3 right-1/3">
                <p className="p-text font-light">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
