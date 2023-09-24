import Carousel from '@/sections/Home/Carousel'
import Directory from '@/sections/Home/Directory'
import FlashSale from '@/sections/Home/FlashSale'
import SimpleBanner from '@/sections/Home/SimpleBanner'
import TopSearch from '@/sections/Home/TopSearch'
import Voucher from '@/sections/Home/Voucher'

export default function Home() {
	return (
		<>
			<div className='bg-white lg:pt-[9.3125rem] shadow-sm'>
				<Carousel />
				<Voucher />
			</div>
			<SimpleBanner />
			<Directory />
			<FlashSale />
			<TopSearch />
		</>
	)
}
