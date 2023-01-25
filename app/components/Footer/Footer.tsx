import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.scss'
import Logo from './logo.svg'
import { Htag, Paragraph } from '@/app/ui'
import { INavLinks } from '@/app/interfaces/INavLinks'
import { CompanyLink } from './CompanyLink/CompanyLink'
import { ISocials } from '@/app/interfaces/ISocials'
import { SocialLink } from './SocialLink/SocialLink'

export const Footer = ({ company, socials }: FooterProps): JSX.Element => {
	return (
		<div className={styles.bg}>
			<div className={styles.wrapper}>
				<div className={styles.logoInfo}>
					<a href="#" className={styles.logo}>
						<Logo />
					</a>
					<Paragraph className={styles.description}>
						Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
					</Paragraph>
				</div>
				<div className={styles.company}>
					<Htag className={styles.headingCompany} tag="h4">
						Company
					</Htag>
					{company.map((c: INavLinks) => (
						<CompanyLink key={c.id} company={c} />
					))}
				</div>
				<div className={styles.socials}>
					<Htag className={styles.headingSocials} tag="h4">
						Social media
					</Htag>
					{socials.map((s: ISocials) => (
						<SocialLink key={s.id} social={s} />
					))}
				</div>
			</div>
		</div>
	)
}
