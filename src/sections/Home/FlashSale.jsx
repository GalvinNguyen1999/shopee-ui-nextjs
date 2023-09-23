import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { flashSales } from '@/utils/data'

const FlashSale = () => {
	return (
		<div className='bg-white mt-2 lg:max-w-[1200px] lg:mx-auto lg:mt-5'>
			<div className='px-2.5 flex items-center justify-between lg:py-2.5'>
				<div className='flex items-center gap-2'>
					<div
						className='bg-[url("https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/flashsale/32c4c1306cc25bfb456cc4001ece216a.png")] w-[5.375rem] h-[2.625rem] bg-no-repeat'
						style={{ backgroundSize: '5.375rem 1.375rem', backgroundPosition: '50% 50%' }}
					></div>
					<div className='flex items-center gap-1'>
						<div className='bg-black text-white rounded-md px-1 text-center'>00</div>
						<div className='bg-black text-white rounded-md px-1 text-center'>00</div>
						<div className='bg-black text-white rounded-md px-1 text-center'>00</div>
					</div>
				</div>
				<Link
					href='/'
					className='flex items-center underline gap-1 text-xs text-gray-600 capitalize lg:text-[#ee4d2d] lg:text-sm'
				>
					Xem tất cả <IoIosArrowForward />
				</Link>
			</div>
			<div className='flex items-center overflow-y-hidden overflow-x-auto whitespace-nowrap mt-[0.3125rem] px-2'>
				{flashSales.map((flashSale, i) => (
					<div
						className='flex flex-col cursor-pointer w-[8.6875rem] h-[12.125rem] mx-1 lg:w-[12.5rem] lg:h-[15.5rem] lg:px-[0.9375rem]'
						key={i}
					>
						<div
							className='bg-cover bg-center bg-no-repeat relative w-[8.6875rem] h-[8.6875rem] lg:h-[10.625rem]'
							style={{
								backgroundImage: `url(${flashSale.imgUrl})`
							}}
						>
							<div className='absolute top-2.5 max-w-[70%] h-4 text-xs leading-[0.875rem] text-[#d0011b] font-medium py-0 px-1 rounded-r-sm bg-current -left-[0.1875rem] flex items-center before:absolute before:left-0 before:-bottom-[0.1875rem] before:border-t-[0.1875rem] before:border-l-[0.1875rem] before:brightness-75'>
								<div className='bg-[url("https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/flashsale/1ea7594a0e6dbc0cdb8640b83a1079bb.png")] bg-no-repeat bg-contain h-2 w-5 relative' />
							</div>
							<div className='absolute top-0 right-0 z-10'>
								<div
									className='w-9 h-8 relative  pt-1 px-0.5 pb-[0.1875rem] font-bold after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0 after:border-solid after:border-transparent after:border-t-0 after:border-r-[18px] after:border-b-[4px] after:border-l-[18px]'
									style={{ backgroundColor: 'rgba(255, 212, 36, 0.9)' }}
								>
									<div className='flex flex-col text-center relative font-normal text-xs leading-[0.8125rem] text-[#ee4d2d] uppercase'>
										<span>{flashSale.discount}%</span>
										<span className='text-white'>Giảm</span>
									</div>
								</div>
							</div>
							<div className='absolute z-10 left-0 top-0 w-full h-full'>
								<div
									className='bg-contain bg-no-repeat absolute top-0 left-0 w-full  h-full z-10 opacity-100 transition-all duration-200 ease-in'
									style={{
										backgroundImage:
											'url("https://down-vn.img.susercontent.com/file/vn-50009109-b2bdaf683839a082eace570c461bf8b8_tn")'
									}}
								></div>
							</div>
						</div>
						<div className='py-2.5 flex flex-col'>
							<div className='text-center font-medium text-lg text-[#ee4d2d] h-[1.6875rem] lg:mb-2'>
								<span className='mr-0.5 font-medium text-xs'>₫</span>
								<span>{flashSale.price.toLocaleString()}</span>
							</div>
							<div className='flex justify-center items-center'>
								<div className='w-[7.1875rem] text-center'>
									<div className='relative w-full h-3'>
										<div className='w-3.5 h-4 bg-[url("https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/flashsale/c5316dd01de2b0d41d267a57f5b32844.png")] bg-no-repeat bg-contain absolute -top-1.5 left-[.1875rem] z-10'></div>
										<div className='flex items-center justify-center absolute left-3 top-0 text-white text-[0.625rem] font-bold uppercase z-30 shadow-sm'>
											Đã bán 69
										</div>
										<div className='absolute left-0 top-0 h-3 w-[69%] rounded-l-md bg-[url("https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/flashsale/ac7f81d9ee062223753413ec98497a86.png")] bg-cover bg-no-repeat z-20'></div>
										<div className='rounded-md bg-[#ffbda6] z-10 absolute left-0 top-0 w-full h-full'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FlashSale
