import { FC } from 'react'

const SkillGroup: FC<{ title: string; skills: string[] }> = ({
	title,
	skills,
}) => {
	return (
		<div className='py-4 px-6 w-full h-full bg-background-secondary flex flex-col space-y-4'>
			<h3 className='text-2xl text-center font-primary'>{title}</h3>
			<div className='flex flex-col space-y-2 text-center font-secondary text-lg'>
				{skills.map((skill, idx) => (
					<p key={idx}>{skill}</p>
				))}
			</div>
		</div>
	)
}

export default SkillGroup
