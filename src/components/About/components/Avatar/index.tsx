import { FC } from 'react'
import AvatarPhoto from '../../../../assets/avatar.jpg'

const Avatar: FC = () => {
	return (
		<div className='flex flex-col space-y-6'>
			<img
				className='h-64 w-64 rounded-full border'
				src={AvatarPhoto}
				alt='Ilya'
			/>
			<p className='text-xl font-primary text-center'>Russia, 🇷🇺</p>
		</div>
	)
}

export default Avatar
