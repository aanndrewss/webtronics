import { Htag, Paragraph } from '@/app/ui'
import { motion } from 'framer-motion'
import styles from './Gallery.module.scss'

export const Gallery = () => {
	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3
			}
		},
		hidden: { opacity: 0, y: 300 }
	}

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			variants={variants}
			viewport={{ once: true }}
			id={'Gallery'}
		>
			<Htag tag="h2" className={styles.heading}>
				Gallery
			</Htag>
			<div className={styles.gridTemplate}>
				<Paragraph className={styles.p1}>
					By the end of this course, you will be able to develop and publish
					your very own Google Chrome extension! In this course we will focus on
					coding exercises and projects.
				</Paragraph>
				<img
					className={styles.developer1}
					src={'/images/developer1.png'}
					alt="1"
				/>
				<img
					className={styles.developer2}
					src={'/images/developer2.png'}
					alt="2"
				/>
				<img
					className={styles.developer3}
					src={'/images/developer3.png'}
					alt="3"
				/>
				<Paragraph className={styles.p2}>
					If you would like to learn web development and get a job in the tech
					industry, you are going to LOVE this course! Learn HTML, CSS,
					JavaScript, Bootstrap and more with over 15 hours of HD video
					tutorials! This course was designed to be extremely beginner friendly.
					We will begin with the very basics of HTML and build a simple web
					page.
				</Paragraph>
			</div>
		</motion.section>
	)
}
