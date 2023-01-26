import { ISteps } from '@/app/interfaces/ISteps'
import type { NextApiRequest, NextApiResponse } from 'next'

const steps = [
	{
		id: 1,
		name: 'Introduction to Front-End ',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	},
	{
		id: 2,
		name: 'Overview of Development',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	},
	{
		id: 3,
		name: 'Introduction to Front-End ',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	},
	{
		id: 4,
		name: 'Overview of Development',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	},
	{
		id: 5,
		name: 'Introduction to Front-End ',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	},
	{
		id: 6,
		name: 'Overview of Development',
		description:
			'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ISteps[]>
) {
	res.status(200).json(steps)
}
