'use client'
import { useEffect, useState } from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'

const Carousel = ({ slides, className }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrevBanner = () => {
		setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1))
	}

	const handleNextBanner = () => {
		setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1))
	}

	useEffect(() => {
		const slideInterval = setInterval(handleNextBanner, 3000)
		return () => clearInterval(slideInterval)
	}, [])

	return (
		<div className={className}>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].imgUrl})` }}
				className='w-full h-full bg-bottom bg-no-repeat bg-cover duration-500 rounded-sm'
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={handlePrevBanner} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={handleNextBanner} size={30} />
			</div>
			<div className='absolute bottom-4 right-0 left-0'>
				<div className='flex items-center gap-2 justify-center'>
					{slides.map((_, i) => (
						<div
							key={i}
							className={`w-3 h-3 bg-white rounded-full ${
								currentIndex === i ? 'p-2' : 'bg-opacity-50'
							}`}
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
