import { INavLinks } from '@/app/interfaces/INavLinks'
import { ISocials } from '@/app/interfaces/ISocials'
import { Htag, Paragraph } from '@/app/ui'
import Logo from '../../../public/logo.svg'
import { CompanyLink } from './CompanyLink/CompanyLink'
import styles from './Footer.module.scss'
import { FooterProps } from './Footer.props'
import { SocialLink } from './SocialLink/SocialLink'

export const Footer = ({ company, socials }: FooterProps): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<nav className={styles.logoInfo}>
					<a href="#" className={styles.logo}>
						<Logo />
					</a>
					<Paragraph className={styles.description}>
						Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
					</Paragraph>
				</nav>
				<nav className={styles.company}>
					<Htag className={styles.headingCompany} tag="h4">
						Company
					</Htag>
					{company.map((c: INavLinks) => (
						<CompanyLink key={c.id} company={c} />
					))}
				</nav>
				<nav className={styles.socials}>
					<Htag className={styles.headingSocials} tag="h4">
						Social media
					</Htag>
					{socials.map((s: ISocials) => (
						<SocialLink key={s.id} social={s} />
					))}
				</nav>
			</div>
		</footer>
	)
}
