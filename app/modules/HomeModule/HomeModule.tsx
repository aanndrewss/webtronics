import React from 'react'
import { Header } from '../../components'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'
import styles from './Home.module.scss'
import { Heading } from '@/app/components/Heading/Heading'

export const HomeModule = ({ links }: IData): JSX.Element => {
	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<div className={styles.heroblock}>
				<div className={styles.wrapper}>
					<Header links={links} />
					<Heading />
				</div>
			</div>
		</>
	)
}
