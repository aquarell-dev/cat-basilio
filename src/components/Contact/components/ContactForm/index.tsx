import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormInputs = {
	name: string
	contact: string
	message: string
}

const ContactForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>()

	const onSubmit: SubmitHandler<FormInputs> = data => console.log(data)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex justify-center items-start'
		>
			<div className='flex flex-col space-y-4'>
				{/* <ReactHookFormInput
					name='name'
					options={{ required: true }}
					// placeholder='Name'
				/>
				<ReactHookFormInput
					name='contact'
					options={{ required: true }}
					// placeholder='Your Contact(e.g. telegram, mail)'
				/> */}
			</div>
		</form>
	)
}

export default ContactForm
