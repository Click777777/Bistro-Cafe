import React from "react";
import bgAbout from "../assets/img/body-bg-pattern.png";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { plateVariants, staggerContainer, fadeIn } from "../variant";

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section id="about" className=" min-h-[620px]">
      <div
        style={{
          backgroundImage: `url(${bgAbout})`,
        }}
      >
        <div className="container mx-auto  min-h-[620px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="flex min-h-[620px] flex-col items-center lg:flex-row"
          >
            <motion.div
              className="text-center lg:text-left"
              variants={fadeIn("right", "tween", 0.2, 1.8)}
            >
              <p className=" pretitle">{pretitle}</p>
              <h2 className="h2 capitalize">{title}</h2>
              <p className="mb-8 max-w-[540px] text-grey">{subtitle}</p>
              <button className="btn mx-auto capitalize lg:mx-0">
                {btnText}
              </button>
            </motion.div>

            <motion.div
              variants={plateVariants}
              className="z-10 -mb-[400px] -mr-[186px] "
            >
              <img src={image} alt="aboutImage" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
