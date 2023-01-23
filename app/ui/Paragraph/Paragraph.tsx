import React from 'react'
import { ParagraphProps } from './Paragraph.props'
import cn from 'classnames'
import styles from './Paragraph.module.scss'

export const Paragraph = ({
	size = 'm',
	children,
	className,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, styles[`${size}`])} {...props}>
			{children}
		</p>
	)
}
