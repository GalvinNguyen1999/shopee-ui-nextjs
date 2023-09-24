import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { topSearchs } from '@/utils/data'

const TopSearch = () => {
	return (
		<div className='mt-3 bg-white lg:max-w-[1200px] lg:mx-auto rounded lg:mt-5 lg:pb-2'>
			<div className='px-2.5 flex items-center justify-between py-2.5 md:py-6 lg:py-4'>
				<div className='text-[#ee4d2d] uppercase text-base'>tìm kiếm hàng đầu</div>
				<Link
					href='/'
					className='flex items-center underline gap-1 text-xs text-gray-600 capitalize lg:text-[#ee4d2d] lg:text-sm'
				>
					Xem thêm <IoIosArrowForward />
				</Link>
			</div>
			<div className='px-1.5 pb-2.5 flex items-center overflow-y-hidden overflow-x-auto whitespace-nowrap gap-1 lg:gap-3 lg:py-5'>
				{topSearchs.map((topSearch, i) => (
					<div className='border'>
						<Link href='/' className='relative rounded-lg'>
							<div
								className='relative bg-no-repeat bg-center bg-contain h-[7.5rem] w-[9.375rem] md:w-[18.625rem] lg:w-[11.25rem] lg:h-[11.25rem]'
								style={{
									backgroundImage: `url(${topSearch.imgUrl})`
								}}
							>
								<div
									className='absolute top-0 left-0 bg-[url("https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/df8261ce6f50ff673f8402a82d5dbb20.png")] bg-no-repeat w-6 h-[1.875rem] z-10'
									style={{
										backgroundSize: '1.5rem 1.875rem'
									}}
								></div>
								<div
									className='absolute bottom-0 left-0 right-0 text-center text-white font-medium text-[0.8125rem] hidden lg:block'
									style={{ backgroundColor: 'rgba(0,0,0,.26)' }}
								>
									Bán {topSearch.sold}k+ / tháng
								</div>
							</div>
							<div className='py-1.5 px-2 bg-[#00000008] lg:bg-white lg:pt-5'>
								<div className='text-xs h-8 break-words lg:text-lg'>{topSearch.name}</div>
								<div className='text-[0.625rem] leading-[0.875rem] h-3.5 mt-1.5 text-[#0000008a] lg:hidden'>
									Đã bán {topSearch.sold}k+
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopSearch
