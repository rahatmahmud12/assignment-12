import React, { useEffect, useState } from 'react';
import OneReview from './OneReview/OneReview';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-20">
            {
                reviews.map(review => <OneReview
                    key={review._id}
                    review={review}
                ></OneReview>)
            }

        </div>
    );
};

export default Review;