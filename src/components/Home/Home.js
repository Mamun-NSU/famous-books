import React from "react";
import useReviews from "../../hooks/useReviews";
import HeroSection from "../HeroSection/HeroSection";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div>
        <div className="review-container">
          {
            reviews.map(review => <Review
              key={review.id}
              review={review}
            ></Review>)
          }
        </div>
      </div>


    </div>
  );
};

export default Home;
