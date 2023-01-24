import { Button, Htag, Paragraph } from '@/app/ui'
import React from 'react'
import styles from './Heading.module.scss'

export const Heading = () => {
	return (
		<div className={styles.gridTemplate}>
			<Htag className={styles.first} tag="h1">
				Front-End
			</Htag>
			<Paragraph className={styles.second}>
				Make UIs and websites beautiful, functional, and fast. Cover all the
				topics that expensive bootcamps teach (and more).
			</Paragraph>
			<Button className={styles.third}>Start my career change</Button>
			<Htag className={styles.fourth} tag="h1">
				Developer
			</Htag>
			<Htag className={styles.fifth} tag="h3">
				Courses
			</Htag>
		</div>
	)
}
