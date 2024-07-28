/* eslint-disable */
import { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)]

export default function StarRating({totalStars = 5, selectedStars=0, onRate = f => f}) {

    // const [selectedStars, setSelectedStars] = useState(0)

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i} 
                    onSelect={() => onRate(i+1)}
                    deSelect={() => onRate(i--)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
}