import { Button, Htag, Paragraph } from '@/app/ui'
import React from 'react'
import styles from './Heading.module.scss'

export const Heading = () => {
	return (
		<div className={styles.gridTemplate}>
			<div className={styles.first}>
				<Htag tag="h1">Front-End</Htag>
			</div>
			<Paragraph className={styles.second}>
				Make UIs and websites beautiful, functional, and fast. Cover all the
				topics that expensive bootcamps teach (and more).
			</Paragraph>
			<Button className={styles.third}>Start my career change</Button>
			<div className={styles.fourth}>
				<Htag tag="h1">Developer</Htag>
			</div>
			<div className={styles.fifth}>
				<Htag tag="h3">Courses</Htag>
			</div>
		</div>
	)
}
