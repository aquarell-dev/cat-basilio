import { FC } from 'react'

import '../../../css/grid.css'
import Project from './components/project'
import { projects } from './projects.data'

const Projects: FC = () => {
  return (
    <div id='projects' className='projects-grid mb-8'>
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  )
}

export default Projects
