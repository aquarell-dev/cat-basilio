import { FC } from 'react'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import Project3 from '../../assets/project3.png'
import '../../css/grid.css'
import Project from '../ui/Project'
import type { Project as TProject } from '../ui/Project/project.types'

const projects: TProject[] = [
	{
		id: 1,
		title: 'Tempo Paints Distributor',
		description:
			"A web app build for a commercial company that's one of the biggest distributors of paints in Russia. Includes features like adaptivity, redux toolkit, tailwindcss, server-side rendering, static site and incremental site generation. Built on top of Next.js framework.",
		photo: Project1,
		visitUrl: 'https://tmpline.com/',
	},
	{
		id: 2,
		title: 'CS:GO Roulette',
		description:
			"A web app build for one american team, it's been built using Next.js, it also includes things like SCSS, Redux Toolkit, has Static Site Generation and Incremental Site Generation. We had a team consisting of 5 people, 2 fronts-ends, 2 back-ends, and one team-lead, i was one of the fornt devs. We managed to build the app in 2 months, and got paid 2,000$ each.",
		photo: Project3,
		visitUrl: 'https://csgoluck.com/',
	},
	{
		id: 3,
		title: 'Revity Budget App',
		description:
			"A pet-project, one of my best works, tho it's not finished yet, but it has some really nice and readable code, it has a custom redux store middleware that works sort of like redux-persister, it also has dark-mode and adaptivity.",
		visitUrl: 'https://budget-app-plum.vercel.app/',
		githubUrl: 'https://github.com/aquarell-dev/budget-app',
		photo: Project2,
	},
]

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
