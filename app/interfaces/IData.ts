import { INavLinks } from '@/app/interfaces/INavLinks'
import { IMentors } from './IMentors'
import { ISocials } from './ISocials'
import { ITech } from './ITech'

export interface IData {
	links: INavLinks[]
	mentors: IMentors[]
	technologies: ITech[]
	socials: ISocials[]
	company: INavLinks[]
}
