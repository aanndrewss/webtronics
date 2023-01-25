import { ITech } from '@/app/interfaces/ITech'
import { NextApiRequest, NextApiResponse } from 'next'

const technologies = [
	{
		id: 1,
		name: 'Angular',
		iconPath: '/icons/angular.svg',
		link: 'https://angular.io/'
	},
	{
		id: 2,
		name: 'React',
		iconPath: '/icons/react.svg',
		link: 'https://ru.reactjs.org/'
	},
	{
		id: 3,
		name: 'Vue',
		iconPath: '/icons/vue.svg',
		link: 'https://vuejs.org/'
	},
	{
		id: 4,
		name: 'JavaScript',
		iconPath: '/icons/js.svg',
		link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ITech[]>
) {
	res.status(200).json(technologies)
}
