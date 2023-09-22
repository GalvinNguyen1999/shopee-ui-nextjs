import Image from 'next/image'
import Link from 'next/link'
import { vouchers } from '@/utils/data'

const Voucher = () => {
	return (
		<div className='mt-4 h-[13.25rem] lg:max-w-[1200px] lg:mx-auto lg:h-[6.75rem]'>
			<div className='w-full h-full flex-col flex flex-wrap overflow-x-auto overflow-y-hidden gap-10 items-center lg:gap-0 lg:overflow-hidden'>
				{vouchers.map((voucher, index) => (
					<Link
						href={voucher.href}
						key={index}
						className='flex flex-col justify-center items-center lg:h-full lg:w-[9.375rem]'
					>
						<Image src={voucher.name} alt='voucher' width={42} height={42} className='mb-1' />
						<p className='text-center text-[.625rem] lg:text-[0.8125rem] lg:max-w-[9.375rem] lg:h-full max-h-[2.625rem] text-ellipsis overflow-hidden whitespace-pre-line leading-[.875rem] break-words'>
							{voucher.description}
						</p>
					</Link>
				))}
			</div>
			<Image
				src='https://cf.shopee.vn/file/sg-50009109-b5fe25f23fe39ee9fa5d8a44a970f103'
				width={1200}
				height={360}
				alt='simple-banner'
				className='w-full pt-1 lg:hidden'
			/>
		</div>
	)
}

export default Voucher
