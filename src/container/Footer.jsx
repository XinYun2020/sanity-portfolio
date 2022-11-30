import React, { useState } from "react";
import { images } from "../constants";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "../client";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  // empty object with name email message as empty string
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // show the form or the success message
  const [loading, setLoading] = useState(false);

  // destructure the form
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text text-2xl font-bold">
        Take a coffee & chat with me
      </h2>
      <div className="app__footer-cards w-3/5 flex justify-evenly items-center flex-wrap-reverse my-4 mx-2 ">
        <div
          className="app__footer-card min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-lg cursor-pointer bg-[#f2f7fb] hover:shadow-md
"
        >
          {/* <img
            src={images.email}
            alt="email"
            className="w-10 h-10 mx-2"
          /> */}
          <HiOutlineMail className="w-10 h-10 mx-2"></HiOutlineMail>
          <a
            href="mailto:xinyunzhang2016@gmail.com"
            className="p-text text-decoration-none font-normal "
          >
            xinyunzhang2016@gmail.com
          </a>
        </div>
        <div className="app__footer-card min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-lg cursor-pointer bg-[#fef4f5]  hover:shadow-md">
          {/* <img
            src={images.mobile}
            alt="phone"
            className="w-10 h-10 mx-2"
          /> */}
          <HiOutlinePhone className="w-10 h-10 mx-2"></HiOutlinePhone>
          <a
            href="tel:0479 189 008"
            className="p-text text-decoration-none font-normal "
          >
            0479 189 008
          </a>
        </div>
      </div>

      {/* FORM */}
      {!isFormSubmitted ? (
        <div
          className="app__footer-form w-3/5 flex flex-col my-2 mx-4 justify-center gap-5
        app__flex"
        >
          <div className="app__flex cursor-pointer">
            <input
              className="p-text w-full flex border border-slate-200 p-2 bg-slate-200 rounded-md outline-none hover:shadow-md"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex cursor-pointer">
            <input
              className="p-text w-full flex border border-slate-200 p-2 bg-slate-200 rounded-md outline-none hover:shadow-md"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="cursor-pointer">
            <textarea
              className="p-text w-full flex border border-slate-200 p-2 bg-slate-200 rounded-md outline-none min-h-[170px] hover:shadow-md"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text rounded-lg hover:shadow-lg py-2 px-4 mx-auto w-[150px] bg-purple-700 text-white font-bold hover:bg-purple-900 cursor-pointer"
            onClick={handleSubmit}
          >
            {/* check if we are loading */}
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text text-3xl">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(
    Footer,
    "app__footer flex flex-1 w-full flex-col justify-center items-center gap-5"
  ),
  "contact",
  "app__whitebg bg-white"
);
