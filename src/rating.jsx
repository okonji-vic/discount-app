import React from "react";
import "./rating.css";

const RatingDisplay = ({reviews}) => {
//   const reviews = [
//     {
//       title: "Winter's Orbit",
//       rating: 5,
//     },
//     {
//       title: "Dial D for Deadman",
//       rating: 4,
//     },
//     {
//       title: "The Last Watch",
//       rating: 3,
//     },
//     {
//       title: "The House in the Cerulean Sea",
//       rating: 5,
//     },
//     {
//       title: "The Unbroken",
//       rating: 4,
//     },
//   ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0px", textAlign: "center", border: '3px solid ', width: '90vw',}}>
      {reviews.map((review, index) => (
        <div className="container" key={review.title}>
          <h2 style={{ margin: "0 0 10px" }}>{review.title}</h2>
          <p style={{ fontSize: "16px", margin: "10px 0" }}>Rating: {review.rating} / 5</p>
          <p style={{ fontSize: "20px", color: "gold", margin: "0" }}>
            {"★".repeat(review.rating)}
            {/* {"☆".repeat(5 - review.rating)} */}
          </p>
          {console.log(review.title)}
          {console.log(index)}
        </div>
      ))}
    </div>
  );
};

export default RatingDisplay;
