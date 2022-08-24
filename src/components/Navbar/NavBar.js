import { Typography } from "@mui/material";
import React from "react";
import "./navbar.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import logo from "../assets/SUN.jpg"

const NavBar = () => {
  return (
    <>
      <Nav 
      style={{ position: "sticky", top:-1}}
      >
        
        <NavLink to="/">
          <img className="logo" src={logo}></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="home" activeStyle>
            <h1>Home</h1>
          </NavLink>
          <NavLink to="about" activeStyle>
            <h1>About</h1>
          </NavLink>
          <NavLink to="contact" activeStyle>
            <h1>Contact</h1>
          </NavLink>
          <NavLink to="sign-up" activeStyle>
            <h1>Services</h1>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Get In Touch</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
