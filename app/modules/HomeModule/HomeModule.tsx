import React from 'react'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'
import styles from './Home.module.scss'
import { AboutUs, HeroBlock, Tech } from '@/app/components'

const HomeModule = ({ links, mentors, technologies }: IData) => {
	if (!links && !mentors && !technologies) {
		return null
	}

	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<HeroBlock links={links} />
			<div className={styles.wrapper}>
				<AboutUs mentors={mentors} />
				<Tech technologies={technologies} />
			</div>
		</>
	)
}

export default HomeModule
