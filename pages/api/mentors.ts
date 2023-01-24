import { IMentors } from '@/app/interfaces/IMentors'
import { NextApiRequest, NextApiResponse } from 'next'

const mentors = [
	{
		id: 1,
		name: 'Wade Warren',
		description: 'Front-end engineers work closely with designers',
		imgPath: '/images/WadeWarren.png'
	},
	{
		id: 2,
		name: 'Kristin Watson',
		description: 'Front-end engineers work closely with designers',
		imgPath: '/images/KristinWatson.png'
	},
	{
		id: 3,
		name: 'Robert Fox',
		description: 'Front-end engineers work closely with designers',
		imgPath: '/images/RobertFox.png'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IMentors[]>
) {
	res.status(200).json(mentors)
}
