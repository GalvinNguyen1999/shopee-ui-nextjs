import { policys } from '@/utils/data'
import Link from 'next/link'
import FooterTop from './FooterTop'
import FooterDirectory from './FooterDirectory'
import HelpCenter from './HelpCenter'

const Footer = () => {
	return (
		<div className='bg-white lg:border-t-4 lg:border-[#ee4d2d]'>
			<FooterTop />
            <FooterDirectory />
			<HelpCenter />
			<div className='flex flex-wrap text-center'>
				{policys.map((p, i) => (
					<div
						className='w-1/2 relative after:absolute after:bg-[#0000001f] after:left-0 after:top-2 after:w-[1px] after:h-3.5 odd:after:content-none'
						key={i}
					>
						<Link
							href={p.href}
							className='max-w-[90%] inline-flex text-[0.625rem] font-normal min-h-[2.25rem]'
						>
							<img src={p.iconUrl} alt={p.title} className='w-3 h-3 mr-1' />
							<span>{p.title}</span>
						</Link>
					</div>
				))}
			</div>

			<div className='border-t border-gray-200 pt-2.5'>
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
							className='w-[4.25rem] h-[4.25rem]'
							src='https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/homepage/8bb670a16c842d5af3b7aa4cbb97f655.png'
						/>
					</Link>
				</div>
			</div>

			<div className='flex justify-between items-center text-center relative'>
				<div className='p-2.5 w-full text-[.625rem] font-normal'>
					<p className='mb-3'>Công ty TNHH Shopee</p>
					<p className='zX7n0E'>
						Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba
						Đình, Hà Nội
					</p>
					<p className='zX7n0E'>Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
					<p className='zX7n0E'>
						Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày
						10/02/2015
					</p>
					<p className='zX7n0E'>
						© 2015 - Bản quyền thuộc về Công ty TNHH Shopee
						<br />
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
