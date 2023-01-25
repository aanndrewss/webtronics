import { HomeModule } from '@/app/modules/HomeModule/HomeModule'
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

		if (!links && !mentors) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				links: links,
				mentors: mentors
			},
			revalidate: 60
		}
	} catch {
		return {
			props: {
				links: null,
				mentors: null
			}
		}
	}
}

export default Home
