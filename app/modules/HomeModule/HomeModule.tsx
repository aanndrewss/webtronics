import {
	AboutUs,
	ContactUs,
	FAQs,
	Footer,
	Gallery,
	HeroBlock,
	Review,
	Steps,
	Tech
} from '@/app/components'
import { IData } from '../../interfaces/IData'
import { Meta } from '../../ui'
import styles from './Home.module.scss'

const HomeModule = ({
	links,
	mentors,
	technologies,
	socials,
	company,
	steps,
	faqs,
	reviews
}: IData) => {
	if (
		!links &&
		!mentors &&
		!technologies &&
		!socials &&
		!company &&
		!steps &&
		!faqs &&
		!reviews
	) {
		return null
	}

	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<div className={styles.page}>
				<HeroBlock links={links} />
				<main className={styles.wrapper}>
					<AboutUs mentors={mentors} />
					<Tech technologies={technologies} />
					<Steps steps={steps} />
					<FAQs faqs={faqs} />
					<Gallery />
					<Review reviews={reviews} />
					<ContactUs />
				</main>
				<Footer socials={socials} company={company} />
			</div>
		</>
	)
}

export default HomeModule
