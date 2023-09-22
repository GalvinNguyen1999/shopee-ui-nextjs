import Banner from '@/sections/Home/Banner'
import Voucher from '@/sections/Home/Voucher'

export default function Home() {
	return (
		<>
			<div className='bg-transparent lg:bg-white lg:pt-[9.3125rem] shadow-sm'>
				<Banner />
				<Voucher />
			</div>
		</>
	)
}
