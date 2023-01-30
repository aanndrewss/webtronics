import HomeModule from '@/app/modules/HomeModule/HomeModule'
import { IData } from '@/app/interfaces/IData'
import axios from 'axios'

const Home = (props: IData) => {
	return (
		<>
			<HomeModule {...props} />
		</>
	)
}

export const getStaticProps = async () => {
	try {
		const links = await axios
			.get(`${process.env.API_HOST}/links`)
			.then(({ data }) => data)

		const mentors = await axios
			.get(`${process.env.API_HOST}/mentors`)
			.then(({ data }) => data)

		const technologies = await axios
			.get(`${process.env.API_HOST}/tech`)
			.then(({ data }) => data)

		const company = await axios
			.get(`${process.env.API_HOST}/company`)
			.then(({ data }) => data)

		const socials = await axios
			.get(`${process.env.API_HOST}/socials`)
			.then(({ data }) => data)

		const steps = await axios
			.get(`${process.env.API_HOST}/steps`)
			.then(({ data }) => data)

		const faqs = await axios
			.get(`${process.env.API_HOST}/faqs`)
			.then(({ data }) => data)

		const reviews = await axios
			.get(`${process.env.API_HOST}/reviews`)
			.then(({ data }) => data)

		if (
			!links &&
			!mentors &&
			!technologies &&
			!company &&
			!socials &&
			!steps &&
			!reviews
		) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				links: links,
				mentors: mentors,
				technologies: technologies,
				socials: socials,
				company: company,
				steps: steps,
				faqs: faqs,
				reviews: reviews
			},
			revalidate: 60
		}
	} catch {
		return {
			props: {
				links: null,
				mentors: null,
				technologies: null,
				company: null,
				socials: null,
				steps: null,
				faqs: null,
				reviews: null
			}
		}
	}
}

export default Home
