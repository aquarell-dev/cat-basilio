import { FC } from 'react'
import AvatarPhoto from '../../../../../assets/avatar.jpg'

// todo show actual russian flag on pc, emoji on mobile

const Avatar: FC = () => {
	return (
		<div className='flex flex-col space-y-6 mb-12 md:mb-0'>
			<img
				className='h-64 w-64 lg:w-80 lg:h-80 rounded-full border'
				src={AvatarPhoto}
				alt='Ilya'
			/>
			<p className='text-xl font-primary text-center'>
				Voronezh, &#x1F1F7;&#x1F1FA;
			</p>
		</div>
	)
}

export default Avatar
