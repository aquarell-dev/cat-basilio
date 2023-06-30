import { HTMLProps } from 'react'

export type Button = HTMLProps<HTMLButtonElement> & {
	type?: 'submit' | 'reset' | 'button' | undefined
}
