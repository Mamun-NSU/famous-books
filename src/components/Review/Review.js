import React from "react";
import "./Review.css";

const Review = (props) => {
  const { user_name, user_image, review, book, rating } = props.review;
  return (
    <div className="review">
      <p>
        <img src={user_image} alt="user image"></img> <span className="user_name">{user_name}</span>
      </p>
      <p>Review on: <span className="book">{book}</span></p>
      <p>{review}</p>
      <p> <span className="rating">Rating:</span> {rating}</p>
    </div>
  );
};

export default Review;
