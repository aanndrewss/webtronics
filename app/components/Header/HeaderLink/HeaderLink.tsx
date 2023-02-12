import { Paragraph } from '@/app/ui'
import styles from './HeaderLink.module.scss'
import { HeaderLinkProps } from './HeaderLink.props'

export const HeaderLink = ({ name }: HeaderLinkProps) => {
	return (
		<a href={'#' + name} className={styles.link}>
			<Paragraph>{name}</Paragraph>
		</a>
	)
}
