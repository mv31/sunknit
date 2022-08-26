import React from "react";
import "./about.css";
import about from "../assets/about.jpg"
const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="aboutheading">
        <h1>About Us</h1>
      </div>
      {/* <div className='aboutcontent'>
           <p>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo link example ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
           </p>
        </div>
        <div className='aboutcontent'>
           <p>kajksjaois</p>
        </div> */}

      <div className="aboutcontent">
        <p>
          You can explain further here. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.You
          can explain further here. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
        </p>
      </div>
      <div className="aboutcontent">
        <p>
          You can explain further here. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.You
          can explain further here. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          jkdjfklsdjflksd kljsdflkjsdf sdjfkljsdfshdfjfd ksjdksiweuifjdskj
          sdfkjdkfak kdjfkjdfk kdjfkj
        </p>
      </div>
      <div className="aboutimg">
        <img src={about}></img>
      </div>
    </div>
  );
};

export default About;
