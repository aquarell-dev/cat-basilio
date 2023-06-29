import { FC, InputHTMLAttributes, ReactNode } from 'react'
import {
	FieldPath,
	FieldValues,
	RegisterOptions,
	useFormContext,
} from 'react-hook-form'
import { cn } from '../../../../utils'

type ReactHookFormInputProps = {
	children?: ReactNode
	icon?: ReactNode
	name: string
	options?: RegisterOptions<FieldValues, FieldPath<FieldValues>>
} & InputHTMLAttributes<HTMLInputElement>

const ReactHookFormInput: FC<ReactHookFormInputProps> = ({
	children,
	icon,
	name,
	options,
	...props
}) => {
	const { register } = useFormContext()

	return (
		<div className='tabable relative flex border border-gray-300 rounded-md focus-within:border-blue-600 w-full'>
			{icon && (
				<div className='w-16 bg-gray-100 rounded-l-md flex items-center justify-center'>
					{icon}
				</div>
			)}
			<input
				type='text'
				id={props.id ?? 'floating'}
				className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				placeholder=''
				{...register(name, options)}
				{...props}
				autoComplete='off'
			/>
			<label
				htmlFor={props.id ?? 'floating'}
				className={cn(
					'absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 left-1',
					icon ? 'translate-x-16' : ''
				)}
			>
				{children}
			</label>
		</div>
	)
}

export default ReactHookFormInput
