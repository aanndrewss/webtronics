import { INavLinks } from './INavLinks'
import { IMentors } from './IMentors'
import { ISocials } from './ISocials'
import { ISteps } from './ISteps'
import { ITech } from './ITech'

export interface IData {
	links: INavLinks[]
	mentors: IMentors[]
	technologies: ITech[]
	socials: ISocials[]
	company: INavLinks[]
	steps: ISteps[]
}
