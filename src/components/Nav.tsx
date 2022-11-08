import React from 'react';

const Nav = (props) => {

	return (
		<div className='select-none fixed w-screen h-20 bg-slate-100 z-50'>
			<ul className='flex text-[1.2em] items-center h-full gap-8'>
				<li className='font-bold text-3xl ml-6'>{props.brand}</li>
				{props.links.map(link => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<li><a className={`hover:text-yellow-600 font-medium ${link.disabled ? "cursor-default text-gray-500 hover:text-gray-500" : ''}`} href={link.disabled ? undefined : link.href}>{link.name}</a></li>
				))}
			</ul>
		</div>
	)
}

export default Nav;