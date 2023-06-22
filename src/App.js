import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

const App = () => {
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
