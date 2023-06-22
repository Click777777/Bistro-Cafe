import React from "react";
import { menuData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variant";

const Menu = () => {
  const { title, subtitle, modelImg, btnText, menuItems } = menuData;
  return (
    <section id="menu" className=" min-h-[780px]">
      <div className="absolute h-[780px] w-full max-w-[1800px] bg-menu"></div>
      {/* text */}
      <div className="relative top-72 lg:top-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center justify-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 max-w-[400px] text-center capitalize text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className=" mb-8 capitalize text-white/70 "
          >
            {subtitle}
          </motion.p>
          <motion.img
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            src={modelImg}
            alt="menuImg"
          />
        </motion.div>
      </div>
      {/* photo */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="relative top-80 lg:top-96"
      >
        <div className="container mx-auto ">
          <div className="mb-8 min-h-[590px] md:mb-4 lg:-mt-24 xl:mb-16">
            <div className="grid min-h-[590px] grid-cols-1 gap-y-4 lg:grid-cols-4">
              {menuItems.map((item, index) => (
                // render
                <div key={index} item={index}>
                  <div className="flex h-full flex-col xs:flex-row lg:flex-col">
                    <div
                      className={`flex w-full justify-center xs:w-[45%] md:w-auto ${
                        index === 1 || index === 3 ? "lg:order-1" : "order-none"
                      }`}
                    >
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center bg-[#fff3e4] px-6 lg:max-h-[251px] lg:p-12 xl:max-h-max">
                      <div className=" text-center">
                        <div className="text-xl font-semibold text-dark xl:text-2xl">
                          {item.name}
                        </div>
                        <div className="my-1 text-[20px] font-semibold text-accent lg:my-6 lg:text-[30px]">
                          {item.price}
                        </div>
                        <div className="">{item.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* button */}
          <button className="btn mx-auto capitalize lg:mx-0">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
