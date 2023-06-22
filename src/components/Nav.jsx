import React from "react";
import { navData } from "../data";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center gap-4 font-primary text-base uppercase">
      {navData.map((link, index) => (
        <li
          key={index}
          className="underline-animation list-none transition-all duration-200 hover:scale-125"
        >
          <HashLink smooth to={link.href}>
            {link.name}
          </HashLink>
        </li>
      ))}
    </div>
  );
};

export default Nav;
