import { IMentors } from '@/app/interfaces/IMentors'
import { Htag } from '@/app/ui'
import React, { useState } from 'react'
import styles from './Review.module.scss'
import { ReviewProps } from './Review.props'
import { ReviewItem } from './ReviewItem/ReviewItem'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { ReviewImg } from './ReviewImg/ReviewImg'

export const Review = ({ reviews }: ReviewProps): JSX.Element => {
	const [activeItem, setActiveItem] = useState<number>(1)

	const handleNext = () => {
		if (activeItem === 3) {
			setActiveItem(1)
		} else {
			setActiveItem((prev) => prev + 1)
		}
	}

	const handlePrev = () => {
		if (activeItem === 1) {
			setActiveItem(3)
		} else {
			setActiveItem((prev) => prev - 1)
		}
	}

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
			id={'Review'}
			className={styles.review}
		>
			<Htag tag="h2" className={styles.heading}>
				Review
			</Htag>
			<div className={styles.gridTemplate}>
				<div className={styles.arrows}>
					<span onClick={handlePrev} className={styles.arrow}></span>
					<span onClick={handleNext} className={styles.arrow}></span>
				</div>
				{reviews.map((r: IMentors) => (
					<ReviewItem key={r.id} review={r} activeItem={activeItem} />
				))}
				<ul className={styles.images}>
					{reviews.map((r: IMentors) => (
						<ReviewImg key={r.id} activeItem={activeItem} review={r} />
					))}
				</ul>
			</div>
		</motion.section>
	)
}
