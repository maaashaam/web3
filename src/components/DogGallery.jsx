import { useState } from 'react'
import { fetchRandomDog } from '../utils/api'

const DogGallery = ({ onSelectDog }) => {
	const [dogs, setDogs] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const loadDogs = async (count = 8) => {
		setLoading(true)
		setError(null)

		try {
			const promises = Array.from({ length: count }, () => fetchRandomDog())
			const dogUrls = await Promise.all(promises)
			setDogs(dogUrls)
		} catch (err) {
			setError('Failed to load dogs. Please try again.')
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='gallery-container'>
			<button onClick={() => loadDogs()} disabled={loading}>
				{loading ? 'Loading...' : 'Load Dogs'}
			</button>

			{error && <p className='error'>{error}</p>}

			<ul className='dog-list'>
				{dogs.map((dogUrl, index) => (
					<li key={index} onClick={() => onSelectDog(dogUrl)}>
						<img src={dogUrl} alt={`Dog ${index + 1}`} loading='lazy' />
					</li>
				))}
			</ul>
		</div>
	)
}

export default DogGallery
