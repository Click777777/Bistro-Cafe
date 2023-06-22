import React from "react";
import { socialData } from "../data";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialData.map((link, index) => (
        <li
          key={index}
          className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full border-2 border-white p-4 transition duration-200 hover:border-accent-hover hover:text-accent-hover"
        >
          <Link to={link.href}>{link.icon}</Link>
        </li>
      ))}
    </div>
  );
};

export default Socials;
