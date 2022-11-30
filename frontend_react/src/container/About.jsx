import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../constants";
import { urlFor, client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";

// const abouts = [
//   {
//     title: "Web Development",
//     desciption: "I am a good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     desciption: "I am a good web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Frontend Development",
//     desciption: "I am a good web developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "UI/UX",
//     desciption: "I am a good web developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  // use sanity data
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []); // run once onMount

  return (
    <div className="px-8 text-center flex-1 w-full flex-col align-middle items-center">
      <h2 className="text-4xl">
        I Know That <span className=" text-purple-800">Good Development </span>
        Means <span className=" text-purple-800">Good Business</span>
      </h2>
      <div className="py-8"></div>
      <div className=" flex flex-wrap justify-center items-start">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-80 flex justify-start items-start flex-col m-8"
            key={about.title + index}
          >
            {/* <Image
              // src={about.imgUrl}
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-full object-cover rounded-3xl"
            ></Image> */}

            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="py-4"></div>
            <h2 className="font-bold">{about.title}</h2>
            <div className="py-4"></div>
            <p className=" text-start">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "bg_white");
