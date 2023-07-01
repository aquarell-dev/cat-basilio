import { FC, ReactNode, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Container from '../../ui/Container'
import Navbar from '../../ui/Navbar'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	const particlesInit = useCallback(async (main: Engine) => {
		await loadFull(main)
	}, [])

	const { desktop, tablet, laptop } = useMediaQuery()

	return (
		<>
			<div className='z-over min-h-screen bg-background text-text pb-8'>
				<Container>
					<Navbar />
					{children}
				</Container>
			</div>
			<Particles
				id='tsparticles'
				init={particlesInit}
				options={{
					background: {
						color: 'inherit',
					},
					fpsLimit: 120,
					interactivity: {
						detectsOn: 'canvas',
						events: {
							resize: true,
						},
					},
					particles: {
						number: {
							value: desktop ? 120 : laptop ? 80 : tablet ? 50 : 30,
						},
						links: {
							distance: 150,
							enable: true,
						},
						move: {
							enable: true,
						},
						size: {
							value: 1,
						},
						shape: {
							type: 'circle',
						},
					},
				}}
			/>
		</>
	)
}

export default Layout
