import { FC } from 'react'

const links: string[] = ['About', 'Projects', 'Skills', 'Contacts']

const Navbar: FC = () => {
	return (
		<div className='flex justify-between items-center py-4 font-primary'>
			<h1 className='text-3xl z-20 select-none'>Cat Basilio</h1>
			<div className='flex space-x-4 select-none'>
				{links.map((link, idx) => (
					<p className='text-xl z-20 hover-underline-animation' key={idx}>
						{link}
					</p>
				))}
			</div>
		</div>
	)
}

export default Navbar
