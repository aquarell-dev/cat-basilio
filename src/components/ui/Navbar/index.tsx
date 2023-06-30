import { FC } from 'react'

const links: { link: string; scrollId: string }[] = [
	{ link: 'Projects', scrollId: '#projects' },
	{ link: 'Skills', scrollId: '#skills' },
]

const Navbar: FC = () => {
	return (
		<div className='nav flex justify-between items-center py-4 font-primary'>
			<h1 className='text-xl md:text-2xl lg:text-3xl select-none'>
				Cat Basilio
			</h1>
			<div className='flex space-x-4 select-none'>
				{links.map((link, idx) => (
					<div
						key={idx}
						onClick={() =>
							document
								.querySelector(link.scrollId)
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						<p className='text-sm md:text-lg lg:text-xl cursor-pointer hover-underline-animation'>
							{link.link}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Navbar
