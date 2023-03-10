import { Htag, Paragraph } from '@/app/ui'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './FAQ.module.scss'
import { FAQProps } from './FAQ.props'

export const FAQ = ({ faq, item }: FAQProps): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<motion.li
			variants={item}
			className={cn(styles.questionItem, {
				[styles.active]: isActive
			})}
		>
			<Htag tag="h4">{faq.name}</Htag>
			<Paragraph className={styles.description}>{faq.description}</Paragraph>
			<button
				onClick={() => setIsActive(!isActive)}
				className={styles.questionBtn}
			></button>
		</motion.li>
	)
}
