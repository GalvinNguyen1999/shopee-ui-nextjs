import Image from 'next/image'

const Banner = () => {
	return (
		<div className='w-full h-[12.5rem] md:h-80 lg:h-[14.6875rem] lg:mt-[9.3125rem] lg:flex lg:gap-1 lg:max-w-[1200px] lg:mx-auto'>
			<Image
				src={'https://cf.shopee.vn/file/vn-50009109-bfbde90291aabe67ced2d3b4b2a4c7df'}
				width={720}
				height={270}
				alt='banner'
				className='w-full h-full object-center shadow-md'
			/>

			<div className='hidden lg:flex lg:flex-col lg:gap-2 lg:h-full lg:overflow-hidden'>
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
