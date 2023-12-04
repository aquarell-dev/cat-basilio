import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tailwindMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
