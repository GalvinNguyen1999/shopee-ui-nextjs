import Link from 'next/link'
import { navigationFooter } from '@/utils/data'

const FooterDirectory = () => {
	return (
		<div className='hidden lg:block w-[75rem] mt-[3.75rem] mx-auto mb-[0.625rem] pb-[3.75rem]'>
			<div className='font-normal text-[#0000008a] text-sm'>Danh Mục</div>
			<div className='flex'>
				{navigationFooter.map((d, i) => (
					<div className='w-1/5 p-[0.3125rem] mt-2.5' key={i}>
						<div className='text-xs'>
							<Link
								href={'/'}
								className='text-[#0000008a] font-bold uppercase'
							>
								{d.title}
							</Link>

							<div className='flex flex-wrap w-full mb-2.5 leading-6'>
								{d.directory.map((l, i) => (
									<Link key={i} href={l.href} className='text-[#0000008a] hover:text-[#ee4d2d]'>
										{l.name}
										<span>&nbsp;|&nbsp;</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FooterDirectory
