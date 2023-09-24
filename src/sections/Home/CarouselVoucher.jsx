import Carousel from './Carousel'
import Voucher from './Voucher'
import Image from 'next/image'
import { slides } from '@/utils/data'

const CarouselVoucher = () => {
	const className = 'max-w-[1200px] h-[12.5rem] sm:h-[26.5625rem] lg:h-[14.6875rem] w-full relative group'
	
	return (
		<div className='bg-white lg:pt-[9.3125rem] shadow-sm'>
			<div className='w-full min-h-[12.5rem] md:min-h-80 lg:h-[14.6875rem] lg:flex lg:gap-1 lg:max-w-[1200px] lg:mx-auto'>
				<Carousel slides={slides} className={className} />
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
			<Voucher />
		</div>
	)
}

export default CarouselVoucher
