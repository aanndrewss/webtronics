import React from 'react'
import Logo from './logo.svg'
import styles from './HeaderComponent.module.scss'
import { HeaderComponentProps } from './HeaderComponent.props'
import { HeaderLink } from './HeaderLink/HeaderLink'
import { INavLinks } from '@/app/interfaces/INavLinks'

export const HeaderComponent = ({
	links
}: HeaderComponentProps): JSX.Element => {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.nav}>
				{links.map((l: INavLinks) => (
					<HeaderLink key={l.id} name={l.name} />
				))}
			</nav>
		</header>
	)
}
