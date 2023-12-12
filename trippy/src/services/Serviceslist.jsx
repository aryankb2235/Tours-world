import React from "react";
import ServiceCard from "./ServicesCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const servicesData = [
  // {
  //   imgUrl: weatherImg,
  //   title: "Calculate Weather",
  //   desc: "Lorem ipsum dolor sit amet ,consectetur adipisicing elit.",
  // },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "The best tour guide effortlessly weaves history, humor, and local insights to create an unforgettable journey through every destination..",
  },

  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "selecting specific attractions to visit, accommodating dietary preferences, arranging transportation, to providing unique experiences that align with the traveler's desires.",
  },
]

const Serviceslist = () => {
  return (
  <>
    {
      servicesData.map((item, index) => (
      <Col lg="3" key={index}>
         <ServiceCard item={item} />
      </Col>
      ))}
  </>
  ); 
};
export default Serviceslist;
