/* eslint-disable */
import React, { useContext } from 'react';
import { ColorContext } from '../main';
import Color from './Color';

export default function ColorList({onRemoveColor = f => f, onRateColor = f => f}) {
    
    const {colors} = useContext(ColorContext)
    console.log(colors)

    if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>

    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
}