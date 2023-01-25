import React from 'react'
import { SocialLinkProps } from './SocialLink.props'
import styles from './SocialLink.module.scss'

export const SocialLink = ({ social }: SocialLinkProps): JSX.Element => {
	return (
		<a href="#" className={styles.link}>
			<img src={social.iconPath} alt={social.name} />
		</a>
	)
}
