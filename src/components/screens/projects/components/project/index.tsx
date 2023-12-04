import { FC } from 'react'
import Button from '../../../../ui/button'
import type { Project as TProject } from './project.types'

const Project: FC<{ project: TProject }> = ({ project }) => {
	return (
		<div className='py-2 px-4 md:py-6 md:px-16 flex flex-col space-y-4 justify-between w-full h-full bg-background-secondary'>
			<h3 className='text-xl md:text-2xl font-medium font-primary text-center'>
				{project.title}
			</h3>
			<img src={project.photo} alt={project.title} />
			<p className='text-[16px] md:text-xl font-secondary text-center'>
				{project.description}
			</p>
			<div className='flex justify-center items-center space-x-8'>
				<Button disabled={!project.visitUrl}>
					<a href={project.visitUrl} target='_blank'>
						Visit
					</a>
				</Button>
				<Button disabled={!project.githubUrl} variant='secondary'>
					<a href={project.githubUrl} target='_blank'>
						Github
					</a>
				</Button>
			</div>
		</div>
	)
}

export default Project
