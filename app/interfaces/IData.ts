import { INavLinks } from '@/app/interfaces/INavLinks'
import { IMentors } from './IMentors'
import { ITech } from './ITech'

export interface IData {
	links: INavLinks[]
	mentors: IMentors[]
	technologies: ITech[]
}
