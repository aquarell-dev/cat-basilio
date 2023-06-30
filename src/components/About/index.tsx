import { FC } from 'react'
import AboutContent from './components/AboutContent'
import Avatar from './components/Avatar'

const About: FC = () => {
	return (
		<div className='md:h-screen mb-12 md:mb-0 flex flex-col-reverse md:flex-row md:space-x-10 justify-center items-center'>
			<AboutContent />
			<Avatar />
		</div>
	)
}

export default About
