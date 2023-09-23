import { directorys } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

const Directory = () => {
	return (
		<div className='hidden lg:block lg:max-w-[1200px] lg:mt-5 lg:bg-white lg:shadow-sm lg:rounded-sm lg:mx-auto lg:min-h-[18.875rem]'>
			<div className='px-5 h-[3.75rem] text-base font-medium text-gray-400 flex items-center uppercase'>
				Danh Mục
			</div>
			<div className='h-full overflow-hidden'>
				<div className='h-[18.875rem] flex flex-wrap'>
					{directorys.map((directory, i) => (
						<Link
							key={i}
							href={directory.href}
							className='h-[9.4375rem] w-[7.5rem] flex flex-col justify-center items-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'
						>
							<Image
								src={directory.imgUrl}
								alt={directory.description}
								width={320}
								height={320}
								className='w-[70%]'
							/>
							<span className='w-[90%] text-center text-sm h-10 break-words overflow-hidden text-ellipsis'>
								{directory.description}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Directory
