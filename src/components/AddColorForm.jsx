/* eslint-disable */
import { useInput } from '../hooks/useInput';
import { useColors } from "../hooks/color-hooks";
import { useState } from 'react';

export default function AddColorForm() {
    // const txtTitle = useRef();
    // const hexColor = useRef();

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")
    // const [titleProps, resetTitle] = useInput("");
    // const [colorProps, resetColor] = useInput("#000000")
    const {addColor} = useColors()

    const submit = e => {
        e.preventDefault();
        addColor(title, color);
        title("");
        color("");
    }

    return (
        <form onSubmit={submit} style={{width: '30%', marginTop: '20px'}}>
            <input 
                style={{width: '100%'}}
                value={title}
                onChange={e=>setTitle(e.target.value)}
                type="text" 
                placeholder="color title..." 
                required
            />
            <br />
            <br />
            <input 
                style={{width: '100%'}}
                value={color}
                onChange={e=>setColor(e.target.value)}
                type="color" 
                required 
            />
            <br />
            <br />
            <button style={{width: '100%'}}>Add</button>
        </form>
    )
}