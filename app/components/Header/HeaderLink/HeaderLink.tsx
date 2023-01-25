import { Paragraph } from '@/app/ui'
import React from 'react'
import { HeaderLinkProps } from './HeaderLink.props'
import styles from './HeaderLink.module.scss'

export const HeaderLink = ({ name }: HeaderLinkProps) => {
	return (
		<a href={'#' + name} className={styles.link}>
			<Paragraph>{name}</Paragraph>
		</a>
	)
}
