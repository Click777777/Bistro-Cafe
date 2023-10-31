import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="mx-auto h-full max-w-[1800px] overflow-hidden bg-pattern bg-no-repeat ">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-[385px]"></div>
    </div>
  );
};

export default App;
