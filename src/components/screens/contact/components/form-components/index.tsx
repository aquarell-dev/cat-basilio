import { FC, InputHTMLAttributes } from 'react'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form'

import { cn } from '../../../../../utils'

type ReactHookFormProps<T extends HTMLElement> = {
	name: string
	options?: RegisterOptions<FieldValues, FieldPath<FieldValues>>
} & InputHTMLAttributes<T>

export const ReactHookFormInput: FC<ReactHookFormProps<HTMLInputElement>> = ({
  name,
  options,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <input
      type='text'
      className={cn(
        'px-4 py-2 bg-background font-secondary outline-none',
        errors[name] && 'border border-red-500'
      )}
      placeholder={errors[name] ? 'error' : props.placeholder}
      {...register(name, options)}
      {...props}
    />
  )
}

export const ReactHookFormTextArea: FC<
	ReactHookFormProps<HTMLTextAreaElement>
> = ({ name, options, ...props }) => {
  const { register } = useFormContext()

  return (
    <textarea
      type='text'
      className='px-4 py-2 h-24 bg-background outline-none font-secondary'
      {...register(name, options)}
      {...props}
    />
  )
}
