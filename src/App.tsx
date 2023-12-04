import { FC } from 'react'
import Layout from './components/layouts/layout'
import About from './components/screens/about'
import Contact from './components/screens/contact'
import Projects from './components/screens/projects'
import Skills from './components/screens/skills'

const App: FC = () => {
	return (
		<Layout>
			<About />
			<Projects />
			<Skills />
			<Contact />
		</Layout>
	)
}

export default App
