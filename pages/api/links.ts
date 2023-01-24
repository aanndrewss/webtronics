import { INavLinks } from '@/app/interfaces/INavLinks'
import type { NextApiRequest, NextApiResponse } from 'next'

const links = [
	{
		id: 1,
		name: 'About'
	},
	{
		id: 2,
		name: 'Programs'
	},
	{
		id: 3,
		name: 'Steps'
	},
	{
		id: 4,
		name: 'Questions'
	},
	{
		id: 5,
		name: 'Get in touch'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<INavLinks[]>
) {
	res.status(200).json(links)
}
