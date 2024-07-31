/* eslint-disable */
import React from 'react';
import Color from './Color';
import { useColors } from '../hooks/color-hooks';

export default function ColorList({onRemoveColor = f => f, onRateColor = f => f}) {
    const {colors} = useColors()

    if(!colors.length) return <>No Colors Listed. (Add a Color)</>
    return (
        <>
            {colors.map(color => <Color key={color.id} {...color} />)}
        </>
    )
}