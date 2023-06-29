import { FC } from 'react'
import { cn } from '../../../../../utils'
import { Button } from '../../button.types'

const SecondaryButton: FC<Button> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'py-2 px-4 font-primary bg-secondary-button custom-transition hover:bg-zinc-800 outline-none rounded-sm text-lg z-20',
				props.disabled ? 'cursor-default' : 'cursor-pointer',
				props.className
			)}
			style={{
				background: props.disabled
					? 'linear-gradient(to right top, #18181b, #18181b 48%, white 49%, white 51%, #18181b 52%, #18181b)'
					: '',
			}}
		>
			{children}
		</button>
	)
}

export default SecondaryButton
