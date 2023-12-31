import Button from '@ui/button/index.tsx'
import Code from '@ui/code/index.tsx'
import { FC } from 'react'

const GITHUB_URl = 'https://github.com/aquarell-dev'

const AboutContent: FC = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <div className='py-4 px-6 text-[16px] sm:text-xl bg-background-secondary bg-opacity-60 backdrop-blur-sm w-full sm:w-96 font-secondary relative rounded-lg'>
        <p>Hey, there👋!</p>
        <p>
          I&rsquo;m a&nbsp;20&nbsp;year old software engineer with
          a&nbsp;passion for building things using tools like{' '}
          <Code text='React/React Native' /> and a&nbsp;bunch of&nbsp;others
          front-end framework/libraries.
        </p>
        <p>
          I&nbsp;have <span className='font-semibold'>2&nbsp;years</span>{' '}
          of&nbsp;commercial experience, most of&nbsp;the time i&rsquo;ve been
          building web apps using{' '}
          <span className='font-semibold'>React/Next.js</span>, but i&nbsp;also
          have the experience of building mobile apps and other things.
        </p>
      </div>
      <div className='flex space-x-8 justify-center items-center'>
        <Button
          onClick={() =>
            document
              .querySelector('#contact-form')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          variant='primary'
        >
          Hire Me!
        </Button>
        <Button variant='secondary'>
          <a
            href={GITHUB_URl}
            target='_blank' rel="noreferrer"
          >
            Github
          </a>
        </Button>
      </div>
    </div>
  )
}

export default AboutContent
