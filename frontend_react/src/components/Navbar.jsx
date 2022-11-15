import React from "react";

const Navbar = ({ children }) => {
  return (
    <div className="">
      <nav className="bg-teal-400 h-5 w-full">
        <div>logo</div>
      </nav>
      head{children}
    </div>
  );
};

export default Navbar;
