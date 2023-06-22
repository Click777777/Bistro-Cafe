import React from "react";
import { newsletterData } from "../data";

const Newsletter = () => {
  const { title, subtitle, placeholder, btnText } = newsletterData;
  return (
    <div className="bg-none lg:h-[220px] lg:bg-newsletter lg:bg-cover lg:bg-center lg:bg-no-repeat lg:px-24">
      <div className="flex h-full flex-col items-center justify-between lg:flex-row">
        <div className="mb-4 text-center lg:text-left">
          <h3 className="mb-2 font-primary text-[26px] capitalize italic text-white">
            {title}
          </h3>
          <p className="text-white/80">{subtitle}</p>
        </div>

        <form className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-[10px]">
          <input
            type="text"
            name="sub"
            id="sub"
            placeholder={placeholder}
            className="input border border-white bg-transparent text-white transition-all duration-200 placeholder:font-light placeholder:text-white/70 focus:ring-1 focus:ring-accent"
          />
          <button className="btn w-full capitalize lg:max-w-[204px]">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
