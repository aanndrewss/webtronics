import { IMentors } from './IMentors'
import { INavLinks } from './INavLinks'
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
	faqs: ISteps[]
	reviews: IMentors[]
}
