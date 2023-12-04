import Layout from '@layouts/main-layout'
import About from '@screens/about'
import Contact from '@screens/contact'
import Projects from '@screens/projects'
import Skills from '@screens/skills'
import { FC } from 'react'

// todo implement contact form

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
