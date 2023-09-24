import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Carousel from './Carousel'
import { shopeeMailSliders, shopeeMails } from '@/utils/data'

const className = 'h-[6.625rem] md:h-[10.875rem] lg:h-[29rem]'

const ShopeeMail = () => {
	return (
		<div className='mt-3 bg-white lg:max-w-[1200px] lg:mx-auto'>
			<div className='px-2.5 flex items-center justify-between py-2.5 md:py-6 lg:py-4 border-b lg:h-[3.75rem] lg:px-5'>
				<div className='flex'>
					<Link
						href='/'
						className='text-[#d0011b] uppercase text-base lg:font-medium lg:text-[1.0625rem] lg:leading-[1.0625rem] lg:self-center'
					>
						Shopee Mall
					</Link>

					<div className='flex-1 font-normal capitalize hidden lg:flex ml-[15px] pl-[15px] border-l-[#d8d8d8] border-l border-solid'>
						<div
							className='flex items-center text-[#333] whitespace-nowrap h-5 mr-[15px]'
							tabIndex={0}
						>
							<img
								className='h-[1.0625rem] w-[1.0625rem] mr-1.5'
								src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png'
								role='presentation'
							/>
							7 ngày miễn phí trả hàng
						</div>
						<div
							className='flex items-center text-[#333] whitespace-nowrap h-5 mr-[15px]'
							tabIndex={0}
						>
							<img
								className='h-[1.0625rem] w-[1.0625rem] mr-1.5'
								src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png'
								role='presentation'
							/>
							Hàng chính hãng 100%
						</div>
						<div
							className='flex items-center text-[#333] whitespace-nowrap h-5 mr-[15px]'
							tabIndex={0}
						>
							<img
								className='h-[1.0625rem] w-[1.0625rem] mr-1.5'
								src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png'
								role='presentation'
							/>
							Miễn phí vận chuyển
						</div>
					</div>
				</div>
				<Link
					href='/'
					className='flex items-center underline gap-1 text-xs text-gray-600 capitalize lg:text-[#ee4d2d] lg:text-sm'
				>
					Xem thêm <IoIosArrowForward />
				</Link>
			</div>
			<div className='flex justify-between items-center py-2 px-5 bg-white lg:hidden'>
				<div className='flex items-center text-xs font-normal'>
					<AiOutlineCheckCircle className='text-[#d0011b] mr-1' /> Miễn phí trả hàng
				</div>
				<div className='flex items-center text-xs font-normal'>
					<AiOutlineCheckCircle className='text-[#d0011b] mr-1' /> Chính hãng 100%
				</div>
				<div className='flex items-center text-xs font-normal'>
					<AiOutlineCheckCircle className='text-[#d0011b] mr-1' /> Giao miễn phí
				</div>
			</div>

			<div className='lg:h-[475px]'>
				<div className='pb-2 px-2.5 lg:w-[390px] lg:h-[452px] lg:inline-block lg:bg-white lg:align-top lg:pl-2.5 lg;pr-0 lg:py-2.5'>
					<div className='w-full'>
						<Carousel slides={shopeeMailSliders} className={className} />
					</div>
				</div>

				<div className='overflow-auto ml-2.5 pb-2 lg:w-[50rem] lg:inline-block lg:overflow-hidden lg:h-full lg:ml-0 lg:pt-2'>
					<div className='w-full flex overflow-x-scroll lg:h-full lg:flex-wrap lg:overflow-hidden'>
						{shopeeMails.map((shopeeMail, i) => (
							<div key={i} className='flex-[1_0_auto] pr-2 lg:pr-0 lg:pb-4'>
								<Link href='/' className='relative block'>
									<div className='relative'>
										<div
											className='w-[8.375rem] lg:w-[180px] h-40 lg:h-[216px] border bg-[50%] rounded-sm border-solid border-[rgba(0,0,0,0.09)] lg:border-0'
											style={{
												backgroundImage: `url(${shopeeMail.imgUrl})`,
												backgroundSize: 'contain',
												backgroundRepeat: 'no-repeat'
											}}
										/>
									</div>
									<span className='font-bold text-xs absolute text-[#d0011b] overflow-hidden text-ellipsis whitespace-nowrap text-center bottom-2 left-5 lg:text-lg lg:font-normal'>
										Giảm đến 4 triệu
									</span>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopeeMail
