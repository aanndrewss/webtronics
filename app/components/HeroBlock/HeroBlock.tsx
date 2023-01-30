import React from 'react'
import { HeroProps } from './HeroBlock.props'
import styles from './HeroBlock.module.scss'
import { Header } from '../Header/Header'
import { Heading } from '../Heading/Heading'

export const HeroBlock = ({ links }: HeroProps): JSX.Element => {
	return (
		<section className={styles.bg}>
			<div className={styles.wrapper}>
				<Header links={links} />
				<Heading />
			</div>
		</section>
	)
}
