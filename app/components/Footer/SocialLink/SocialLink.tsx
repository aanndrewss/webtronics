import styles from './SocialLink.module.scss'
import { SocialLinkProps } from './SocialLink.props'

export const SocialLink = ({ social }: SocialLinkProps): JSX.Element => {
	return (
		<a href="#" className={styles.link}>
			<img src={social.iconPath} alt={social.name} />
		</a>
	)
}
