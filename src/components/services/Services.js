import React from "react";
import DescriptionCard from "./DescriptionCard";
import "./services.css"

const cardData = [
  {
    title: "Maintainence",
    img: "",
    desc: "",
  },
  {
    title: "Maintainence",
    img: "",
    desc: "",
  },
  {
    title: "Maintainence",
    img: "",
    desc: "",
  },
];

const Services = () => {
  return (
    <div className="services">
      {cardData.map((data) => {
        return <DescriptionCard title={data.title} img={data.img} desc={data.desc}/>;
      })}
    </div>
  );
};

export default Services;
