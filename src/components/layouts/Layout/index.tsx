import { FC, ReactNode, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'
import Container from '../../ui/Container'
import Navbar from '../../ui/Navbar'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	const particlesInit = useCallback(async (main: Engine) => {
		await loadFull(main)
	}, [])

	return (
		<>
			<div className='min-h-screen bg-background text-text pb-8'>
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
							value: 100,
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
