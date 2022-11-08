import React from 'react'
import "../styles/Header.css"

const Header = ({ title, about, subtitle, support }) => {
	return (
		<div className='shadow-xl shadow-slate-300 HEADER flex items-center justify-center text-slate-900 h-[38rem]'>
			<div className='lg:w-[50%] mt-20 w-[95%] gap-12 py-6 px-6 flex flex-col bg-slate-200 bg-opacity-70 backdrop-blur-sm rounded-md'>
				<div className='w-full justify-center flex'>
					<div className=''>
						<h1 className='text-6xl font-bold'>{title}</h1>
						<span className='font-medium font-serif text-3xl text-slate-800'>{subtitle}</span>
					</div>
				</div>
				<div className='w-full flex justify-center'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
						<p className='text-lg'>{about}</p>
						<p className='text-2xl'>{support}</p>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Header