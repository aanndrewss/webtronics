import { ITech } from '@/app/interfaces/ITech'
import { Htag, Paragraph } from '@/app/ui'
import { motion } from 'framer-motion'
import styles from './Tech.module.scss'
import { TechProps } from './Tech.props'
import { TechItem } from './TechItem/TechItem'

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
			viewport={{ once: true }}
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
				viewport={{ once: true }}
				className={styles.technologies}
			>
				{technologies.map((t: ITech) => (
					<TechItem key={t.id} tech={t} item={item} />
				))}
			</motion.ul>
		</motion.section>
	)
}
