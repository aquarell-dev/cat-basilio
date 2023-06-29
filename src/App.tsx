import { FC } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Layout from './components/layouts/Layout'

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
