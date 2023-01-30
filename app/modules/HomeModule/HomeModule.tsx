import React from 'react'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'
import styles from './Home.module.scss'
import {
	AboutUs,
	Footer,
	Gallery,
	Header,
	Heading,
	Steps,
	Tech,
	FAQs,
	ContactUs,
	HeroBlock
} from '@/app/components'

const HomeModule = ({
	links,
	mentors,
	technologies,
	socials,
	company,
	steps,
	faqs
}: IData) => {
	if (
		!links &&
		!mentors &&
		!technologies &&
		!socials &&
		!company &&
		!steps &&
		!faqs
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
					<ContactUs />
				</main>
				<Footer socials={socials} company={company} />
			</div>
		</>
	)
}

export default HomeModule
