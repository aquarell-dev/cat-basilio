import { FC } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { PrimaryButton } from '../../../ui/Button'
import useTelegram from '../../hooks/useTelegram'
import {
	ReactHookFormInput,
	ReactHookFormTextArea,
} from '../ReactHookFormComponents'

type FormInputs = {
	name: string
	contact: string
	subject: string
	message: string
}

const ContactForm: FC = () => {
	const methods = useForm<FormInputs>()

	const { handleSubmit } = methods

	const { sendMessage } = useTelegram()

	const onSubmit: SubmitHandler<FormInputs> = data =>
		sendMessage('new' + data.name)

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-8 gap-y-4 my-4'
			>
				<div className='flex flex-col space-y-4 w-full'>
					<ReactHookFormInput
						name='name'
						options={{ required: 'Name is required' }}
						placeholder='Name'
					/>
					<ReactHookFormInput
						name='contact'
						options={{ required: 'Contact is required' }}
						placeholder='Your Contact(e.g. telegram, mail)'
					/>
					<PrimaryButton className='hidden md:block' type='submit'>
						Submit
					</PrimaryButton>
				</div>
				<div className='flex flex-col space-y-4 w-full'>
					<ReactHookFormInput name='subject' placeholder='Subject' />
					<ReactHookFormTextArea name='message' placeholder='Message' />
					<PrimaryButton className='md:hidden' type='submit'>
						Submit
					</PrimaryButton>
				</div>
			</form>
		</FormProvider>
	)
}

export default ContactForm
