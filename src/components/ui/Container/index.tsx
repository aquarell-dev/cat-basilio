import { FC, ReactNode } from 'react'

const Container: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className='mx-4 md:mx-8 xl:mx-16'>{children}</div>
}

export default Container
