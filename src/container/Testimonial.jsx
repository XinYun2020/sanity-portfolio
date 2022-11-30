import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      // console.log(data); // print what we get from the experiences
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div
            className="app__testimonial-item min-h-[320px]
          app__flex flex flex-row justify-center bg-white p-4 rounded-lg shadow-lg transition-all duration-200 ease-linear w-2/3 mx-auto"
          >
            <img
              src={urlFor(test.imgurl)}
              alt="testimonial"
              className="w-1/3 object-cover mr-5 rounded-3xl hover:rounded-md  transition-all duration-200 ease-linear"
            />
            <div className="app__testimonial-content my-auto w-2/3 px-2">
              <p className="p-text">{test.feedback}</p>
              <div className="mt-5">
                <h4 className="bold-text font-semibold text-xl text-end">
                  {test.name}
                </h4>
                <h5 className="p-text text-md text-end">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex flex flex-row justify-center text-center py-4 text-3xl text-slate-500 gap-8 mt-3 ">
            <button
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1 // if first index, we cannot go back
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft
                className="bg-white rounded-full 
               ring-4 shadow-lg ring-white hover:text-purple-700 "
              />
            </button>
            <button
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0 // if at last index, we go to first index
                    : currentIndex + 1 // not in the last, go to the next index
                )
              }
            >
              <HiChevronRight
                className="bg-white rounded-full 
               ring-4 shadow-lg ring-white hover:text-purple-700 "
              />
            </button>
          </div>
        </>
      )}
      <div
        className="app__testimonials-brands flex-wrap mt-2 mx-auto w-2/3
       app__flex flex"
      >
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
            className="w-36 m-2"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-auto object-cover grayscale hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial flex-1 w-full flex-col "),
  "testimonial",
  "xbg_white"
);
