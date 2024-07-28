/* eslint-disable */

import { useRef, useState } from "react"

export default function AddColorForm({onNewColor = f => f}) {
    // const txtTitle = useRef();
    // const hexColor = useRef();

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    }

    return (
        <form onSubmit={submit} style={{width: '30%', marginTop: '20px'}}>
            <input 
                style={{width: '100%'}}
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)} 
                placeholder="color title..." 
                required
            />
            <br />
            <br />
            <input 
                style={{width: '100%'}}
                type="color" 
                value={color}
                onChange={e => setColor(e.target.value)} 
                required 
            />
            <br />
            <br />
            <button style={{width: '100%'}}>Add</button>
        </form>
    )
}