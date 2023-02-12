import { INavLinks } from '@/app/interfaces/INavLinks'
import Logo from '../../../public/logo.svg'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { HeaderLink } from './HeaderLink/HeaderLink'

export const Header = ({ links }: HeaderProps): JSX.Element => {
	return (
		<header className={styles.header}>
			<a href="#" className={styles.logo}>
				<Logo />
			</a>
			<nav className={styles.nav}>
				{links.map((l: INavLinks) => (
					<HeaderLink key={l.id} name={l.name} />
				))}
			</nav>
		</header>
	)
}
