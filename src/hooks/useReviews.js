import { useEffect, useState } from "react";
// This hook for review data
const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return [reviews, setReviews];
}
export default useReviews;