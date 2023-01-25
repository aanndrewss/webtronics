import { INavLinks } from '@/app/interfaces/INavLinks'
import type { NextApiRequest, NextApiResponse } from 'next'

const company = [
	{
		id: 1,
		name: 'About'
	},
	{
		id: 2,
		name: 'Steps'
	},
	{
		id: 3,
		name: 'FAQs'
	},
	{
		id: 4,
		name: 'Review'
	},
	{
		id: 5,
		name: 'Gallery'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<INavLinks[]>
) {
	res.status(200).json(company)
}
