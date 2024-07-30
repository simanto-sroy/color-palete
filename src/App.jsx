/* eslint-disable */
import { useState } from 'react'
import colorData from './data/data.json'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import { v4 } from 'uuid';

export default function App () {
	return (
		<>
			<AddColorForm />
			<ColorList />
		</>
	)
}