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
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
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
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item app__flex"
            key={index}
          >
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
              />
              {/* POP OUT FROM LEFT TO RIGHT WHEN HOVER */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }} // staggerChildren: element going to show one after another
                className="app__work-hover app__flex"
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
                    className="app__flex"
                  >
                    <AiFillEye />
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
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            {/* TITLE AND DESCRIPTION OF THE PROJECT */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text mt-3 ">{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
