'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { banners } from '@/utils/data'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'

const Banner = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevBanner = () => {
		setCurrentIndex((currentIndex) => (currentIndex === 0 ? banners.length - 1 : currentIndex - 1))
	}

	const nextBanner = () => {
		setCurrentIndex((currentIndex) => (currentIndex === banners.length - 1 ? 0 : currentIndex + 1))
	}

	useEffect(() => {
		const slideInterval = setInterval(nextBanner, 3000)
		return () => clearInterval(slideInterval)
	}, [])

	return (
		<div className='w-full min-h-[12.5rem] md:min-h-80 lg:h-[14.6875rem] lg:flex lg:gap-1 lg:max-w-[1200px] lg:mx-auto'>
			<div className='max-w-[1400px] h-[12.5rem] sm:h-[26.5625rem] lg:h-[14.6875rem] w-full relative group'>
				<div
					style={{ backgroundImage: `url(${banners[currentIndex].imgUrl})` }}
					className='w-full h-full bg-bottom bg-cover duration-500 rounded-sm'
				></div>
				{/* Left Arrow */}
				<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
					<BsChevronCompactLeft onClick={prevBanner} size={30} />
				</div>
				{/* Right Arrow */}
				<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
					<BsChevronCompactRight onClick={nextBanner} size={30} />
				</div>
				<div className='absolute bottom-4 right-0 left-0'>
					<div className='flex items-center gap-2 justify-center'>
						{banners.map((_, i) => (
							<div
								className={`w-3 h-3 bg-white rounded-full ${
									currentIndex === i ? 'p-2' : 'bg-opacity-50'
								}`}
							></div>
						))}
					</div>
				</div>
			</div>

			<div className='hidden lg:flex lg:flex-col lg:gap-2 lg:h-full lg:overflow-hidden lg:w-2/4'>
				<Image
					src={'https://cf.shopee.vn/file/vn-50009109-74a0f92fe5a01058e6c6cee3a418d7d0_xhdpi'}
					width={600}
					height={180}
					alt='banner'
					className='rounded-sm shadow-md'
				/>
				<Image
					src={'https://cf.shopee.vn/file/vn-50009109-57c1542a7bb9b19456d8fc7ee850563c_xhdpi'}
					width={600}
					height={180}
					alt='banner'
					className='rounded-sm shadow-md'
				/>
			</div>
		</div>
	)
}

export default Banner
