import { ITech } from '@/app/interfaces/ITech'
import React from 'react'
import { TechProps } from './Tech.props'
import styles from './Tech.module.scss'
import { Htag, Paragraph } from '@/app/ui'
import { TechItem } from './TechItem/TechItem'
import { motion } from 'framer-motion'

export const Tech = ({ technologies }: TechProps): JSX.Element => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}

	const variants = {
		visible: {
			opacity: 1
		},
		hidden: { opacity: 0 }
	}
	return (
		<motion.section
			variants={variants}
			initial="hidden"
			whileInView="visible"
			id={'Programs'}
			className={styles.wrapper}
		>
			<Htag className={styles.heading} tag="h2">
				Programming technologies
			</Htag>
			<Paragraph className={styles.description}>
				By the end, you'll have the portfolio and interview skills you need to
				start your new career.
			</Paragraph>
			<motion.ul
				variants={container}
				initial="hidden"
				whileInView="show"
				className={styles.technologies}
			>
				{technologies.map((t: ITech) => (
					<TechItem key={t.id} tech={t} item={item} />
				))}
			</motion.ul>
		</motion.section>
	)
}
