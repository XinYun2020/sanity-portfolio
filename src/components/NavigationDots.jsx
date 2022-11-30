import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div
      className=" fixed right-5 top-0 bottom-0
    app__navigation max-w-lg:display-none flex justify-center items-center flex-col p-1"
    >
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            // className={`flex flex-col bg-gray-300 w-2 h-2 rounded-full m-2
            //       hover:bg-blue-700 transition-all duration-200 ease-linear
            //        active:bg-[#313BAC]
            //       `}
            className="app__navigation-dot w-3 h-3 rounded-full bg-slate-300 m-2 hover:bg-blue-700 transition-all duration-200 ease-in-out
            min"
            // style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
