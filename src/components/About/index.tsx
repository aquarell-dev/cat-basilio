import { FC } from 'react'
import AboutContent from './components/AboutContent'
import Avatar from './components/Avatar'

const About: FC = () => {
	return (
		<div className='h-[90vh] flex justify-center items-center space-x-40'>
			<AboutContent />
			<Avatar />
		</div>
	)
}

export default About
