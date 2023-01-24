import { Htag } from '@/app/ui'
import React from 'react'
import { Header, Heading } from '..'
import { HeaderProps } from '../Header/Header.props'
import styles from './HeroBlock.module.scss'

export const HeroBlock = ({ links }: HeaderProps) => {
	return (
		<div className={styles.heroblock}>
			<div className={styles.wrapper}>
				<Header links={links} />
				<Heading />
				<Htag className={styles.heading} tag="h2">
					About Us
				</Htag>
			</div>
		</div>
	)
}
