import { ISteps } from '@/app/interfaces/ISteps'
import type { NextApiRequest, NextApiResponse } from 'next'

const faqs = [
	{
		id: 1,
		name: 'What is the price?',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
	},
	{
		id: 2,
		name: 'What is the price?',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
	},
	{
		id: 3,
		name: 'What is the price?',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
	},
	{
		id: 4,
		name: 'What is the price?',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
	},
	{
		id: 5,
		name: 'What is the price?',
		description:
			'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ISteps[]>
) {
	res.status(200).json(faqs)
}
