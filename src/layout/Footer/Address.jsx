import Link from 'next/link'
import { policys } from '@/utils/data'

const Address = () => {
	return (
		<div className='lg:bg-[#f5f5f5] lg:text-[#000000a6] lg:pt-[2.625rem] lg:pb-[2.3125rem] lg:text-xs'>
			<div className='lg:w-[75rem] lg:mx-auto'>
				<div className='flex flex-wrap text-center lg:justify-center lg:mb-10'>
					{policys.map((p, i) => (
						<div
							className='w-1/2 lg:w-auto relative 
                                        after:absolute after:bg-[#0000001f] after:left-0 after:top-2 after:w-[1px] after:h-3.5 odd:after:content-none 
                                        lg:after:content-none lg:border-r lg:px-[1.5625rem] lg:uppercase lg:text-xs'
							key={i}
						>
							<Link
								href={p.href}
								className='max-w-[90%] lg:max-w-full inline-flex text-[0.625rem] font-normal min-h-[2.25rem] lg:min-h-fit lg:text-xs'
							>
								<img src={p.iconUrl} alt={p.title} className='w-3 h-3 mr-1 lg:hidden' />
								<div>{p.title}</div>
							</Link>
						</div>
					))}
				</div>

				<div className='border-t border-gray-200 pt-2.5 lg:border-t-0 lg:flex lg:justify-center'>
					<div className='flex justify-center'>
						<Link
							className='mx-3'
							href='http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=18375'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='w-[7.5rem] h-[2.8125rem]'
								src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/d7a172fea14bd73f86a6e77feea33bbc.png'
							/>
						</Link>
						<Link
							className='mx-3'
							href='http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=29'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='w-[7.5rem] h-[2.8125rem]'
								src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/d7a172fea14bd73f86a6e77feea33bbc.png'
							/>
						</Link>
					</div>

					<div className='flex justify-center'>
						<Link
							className='mx-3'
							href='https://shopee.vn/docs/170'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='w-[4.25rem] h-[4.25rem] lg:w-12 lg:h-12'
								src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/8bb670a16c842d5af3b7aa4cbb97f655.png'
							/>
						</Link>
					</div>
				</div>

				<div className='flex justify-between items-center text-center relative'>
					<div className='p-2.5 w-full text-[.625rem] font-normal lg:text-xs'>
						<p className='mb-3 lg:mb-[1.5625rem] lg:mt-2'>Công ty TNHH Shopee</p>
						<p className='lg:mt-2'>
							Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận
							Ba Đình, Hà Nội
						</p>
						<p className='lg:mt-2'>Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
						<p className='lg:mt-2'>
							Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày
							10/02/2015
						</p>
						<p className='lg:mt-2'>
							© 2015 - Bản quyền thuộc về Công ty TNHH Shopee
							<br />
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Address
