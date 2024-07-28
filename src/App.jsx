/* eslint-disable */
import { useState } from 'react'
import colorData from './data/data.json'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import { v4 } from 'uuid';

export default function App () {
	const [colors, setColors] = useState(colorData)
 
	return (
		<div style={{width: '980px', margin: '0 auto',}}>
			<div style={{display: 'flex', flexDirection: 'row', gap: '5rem', justifyContent: 'space-between'}}>
				<ColorList 
					colors={colors}
					onRateColor={(id, rating) => {
						const newColors = colors.map(color => color.id === id ? {...color, rating }: color)
						setColors(newColors)
					}}
					onRemoveColor={id => {
						const newColors = colors.filter((color) => color.id !== id)
						setColors(newColors)
					}}
				/>
				<AddColorForm 
					onNewColor={(title, color) => {
						const newColors = [
							...colors,
							{
								id: v4(),
								rating: 0,
								title,
								color
							}
						];
						setColors(newColors)
					}}
				/>
			</div>
		</div>
	)
}