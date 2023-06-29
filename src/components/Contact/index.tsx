import { FC } from 'react'
import ContactForm from './components/ContactForm'

const Contact: FC = () => {
	return (
		<div className='w-full p-6 bg-background-secondary'>
			<h3 className='font-primary text-2xl font-medium'>Contacts</h3>
			<ContactForm />
		</div>
	)
}

export default Contact
