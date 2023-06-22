import { heroData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variant";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-hero bg-cover bg-center bg-no-repeat"
    >
      <NavBar />
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        {/* herodata section */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="mb-1 font-primary text-[24px] italic text-white lg:text-[28px] lg:font-medium"
          >
            {heroData.pretitle}
          </motion.div>

          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5"
          >
            {heroData.title}
          </motion.h1>

          <motion.div
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="mb-8 max-w-[540px] text-white"
          >
            {heroData.subtitle}
          </motion.div>

          <motion.button variants={fadeIn("down", "tween")} className="btn">
            {heroData.btnText}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
