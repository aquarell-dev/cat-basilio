import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { tailwindMerge } from '../../../utils'

const buttonVariants = cva(
	'py-2 px-4 font-primary custom-transition font-medium outline-none rounded-sm text-lg z-20',
	{
		variants: {
			variant: {
				primary: 'bg-primary-button hover:bg-emerald-300 text-background',
				secondary: 'bg-secondary-button text-white hover:bg-zinc-800',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	}
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, children, ...props }, ref) => {
		const { style, ...rest } = props

		return (
			<button
				ref={ref}
				className={tailwindMerge(
					buttonVariants({ variant, className }),
					props.disabled ? 'cursor-default' : 'cursor-pointer'
				)}
				style={{
					background: props.disabled
						? 'linear-gradient(to right top, #18181b, #18181b 48%, white 49%, white 51%, #18181b 52%, #18181b)'
						: '',
					...style,
				}}
				{...rest}
			>
				{children}
			</button>
		)
	}
)

export default Button
