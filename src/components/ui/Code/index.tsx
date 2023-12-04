import { FC } from 'react'

const Code: FC<{ text: string }> = ({ text }) => {
  return (
    <span className='bg-zinc-800 p-0.5 font-medium rounded text-slate-200'>
      {text}
    </span>
  )
}

export default Code
