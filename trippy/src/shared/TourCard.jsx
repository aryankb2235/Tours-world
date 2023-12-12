import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/AvgRating";
import "./Tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, avgrating, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__Card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
         
            <span className="tour_rating d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"> </i> {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-s-fill"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) :
                (
                  <span> ({reviews.length})</span>
                )}
            </span>
          </div>

          <h5 className="tour__title"><Link to={`/tours/${id}`}>{title}</Link></h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>Rs  {price} <span>/per person</span></h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}> BOOK NOW</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
};
export default TourCard;
