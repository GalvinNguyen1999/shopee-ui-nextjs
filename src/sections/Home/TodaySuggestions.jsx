import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { todaySuggestions } from '@/utils/data'

const TodaySuggestions = () => {
	return (
		<>
			<div className='mt-3 bg-white lg:max-w-[1200px] lg:mx-auto lg:mt-7'>
				<div className='capitalize flex justify-between items-center px-2.5 py-4 md:py-8 lg:py-4 lg:justify-center lg:border-b-4 lg:border-b-[#ee4d2d]'>
					<div className='text-sm md:text-base uppercase text-gray-500 font-medium lg:text-[#ee4d2d]'>
						gợi ý hôm nay
					</div>
					<Link
						href='/'
						className='flex items-center underline gap-1 text-xs text-gray-600 capitalize lg:text-[#ee4d2d] lg:text-sm lg:hidden'
					>
						Xem thêm <IoIosArrowForward />
					</Link>
				</div>

				<div>
					<div className='flex flex-wrap lg:pt-1.5'>
						{todaySuggestions.map((t, i) => (
							<Link
								key={i}
								href={'/'}
								className='p-[.1875rem] w-6/12 border border-gray-200 lg:w-2/12 lg:p-1.5'
							>
								<div className='relative w-full pt-[100%] flex-shrink-0'>
									<div>
										<img
											src={t.imgUrl}
											alt={t.description}
											className='inset-y-0 w-full h-full pointer-events-none object-contain absolute'
										/>
									</div>

									<div className='top-0 right-0 z-30 absolute w-[34px] h-8'>
										<svg
											width={34}
											height={36}
											viewBox='0 0 34 36'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M0 0H34V36L16.9991 32.2105L0 36V0Z'
												fill='#FCD511'
											/>
										</svg>
										<div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-xs/3 font-medium text-center'>
											<span className='mb-px text-[#ee4d2d]'>{t.discountTag}%</span>
											<span className='text-white'>GIẢM</span>
										</div>
									</div>

									<div className='top-0 left-0 z-30 absolute flex flex-col mt-1 ml-[-3px]'>
										<div className='mb-[0.3125rem] last:mb-0'>
											<div
												className='relative bg-contain bg-no-repeat'
												style={{
													backgroundImage:
														'url("https://down-vn.img.susercontent.com/file/847a7c7b8f9a78882268a0d824c86d1a")',
													width: 54,
													height: 18
												}}
											/>
										</div>
									</div>

									<div className='bottom-0 right-0 z-30 absolute pr-1 pb-1'>
										<div className='w-5 h-5 stroke-none'>
											<svg
												width={20}
												height={20}
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z'
													fill='black'
													fillOpacity='0.5'
												/>
												<path
													d='M7 6.12627C7 5.56829 7.4141 5.34009 7.91986 5.61909L14.6175 9.47896C15.1235 9.75795 15.1235 10.2143 14.6175 10.4933L7.91986 14.3809C7.41383 14.6599 7 14.4317 7 13.8737V6.12627Z'
													fill='white'
												/>
											</svg>
										</div>
									</div>
								</div>

								<div className='border-box flex flex-col p-2 max-w-full'>
									<div className='mb-2 last:mb-0 min-h-[28px]'>
										<div className='line-clamp-2 break-words max-h-7 text-xs leading-[0.875rem]'>
											{t.description}
										</div>
									</div>

									<div className='mb-2 last:mb-0 min-h-[16px]'>
										<div
											className='box-border flex h-4 text-[0.625rem] items-center overflow-hidden'
											aria-hidden='true'
										>
											<div className='max-w-full mr-1 last:mr-0 pointer-events-none text-ellipsis overflow-hidden h-4'>
												<div
													className='h-4 min-w-0 relative overflow-hidden font-medium text-[.625rem] leading-4 
																before:block before:h-2.5 before:bg-current before:absolute before:left-1 before:right-1 before:top-0 before:transform-none
																after:block after:h-2.5 after:bg-current after:absolute after:left-1 after:right-1 after:bottom-0'
													style={{ width: '100%', color: 'rgb(246, 145, 19)' }}
												>
													<svg className='w-1 h-4 absolute top-0 left-0' viewBox='-0.5 -0.5 4 16'>
														<path
															d='M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3'
															strokeWidth={1}
															transform=''
															stroke='currentColor'
															fill='rgb(246, 145, 19)'
														/>
													</svg>

													<div
														className='leading-4 h-4 whitespace-nowrap overflow-hidden text-ellipsis relative z-[1] mx-[0.1875rem] my-0 px-px py-0'
														style={{ color: 'white', backgroundColor: 'rgb(246, 145, 19)' }}
													>
														{t.discountLabel}% Giảm
													</div>

													<svg className='w-1 h-4 absolute top-0 right-0' viewBox='-0.5 -0.5 4 16'>
														<path
															d='M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3'
															strokeWidth={1}
															transform='rotate(180) translate(-3 -15)'
															stroke='currentColor'
															fill='rgb(246, 145, 19)'
														/>
													</svg>
												</div>
											</div>
										</div>
									</div>

									<div className='mb-2 last:mb-0 min-h-[20px]'>
										<div className='flex items-center justify-between w-full'>
											<div
												className=''
												style={{
													flexGrow: 1,
													flexShrink: 0,
													maxWidth: '161.333px',
													boxSizing: 'border-box'
												}}
											>
												<div className='font-normal text-[#ee4d2d] leading-none overflow-hidden whitespace-nowrap text-ellipsis'>
													<span aria-label='current price' />
													<span className='text-xs leading-[0.875rem] align-middle'>₫</span>
													<span
														className='text-base align-middle'
														style={{ lineHeight: '1.25rem' }}
													>
														{t.price.toLocaleString(3)}
													</span>
												</div>
											</div>

											<div
												className=''
												style={{
													flexShrink: 1,
													minWidth: 0,
													overflow: 'hidden',
													boxSizing: 'border-box'
												}}
											>
												<span className='block truncate text-[#0000008a] ml-0.5 text-[0.625rem] h-3'>
													Đã bán {t.sold.toLocaleString(3)}
												</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<Link
				href={'/'}
				className='mt-4 py-2 px-2.5 w-[351px] flex text-[#ee4d2d] border-[#ee4d2d] rounded-sm border lg:border-none lg:max-w-[24.375rem] justify-center mx-auto items-center lg:h-10 lg:text-[#555] shadow-md lg:mt-5 bg-white capitalize mb-[3.75rem] lg:mb-[4.375rem] hover:bg-[#00000005]'
			>
				xem thêm
			</Link>
		</>
	)
}

export default TodaySuggestions
