import React, { useState } from "react";
import Card from "./Card";
import "./Rating.css";
import StartImg from "../images/icon-star.svg";

const Rating = ({ rating, setRating, setshowThankYouPage }) => {
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const submitHandle = () => {
    if (!rating) return;

    setshowThankYouPage(true);
  };

  return (
    <Card>
      <div className="star_img_container">
        <img src={StartImg}></img>
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="text">
        Please let us know how we did with your support request.All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating_container">
        <div
          className={activeRating.oneStar ? "rating active" : "rating"}
          onClick={() => {
            setActiveRating({
              oneStar: true,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={activeRating.twoStar ? "rating active" : "rating"}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStar: true,
              threeStar: false,
              fourStar: false,
              fiveStar: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={activeRating.threeStar ? "rating active" : "rating"}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStar: false,
              threeStar: true,
              fourStar: false,
              fiveStar: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={activeRating.fourStar ? "rating active" : "rating"}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: true,
              fiveStar: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={activeRating.fiveStar ? "rating active" : "rating"}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>

      <button className="submit_btn" onClick={submitHandle}>
        Submit
      </button>
    </Card>
  );
};

export default Rating;
