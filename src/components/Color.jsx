/* eslint-disable */
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Color({id, title, color, rating, onRemove = f => f, onRate = f => f}) {
    return (
        <section style={{display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'center'}}>
            <div style={{width: '70%'}}>
                <h1>{title}</h1>
                <div style={{height: 50, backgroundColor: color}} />
            </div>
            <div style={{width: '20%', marginTop: '6rem'}}>
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                <div style={{marginBottom: '1rem'}}></div>
                <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)}/>
            </div>
        </section>
    );
} 