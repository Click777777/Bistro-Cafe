import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showStatus={false}
      showIndicators={false}
      className="w-full max-w-[1024px]"
    >
      {slider.map((item, index) => {
        return (
          <div className="mx-auto max-w-[840px] text-white" key={index}>
            <div className="mb-9 max-h-[200px] text-lg leading-snug lg:text-2xl">
              {item.message}
            </div>
            <div className="mx-auto mb-3 max-w-[70px] lg:max-w-[100px]">
              <img src={item.image} alt={item.name} className="" />
            </div>
            <div className=" text-2xl font-semibold capitalize text-accent">
              {item.name}
            </div>
            <div className="text-[15px] font-medium capitalize italic">
              {item.occupation}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
