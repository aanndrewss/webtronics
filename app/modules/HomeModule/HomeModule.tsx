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
	Tech
} from '@/app/components'

const HomeModule = ({
	links,
	mentors,
	technologies,
	socials,
	company,
	steps
}: IData) => {
	if (!links && !mentors && !technologies && !socials && !company && !steps) {
		return null
	}

	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<div className={styles.page}>
				<Header links={links} />
				<main className={styles.wrapper}>
					<Heading />
					<AboutUs mentors={mentors} />
					<Tech technologies={technologies} />
					<Steps steps={steps} />
					<Gallery />
				</main>
				<Footer socials={socials} company={company} />
			</div>
		</>
	)
}

export default HomeModule
