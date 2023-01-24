import React from 'react'
import Logo from './logo.svg'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { HeaderLink } from './HeaderLink/HeaderLink'
import { INavLinks } from '@/app/interfaces/INavLinks'

export const Header = ({ links }: HeaderProps): JSX.Element => {
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