import Link from 'next/link'
import { helpCenter, cashs, shippings, follows, getTheApp, countrys } from '@/utils/data'

const HelpCenter = () => {
	return (
		<div className='hidden lg:block w-[75rem] mx-auto'>
			<div className='flex mx-[-.3125rem] p-[.3125rem]'>
				{helpCenter.map((h, i) => (
					<div key={i} className='w-[15.625rem] p-[0.3125rem]'>
						<div className='text-xs font-bold text-[rgba(0,0,0,0.87)] mt-10 mb-5 uppercase'>
							{h.title}
						</div>
						<ul className='mb-4'>
							{h?.helpCenterLink?.map((l, i) => (
								<li key={i} className='flex text-xs mb-3'>
									<Link href={l.href} className='text-[#000000a6] hover:text-[#ee4d2d]'>
										{l.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}

				<div className='w-[15.625rem] p-[0.3125rem]'>
					<div className='text-xs font-bold text-[rgba(0,0,0,0.87)] mt-10 mb-5 uppercase'>
						Thanh Toán
					</div>
					<ul className='flex flex-wrap'>
						{cashs.map((c, i) => (
							<li
								key={i}
								className='flex justify-center items-center w-[3.75rem] h-[1.875rem] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.2)] box-border overflow-hidden mr-2 mb-2 p-1 rounded-sm'
							>
								<Link href={c.href} className=''>
									<img src={c.imgUrl} alt='name' />
								</Link>
							</li>
						))}
					</ul>
					<div className='text-xs font-bold text-[rgba(0,0,0,0.87)] mt-10 mb-5 uppercase'>
						đơn vị vận chuyển
					</div>
					<ul className='flex mb-4 flex-wrap'>
						{shippings.map((c, i) => (
							<li
								key={i}
								className='flex justify-center items-center w-[3.75rem] h-[1.875rem] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.2)] box-border overflow-hidden mr-2 mb-2 p-1 rounded-sm'
							>
								<Link href={c.href} className=''>
									<img src={c.imgUrl} alt='name' />
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='w-[15.625rem] p-[0.3125rem]'>
					<div className='text-xs font-bold text-[rgba(0,0,0,0.87)] mt-10 mb-5 uppercase'>
						THEO DÕI CHÚNG TÔI TRÊN
					</div>
					<ul className='mb-4 flex-wrap'>
						{follows.map((c, i) => (
							<li key={i} className='flex items-center text-xs mt-3'>
								<Link href={c.href} className='flex'>
									<img src={c.imgUrl} alt='name' className='h-4 w-4 mr-2' />
									<span className='capitalize'>{c.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='w-[15.625rem] p-[0.3125rem]'>
					<div className='text-xs font-bold text-[rgba(0,0,0,0.87)] mt-10 mb-5 uppercase'>
						TẢI ỨNG DỤNG SHOPEE NGAY THÔI
					</div>
					<div className='mb-4 flex'>
						<Link href={'/'}>
							<img
								src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
								alt='qr'
							/>
						</Link>

						<div className='w-[4.75rem] flex flex-col align-top gap-1.5 ml-1.5'>
							{getTheApp.map((g, i) => (
								<Link
									href={g.href}
									key={i}
									className='w-[4.25rem] h-4 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.2)] mb-2 p-1 rounded-sm'
								>
									<img src={g.imgUrl} alt='app' />
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-between py-10 border-t border-gray-300 text-[#0000008a] text-sm'>
				<div className='flex-shrink-0 leading-5'>
					© 2023 Shopee. Tất cả các quyền được bảo lưu.
				</div>
				<div className='flex flex-wrap justify-center'>
					<div className='flex-grow flex-shrink-0 basis-auto text-right leading-5'>
						Quốc gia &amp; Khu vực:
					</div>
                    {countrys.map((c, i) => (
                        <div className='border-r border-gray-300 px-[5px] last-of-type:border-r-0' key={i}>
                            <Link className='' href={c.href}>{c.name}</Link>
                        </div>
                    ))}
				</div>
			</div>
		</div>
	)
}

export default HelpCenter
