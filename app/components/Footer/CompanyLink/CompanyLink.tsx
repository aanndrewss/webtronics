import { Paragraph } from '@/app/ui'
import styles from './CompanyLink.module.scss'
import { CompanyLinkProps } from './CompanyLink.props'

export const CompanyLink = ({ company }: CompanyLinkProps): JSX.Element => {
	return (
		<a className={styles.link} href={'#' + company.name}>
			<Paragraph size="s">{company.name}</Paragraph>
		</a>
	)
}
