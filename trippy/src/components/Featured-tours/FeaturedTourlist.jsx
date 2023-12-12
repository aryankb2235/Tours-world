import React from "react";
import TourCard from"../../shared/TourCard";
import tourData from "../../assets/data/Tours";
 import { Col } from 'reactstrap';            

const FeaturedTourlist = () => {
  return (
    <>
   { tourData ?.map(tour => (
     <Col lg="3" className="mb-4" key={tour.id}>
      <TourCard tour={tour}/>
      </Col>   
     ))}
     </>
  );
   };
export default FeaturedTourlist;


