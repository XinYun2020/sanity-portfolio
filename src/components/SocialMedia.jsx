import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";

const socials = [
  { icon: <BsTwitter className="" />, link: null },
  { icon: <BsInstagram className="" />, link: null },
  // { icon: <FaFacebookF className="" /> },
  { icon: <BsGithub className="" />, link: "https://github.com/XinYun2020" },
];

const SocialMedia = () => {
  return (
    <div
      className="fixed left-5 bottom-12
    app__social flex justify-end items-center flex-col p-1 max-w-lg:display-none "
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
        >
          <div className=" text-slate-500 bg-white rounded-full w-10 h-10 my-[.25rem] border border-slate-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-slate-200">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
