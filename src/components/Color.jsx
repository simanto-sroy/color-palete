/* eslint-disable */
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from '../hooks/color-hooks'

export default function Color({id, title, color, rating}) {

    const {rateColor, removeColor} = useColors()

    return (
        <>
            <>
                <h1>{title}</h1>
                <div style={{height: 50, backgroundColor: color}} />
            </>
            <>
                <button onClick={() => removeColor(id)}>
                    <FaTrash />
                </button>

                <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)}/>
            </>
        </>
    );
} 