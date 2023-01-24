import { HomeModule } from '@/app/modules/HomeModule/HomeModule'
import { IData } from '@/app/interfaces/IData'
import axios from 'axios'

export default function Home(props: IData) {
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
		if (!links) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				links: links
			},
			revalidate: 60
		}
	} catch {
		return {
			props: {
				links: null
			}
		}
	}
}
