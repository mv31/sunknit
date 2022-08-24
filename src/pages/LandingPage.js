import React from "react";
import Slider from "../components/carousel/Slider";
import Description from "../components/services/Services";
import NavBar from "../components/Navbar/NavBar";

export const LandingPage = () => {
  return (
    <div className="landingPage" style={{height:"2000px"}}>
      <Slider/>
      <Description/>
    </div>
  );
};
