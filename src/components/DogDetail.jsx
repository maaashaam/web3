const DogDetail = ({ dogUrl }) => {
	if (!dogUrl) return <p>Click on an image to see it in detail</p>

	return (
		<div className='dog-detail'>
			<h2>Selected Dog</h2>
			<img src={dogUrl} alt='Selected dog' />
		</div>
	)
}

export default DogDetail
