import React from 'react'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'
import styles from './Home.module.scss'
import { AboutUs, Footer, HeroBlock, Steps, Tech } from '@/app/components'

const HomeModule = ({
	links,
	mentors,
	technologies,
	socials,
	company
}: IData) => {
	if (!links && !mentors && !technologies && !socials && !company) {
		return null
	}

	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<HeroBlock links={links} />
			<div className={styles.wrapper}>
				<AboutUs mentors={mentors} />
				<Tech technologies={technologies} />
				<Steps />
			</div>
			<Footer socials={socials} company={company} />
		</>
	)
}

export default HomeModule
