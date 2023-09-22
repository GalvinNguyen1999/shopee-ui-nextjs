import Carousel from '@/sections/Home/Carousel'
import Voucher from '@/sections/Home/Voucher'

export default function Home() {
	return (
		<>
			<div className='bg-white lg:pt-[9.3125rem] shadow-sm'>
				<Carousel />
				<Voucher />
			</div>
		</>
	)
}
