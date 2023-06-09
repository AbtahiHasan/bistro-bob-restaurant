import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])

    return reviews
};

export default useReviews;

