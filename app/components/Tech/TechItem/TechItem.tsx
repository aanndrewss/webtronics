import { Htag } from '@/app/ui'
import { motion } from 'framer-motion'
import styles from './TechItem.module.scss'
import { TechItemProps } from './TechItem.props'

export const TechItem = ({ tech, item }: TechItemProps): JSX.Element => {
	return (
		<motion.li variants={item}>
			<a href={tech.link} rel={'noreferrer'} target={'_blank'}>
				<div className={styles.card}>
					<img src={tech.iconPath} alt={tech.name} />
					<Htag tag="h4">{tech.name}</Htag>
				</div>
			</a>
		</motion.li>
	)
}
