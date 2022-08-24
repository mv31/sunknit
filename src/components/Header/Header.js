import { Typography } from "@mui/material";
import React from "react";
import logo from "../assets/SUN.jpg";
import Info from "../info/Info";
import "./header.css";
import call from "../assets/phone.png";
import clock from "../assets/clock.png";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img className="header_logo" src={logo} alt="logo"></img>
        <Typography style={{ fontSize: 25, fontWeight: 600, color: "#343E49" }}>
          SUNKNIT WEARS
        </Typography>
      </div>
      <div className="info">
        <Info img={call} con1={"1234567892"} con2={"manojmv4811@gmail.com"} />
        <Info img={clock} con1={"10am-8pm"} con2={"Monday-saturday"} />
      </div>
    </div>
  );
};
export default Header;
