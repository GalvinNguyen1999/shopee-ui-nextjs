import Image from 'next/image'

const SimpleBanner = () => {
	return (
		<div className='px-2 bg-white pb-2 lg:hidden'>
			<Image
				src='https://cf.shopee.vn/file/sg-50009109-b5fe25f23fe39ee9fa5d8a44a970f103'
				width={1200}
				height={360}
				alt='simple-banner'
				className='w-full pt-1 lg:hidden rounded-md'
			/>
		</div>
	)
}

export default SimpleBanner
