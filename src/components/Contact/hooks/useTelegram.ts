const userName = '1289028828'
const telegramToken = '6355042343:AAFKfEGBqtOFosTK5kRCIuaeQ1VBYjyceeE'

const useTelegram = () => {
	const sendMessage = async (message: string) => {
		const response = await fetch(
			`https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=EazyCod&text=Привет%20мир`,
			{ method: 'POST' }
		)
	}

	return { sendMessage }
}

export default useTelegram
