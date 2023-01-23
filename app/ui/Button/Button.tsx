import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'

export const Button = ({
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
