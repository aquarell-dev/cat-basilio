import { FC } from 'react'
import { cn } from '../../../../../utils'
import { Button } from '../../button.types'

const PrimaryButton: FC<Button> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'py-2 px-4 font-primary bg-primary-button custom-transition hover:bg-emerald-300 outline-none rounded-sm text-lg z-20 text-background font-medium',
				props.disabled ? 'cursor-default' : 'cursor-pointer',
				props.className
			)}
			style={{
				background: props.disabled
					? 'linear-gradient(to right top, #fdfdfc, #fdfdfc 48%, black 49%, black 51%, #fdfdfc 52%, #fdfdfc)'
					: '',
			}}
		>
			{children}
		</button>
	)
}

export default PrimaryButton
