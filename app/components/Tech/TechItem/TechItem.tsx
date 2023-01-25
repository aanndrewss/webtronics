import React from 'react'
import { TechItemProps } from './TechItem.props'
import styles from './TechItem.module.scss'
import { Htag } from '@/app/ui'

export const TechItem = ({ tech }: TechItemProps): JSX.Element => {
	return (
		<a href={tech.link} rel={'noreferrer'} target={'_blank'}>
			<div className={styles.cardBorder}>
				<div className={styles.card}>
					<img src={tech.iconPath} alt={tech.name} />
					<Htag tag="h4">{tech.name}</Htag>
				</div>
			</div>
		</a>
	)
}
