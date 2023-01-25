import { Paragraph } from '@/app/ui'
import React from 'react'
import { CompanyLinkProps } from './CompanyLink.props'
import styles from './CompanyLink.module.scss'

export const CompanyLink = ({ company }: CompanyLinkProps): JSX.Element => {
	return (
		<a className={styles.link} href={'#' + company.name}>
			<Paragraph size="s">{company.name}</Paragraph>
		</a>
	)
}
