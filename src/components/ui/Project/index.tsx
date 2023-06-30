import { FC } from 'react'
import { PrimaryButton, SecondaryButton } from '../Button'
import type { Project as TProject } from './project.types'

const Project: FC<{ project: TProject }> = ({ project }) => {
	return (
		<div className='py-6 px-16 flex flex-col space-y-4 justify-between w-full h-full bg-background-secondary'>
			<h3 className='text-2xl font-medium font-primary text-center'>
				{project.title}
			</h3>
			<img src={project.photo} alt={project.title} />
			<p className='text-xl font-secondary text-center'>
				{project.description}
			</p>
			<div className='flex justify-center items-center space-x-8'>
				<PrimaryButton disabled={!project.visitUrl}>
					<a href={project.visitUrl} target='_blank'>
						Visit
					</a>
				</PrimaryButton>
				<SecondaryButton disabled={!project.githubUrl}>
					<a href={project.githubUrl} target='_blank'>
						Github
					</a>
				</SecondaryButton>
			</div>
		</div>
	)
}

export default Project