import { Htag } from '@/app/ui'
import React from 'react'
import styles from './Steps.module.scss'

export const Steps = () => {
	return (
		<div id={'Steps'} className={styles.wrapper}>
			<Htag className={styles.heading} tag="h2">
				Steps
			</Htag>
		</div>
	)
}
