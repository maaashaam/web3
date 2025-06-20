import axios from 'axios'

const API_KEY =
	'live_bKhR2sj3sl07nONV4MWU5meXp8mFSqzHmwFliaYQJt2QiAXcs0bLDhIt080qPjBS'

export const fetchRandomDog = async () => {
	try {
		const response = await axios.get(
			'https://api.thedogapi.com/v1/images/search',
			{
				params: { api_key: API_KEY },
				timeout: 10000,
			}
		)
		return response.data[0].url
	} catch (error) {
		console.error('Error fetching dog:', error)
		throw error
	}
}
