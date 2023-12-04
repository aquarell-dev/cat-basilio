const userName = '1289028828'
const telegramToken = '6355042343:AAFKfEGBqtOFosTK5kRCIuaeQ1VBYjyceeE'

const useTelegram = () => {
  const sendMessage = async (message: string) => {
    const response = await fetch(
			`https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${userName}&text=${message}`,
			{ method: 'POST' }
    )

    if (response.status !== 200) {
      return false
    }

    return true
  }

  return { sendMessage }
}

export default useTelegram
