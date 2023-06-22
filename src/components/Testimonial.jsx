import React from "react";
import { testimonialData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variant";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <section
      id="testimonial"
      className="relative top-[340px] h-[800px] bg-testimonial bg-cover bg-no-repeat pt-[60px] md:pt-[120px] lg:top-[390px]"
    >
      <div className="container mx-auto">
        {/* text  */}
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
        {/* carousel */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView="show"
          className="mt-8 flex items-center justify-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
