import { FC } from 'react'

import SkillGroup from './components/skill-group'

const Skills: FC = () => {
  return (
    <div
      id='skills'
      className='relative w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-8'
    >
      <SkillGroup
        title='Front-end Skills'
        skills={['React.js', 'Next.js', 'TailwindCSS', 'SCSS', 'Redux Toolkit']}
      />
      <SkillGroup
        title='Back-end Skills'
        skills={['Django', 'PostgreSQL', 'Mongo DB', 'Server Handling', 'DSA']}
      />
      <SkillGroup
        title='Soft Skills'
        skills={[
          'Communication',
          'Problem Solving',
          'Teamwork',
          'Adaptibility',
        ]}
      />
    </div>
  )
}

export default Skills
