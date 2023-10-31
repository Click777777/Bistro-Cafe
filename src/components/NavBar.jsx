import headerLogo from "../assets/imagecompressor/logo-white-min.png";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variant";
import Nav from "./Nav";
import Socials from "./Socials";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNav, setIsNav] = useState(false);

  const headerVariant = {
    hidden: {
      padding: "84px 0 84px 0",
      background: "transparent",
    },
    show: {
      padding: "14px 0 14px 0",
      background: "rgba(0, 0, 0, 0.92)",
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  const navBarVariant = {
    hidden: {
      opacity: 0,
      clipPath: "circle(0.5% at 50% 0)",
    },
    show: {
      clipPath: "circle(130% at 51% 0)",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="fixed z-50 w-full max-w-[1800px] py-4"
    >
      <motion.div
        initial="hidden"
        variants={staggerContainer(0.3, 1)}
        animate="show"
        className="container mx-auto"
      >
        <div className="relative flex items-center justify-between p-4 text-white lg:p-0">
          {/* mobile stick Bar */}
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="order-last flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-full border-2 p-3 lg:order-none"
            onClick={() => setIsNav(!isNav)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isNav ? -45 : 0, y: isNav ? 5 : 0 }}
              transition={{ type: "spring" }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isNav ? 45 : 0, y: isNav ? -5 : 0 }}
              transition={{ type: "spring" }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
          </motion.div>

          {/* logo image */}
          <motion.img
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            src={headerLogo}
            alt={headerLogo}
            onClick={toTop}
            className={`cursor-pointer ${
              isActive
                ? "-mr-[200px] h-[70px] w-[70px]"
                : "-mr-[200px] h-[100px] w-[100px]"
            } `}
          />
          {/* NavBar */}
          <motion.div
            variants={navBarVariant}
            initial="hidden"
            animate={isNav ? "show" : ""}
            className="absolute right-0 top-[120px] h-[50vh] w-[310px] rounded-lg bg-accent shadow-xl lg:left-0"
          >
            <Nav />
          </motion.div>
          {/* social */}
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default NavBar;
