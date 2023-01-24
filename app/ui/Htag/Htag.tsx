import React from 'react'
import { HtagProps } from './Htag.props'
import styles from './Htag.module.scss'
import cn from 'classnames'

export const Htag = ({ tag:Tag='h1', children, className }: HtagProps): JSX.Element => {
	return (
		<Tag className={cn(styles.h, className, styles[`${Tag}`])}>
			{children}
		</Tag>
	)
}
