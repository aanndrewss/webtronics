import { ITech } from '@/app/interfaces/ITech'
import { NextApiRequest, NextApiResponse } from 'next'

const technologies = [
	{
		id: 1,
		name: 'Angular',
		iconPath: '/icons/angular.svg'
	},
	{
		id: 2,
		name: 'React',
		iconPath: '/icons/react.svg'
	},
	{
		id: 3,
		name: 'Vue',
		iconPath: '/icons/vue.svg'
	},
	{
		id: 4,
		name: 'JavaScript',
		iconPath: '/icons/js.svg'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ITech[]>
) {
	res.status(200).json(technologies)
}
