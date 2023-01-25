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

		if (!links && !mentors && !technologies && !company && !socials) {
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
				company: company
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
				socials: null
			}
		}
	}
}

export default Home
