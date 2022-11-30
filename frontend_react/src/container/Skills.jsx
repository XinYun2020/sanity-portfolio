import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
motion;
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      // console.log(data); // print what we get from the experiences
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className=" flex flex-1 w-full flex-col">
      <h2 className="text-4xl text-center">Skills & Experience</h2>
      <div className="app__skills-container w-4/5 mt-6 flex flex-row max-lg:w-full max-lg:flex-col mx-auto">
        <motion.div className="app__skills-list flex-1 flex flex-wrap justify-start items-start mr-5  max-lg:mr-0 max-lg:justify-center max-lg:items-center ">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item flex-col text-center m-4 transition-all duration-300 ease-in-out
              app-flex flex"
              key={skill.name}
            >
              <div
                className={`app__flex flex bg-${skill.bgColor}
                w-24 h-24 rounded-[50%] bg-white hover:shadow-lg hover:shadow-[#fef4f5]
              `}
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="object-cover w-full h-full p-6"
                />
              </div>
              <p className="p-text font-semibold mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp flex-1 flex justify-start  items-start flex-col max-w-5xl:mt-4 ">
          {/* EVERY YEAR HAVE MULTIPLE EXPERIENCES */}
          {experiences.map((experience) => (
            // get different years
            <motion.div
              className="app__skills-exp-item w-full flex flex-row justify-start items-start my-4 mx-0"
              key={experience.year}
            >
              <div className="app__skills-exp-year mr-5 ">
                <p className="bold-text font-semibold text-blue-700">
                  {experience.year}
                </p>
              </div>
              <motion.div className="app__skills-exp-works flex-1">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work flex flex-col justify-start items-start mb-8 cursor-pointer"
                      data-tip // useful when have some tooltip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text font-semibold">{work.name}</h4>
                      <p className="p-text font-normal text-gray-700 mt-2">
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip max-w-xs"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "bg_white");
