import { ITech } from '@/app/interfaces/ITech'
import React from 'react'
import { TechProps } from './Tech.props'
import styles from './Tech.module.scss'
import { Htag, Paragraph } from '@/app/ui'
import { TechItem } from './TechItem/TechItem'

export const Tech = ({ technologies }: TechProps): JSX.Element => {
	return (
		<div id={'Programs'} className={styles.wrapper}>
			<Htag className={styles.heading} tag="h2">
				Programming technologies
			</Htag>
			<Paragraph className={styles.description}>
				By the end, you'll have the portfolio and interview skills you need to
				start your new career.
			</Paragraph>
			<div className={styles.technologies}>
				{technologies.map((t: ITech) => (
					<TechItem key={t.id} tech={t} />
				))}
			</div>
		</div>
	)
}
