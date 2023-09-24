import CarouselVoucher from '@/sections/Home/CarouselVoucher'
import Directory from '@/sections/Home/Directory'
import FlashSale from '@/sections/Home/FlashSale'
import ShopeeMail from '@/sections/Home/ShopeeMail'
import SimpleBanner from '@/sections/Home/SimpleBanner'
import TopSearch from '@/sections/Home/TopSearch'

export default function Home() {
	return (
		<>
			<CarouselVoucher />
			<SimpleBanner />
			<Directory />
			<FlashSale />
			<TopSearch />
			<ShopeeMail />
		</>
	)
}
