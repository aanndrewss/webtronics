import { ISocials } from '@/app/interfaces/ISocials'
import type { NextApiRequest, NextApiResponse } from 'next'

const socials = [
	{
		id: 1,
		name: 'Facebook',
		iconPath: '/icons/facebook.svg'
	},
	{
		id: 2,
		name: 'GitLab',
		iconPath: '/icons/gitlab.svg'
	},
	{
		id: 3,
		name: 'Steps',
		iconPath: '/icons/twitter.svg'
	},
	{
		id: 4,
		name: 'Questions',
		iconPath: '/icons/linkedin.svg'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ISocials[]>
) {
	res.status(200).json(socials)
}
