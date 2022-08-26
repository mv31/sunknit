import { Button, Typography } from "@mui/material";
import React from "react";
import DescriptionCard from "./DescriptionCard";
import "./services.css";

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
      <div className="productheading">
        <Typography
          style={{ display: "flex", justifyContent: "center", fontSize: 30 }}
        >
          Our Products
        </Typography>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            margin: "3%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Aenean massa.
        </p>
      </div>
      <div className="products">
        {cardData.map((data) => {
          return (
            <DescriptionCard
              title={data.title}
              img={data.img}
              desc={data.desc}
            />
          );
        })}
      </div>
      <div className="serviceButtons">
        <Button style={{margin:"1%"}} variant="contained" color="primary">Get Details</Button>
        <Button style={{margin:"1%"}}variant="contained" color="success">View our Projects</Button>
      </div>
    </div>
  );
};

export default Services;
