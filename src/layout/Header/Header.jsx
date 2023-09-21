import { CiSearch } from 'react-icons/ci'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi'
import { FiUser, FiSearch } from 'react-icons/fi'
import { SiShopee } from 'react-icons/si'
import { navigation01, navigation02, navigation03 } from '@/utils/data'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='bg-blue-400 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bg-gradient-to-b from-[#f53d2d] to-[#f63] text-white z-10'>
			<nav className='hidden lg:max-w-[1200px] lg:h-[2.125rem] lg:mx-auto lg:items-center lg:justify-between lg:text-[0.8125rem] lg:flex'>
				<div className='flex items-center gap-2'>
					{navigation01.map((item, index) => (
						<Link
							href={item.href}
							key={index}
							className='p-1 relative after:absolute after:-right-1.5 after:top-1/4 after:w-0 after:h-[0.9375rem] after:border-l after:border-r after:border-[#ffffff38] hover:opacity-80 transition-all'
						>
							{item.name}
						</Link>
					))}
					<div className='ml-1 flex items-center gap-1'>
						<span className='p-1'>Kết nối</span>
						<BiLogoFacebookCircle size={20} className='cursor-pointer' />
						<BiLogoInstagramAlt size={20} className='cursor-pointer' />
					</div>
				</div>
				<div className='flex items-center gap-2'>
					{navigation02.map((item, index) => (
						<Link
							href={item.href}
							key={index}
							className='p-1 flex items-center gap-1 hover:opacity-80 cursor-pointer'
						>
							{!!item.iconBefore && item.iconBefore}
							{item.name}
							{!!item.iconAfter && item.iconAfter}
						</Link>
					))}
					<div className='flex items-center gap-4 pr-2.5'>
						<span className='cursor-pointer relative after:absolute after:-right-2 after:top-0.5 after:w-0 after:h-[0.9375rem] after:border-l after:border-r after:border-[#ffffff38] hover:opacity-80 transition-all'>
							Đăng Ký
						</span>
						<span className='cursor-pointer hover:opacity-80'>Đăng Nhập</span>
					</div>
				</div>
			</nav>

			<nav className='w-full h-14 bg-transparent flex items-center z-10 pl-2.5 pr-3 gap-4 lg:pl-0 lg:pr-4 lg:h-[5.3125rem] lg:max-w-[1200px] lg:mx-auto'>
				<div className='items-end gap-1 hidden lg:flex'>
					<SiShopee size={40} />
					<div className='text-3xl font-normal'>Shopee</div>
				</div>

				<div className='flex-1 lg:mt-3'>
					<form className='h-9 flex flex-1 items-center bg-white rounded-sm px-2 lg:py-5 text-gray-500 max-w-[52.5rem]'>
						<CiSearch className='w-3.5 h-3.5 lg:hidden' />
						<input
							type='email'
							className='w-full pl-2 placeholder:text-red-400 lg:placeholder:text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap outline-none text-base'
							placeholder='Shopee bao ship 0Đ - Đăng ký ngay!'
						/>
						<button className='md:hidden lg:bg-[#fb5533] lg:flex lg:py-2 lg:px-6 text-white hover:opacity-80'>
							<FiSearch className='w-3.5 h-3.5' />
						</button>
					</form>

					<div className='hidden lg:flex gap-4'>
						{navigation03.map((item, index) => (
							<Link href={item.href} key={index} className='text-xs my-1 hover:opacity-80'>
								{item.name}
							</Link>
						))}
					</div>
				</div>

				<PiShoppingCartSimpleLight size={24} className='lg:w-8 lg:h-8 lg:mr-14' />
				<FiUser size={24} className='lg:hidden' />
			</nav>
		</header>
	)
}

export default Header
