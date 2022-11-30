import React, { useState } from "react";
import { images } from "../constants";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "../client";

const Footer = () => {
  return <div>Footer</div>;
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg bg-white"
);
