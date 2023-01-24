import React from 'react'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'
import styles from './Home.module.scss'
import { AboutUs, HeroBlock } from '@/app/components'

export const HomeModule = ({ links, mentors }: IData): JSX.Element => {
	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<HeroBlock links={links} />
			<div className={styles.wrapper}>
				<AboutUs mentors={mentors} />
			</div>
		</>
	)
}
