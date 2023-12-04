import CSGOLuck from '@assets/csgoluck.png'
import Revity from '@assets/revity.png'
import Tempo from '@assets/tempo.png'

import { Project } from './components/project/project.types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Tempo Paints Distributor',
    description:
      'A web app built for one of the biggest distributors of paints in Russia. Includes features like adaptivity, redux toolkit, tailwindcss, server-side rendering, static site and incremental site generation. Built on top of Next.js framework.',
    photo: Tempo,
    visitUrl: 'https://tmpline.com/',
  },
  {
    id: 2,
    title: 'CS:GO Roulette',
    description:
      "A web app built for one american team, it's been built using Next.js, it also includes things like SCSS, Redux Toolkit, has Static Site Generation and Incremental Site Generation. I wouldn't exactly say i did much there, i only developed a small part of the app, but it indeed did boost me as an engineer.",
    photo: CSGOLuck,
    visitUrl: 'https://csgoluck.com/',
  },
  {
    id: 3,
    title: 'Revity Budget App',
    description:
      "A pet-project, one of my best works, tho it's not finished yet, but it has some really neat and readable code, it has a custom redux store middleware that works sort of like redux-persister, it also has dark-mode and adaptivity.",
    visitUrl: 'https://budget-app-plum.vercel.app/',
    githubUrl: 'https://github.com/aquarell-dev/budget-app',
    photo: Revity,
  },
]
