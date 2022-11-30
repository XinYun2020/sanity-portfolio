import React from "react";
import { NavigationDots, SocialMedia } from "../components";

// higher order component

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <>
        <div
          id={idName} // we can scroll to the section
          className={`app-container ${classNames} w-full min-h-screen flex flex-row relative bg-cover bg-center bg-repeat`}
        >
          <SocialMedia />
          <div
            className="
        app-wrapper flex-1 w-full flex-col py-4 px-2 max-w-md:pt-4 max-w-md:px-1 max-w-md:pb-2
        app-flex flex justify-center items-center pt-24 
        
        "
          >
            <Component />
            <div className="copyright bottom-0 fixed w-full pt-2 px-0 pb-0 flex flex-col justify-end items-end text-slate-700 text-sm font-semibold opacity-20">
              <p
                className="
            p-text leading-6 
            uppercase mx-auto w-fit
            "
              >
                @2022 XINYUN
              </p>
              <p
                className="
            p-text leading-6 
            uppercase mx-auto w-fit"
              >
                All rights reserved
              </p>
            </div>
          </div>
          <NavigationDots active={idName} />
        </div>
      </>
    );
  };

export default AppWrap;

// export default AppWrap(Header, "home"); // no need for id="home"

// app__works flex flex-1 w-full flex-col
