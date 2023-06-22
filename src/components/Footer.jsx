import React from "react";
import Newsletter from "./Newsletter";
import { footerData } from "../data";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variant";

const Footer = () => {
  const { contact, hours } = footerData;
  return (
    <footer
      id="contact"
      className="relative top-[480px] z-20 bg-dark pt-20 lg:min-h-[620px] lg:bg-transparent lg:bg-footer lg:bg-center lg:bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="flex h-full flex-col gap-y-12"
        >
          {/* news letter */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)} className="">
            <Newsletter />
          </motion.div>

          {/* info */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex flex-col gap-y-12  lg:flex-row lg:gap-x-[50px] lg:gap-y-0 xl:gap-x-[100px]"
          >
            <div className="flex-1 lg:max-w-[170px]">
              <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                {contact.title}
              </div>
              <p className="capitalize">{contact.address}</p>
              <p className="capitalize">{contact.phone}</p>
            </div>

            <div className="flex flex-col gap-x-[46px] gap-y-12 sm:flex-row">
              <div className="flex-1">
                <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                  {hours.title}
                </div>
                <p className="">{hours.program[0].days}</p>
                <p className="text-[20px] text-accent">
                  {hours.program[0].hours}
                </p>
              </div>

              <div className="flex-1">
                <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                  {hours.title}
                </div>
                <p className="">{hours.program[1].days}</p>
                <p className="text-[20px] text-accent">
                  {hours.program[1].hours}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                social network
              </div>
              <Socials />
            </div>
          </motion.div>

          {/* copy right */}
          <motion.div
            variants={fadeIn("right", "tween", 0.7, 1.6)}
            className=" flex justify-between border-t border-white/20 py-6"
          >
            <div className="w-full text-center text-sm capitalize text-white/80">
              copyright &copy; 2023 bistro cafe. all rights reserved.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
