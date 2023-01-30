import { IMentors } from '@/app/interfaces/IMentors'
import { NextApiRequest, NextApiResponse } from 'next'

const reviews = [
	{
		id: 1,
		name: 'Best courses ever',
		description:
			'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
		imgPath: '/images/review1.png'
	},
	{
		id: 2,
		name: 'Amazing teaching',
		description:
			'The explanation is crazy it really doesn`t have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.',
		imgPath: '/images/review2.png'
	},
	{
		id: 3,
		name: 'Simple and easy',
		description:
			'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
		imgPath: '/images/review3.png'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IMentors[]>
) {
	res.status(200).json(reviews)
}
