import { motion } from "framer-motion";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { fadeIn } from "../variant";
import { reservationData } from "../data";
import { ImCalendar, ImUsers } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";
import "../timepicker.css";

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");

  return (
    <section id="reservation" className="relative top-96 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        {/* text  */}
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="h2 max-w-[400px] text-center capitalize"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className=" mb-8 text-base capitalize "
          >
            {subtitle}
          </motion.p>
          <motion.img
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            src={modelImg}
            alt="menuImg"
          />
        </div>

        {/* input form  */}
        <motion.form
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="mb-8 flex flex-col items-center justify-center  gap-y-4 lg:flex-row">
            {/* date */}
            <div className="">
              <div className=" mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark">
                <ImCalendar />
                <p className="capitalize">choose date</p>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* time */}
            <div className="">
              <div className=" mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark">
                <BiTimeFive />
                <p className="capitalize">choose time</p>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={onChange}
                value={value}
              />
            </div>

            {/* person */}
            <div className="">
              <div className=" mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark">
                <ImUsers />
                <p className="capitalize">how many people</p>
              </div>
              <input
                type="number"
                name="person"
                id="person"
                className="input"
                placeholder="1"
              />
            </div>
          </div>
        </motion.form>

        {/* button */}
        <button className="btn mx-auto capitalize ">{btnText}</button>
      </div>
    </section>
  );
};

export default Reservation;
