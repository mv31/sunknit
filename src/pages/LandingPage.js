import React from "react";
import About from "../components/about/About";
import Slider from "../components/carousel/Slider";
import Services from "../components/services/Services";
import Whyus from "../components/whyus/WhyUs";

export const LandingPage = () => {
  return (
    <div className="landingPage" style={{height:"2000px"}}>
      <Slider/>
      <Services/>
      <Whyus/>
      <About/>
    </div>
  );
};
