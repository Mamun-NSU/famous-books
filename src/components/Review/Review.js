
import React from "react";
import "./Review.css";

const Review = (props) => {
    const { user_name, user_image, review, rating } = props.review;
    return (
        <div className="review">
            <p>
                <img src={user_image} alt="user image"></img> {user_name}
            </p>
            <p>{review}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;