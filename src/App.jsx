import { useState } from 'react'
import DogDetail from './components/DogDetail'
import DogGallery from './components/DogGallery'
import './styles.css'

function App() {
	const [selectedDog, setSelectedDog] = useState(null)

	return (
		<div className='container'>
			<h1>Random Dogs images 💕</h1>

			<DogGallery onSelectDog={setSelectedDog} />
			<DogDetail dogUrl={selectedDog} />
		</div>
	)
}

export default App
