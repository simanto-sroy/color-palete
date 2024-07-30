/* eslint-disable */
import React, { useContext } from 'react';
import { ColorContext } from '../main';
import Color from './Color';

export default function ColorList({onRemoveColor = f => f, onRateColor = f => f}) {
    return (
        <ColorContext.Consumer>
            {context => {
                if(!context.colors.length) {
                    return <>No Colors Listed. (Add a Color)</>
                }
                return (
                    <>
                        {context.colors.map(color => (
                            <Color key={color.id} {...color} />
                        ))}
                    </>
                )
            }}
        </ColorContext.Consumer>
    )
}