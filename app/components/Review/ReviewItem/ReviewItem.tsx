import { Htag, Paragraph } from '@/app/ui'
import React from 'react'
import { ReviewItemProps } from './ReviewItem.props'
import cn from 'classnames'
import styles from './ReviewItem.module.scss'

export const ReviewItem = ({
	review,
	activeItem
}: ReviewItemProps): JSX.Element => {
	return (
		<>
			<div className={styles.reviewText}>
				<Htag
					tag="h4"
					className={cn(styles.reviewName, {
						[styles.activeName]: activeItem == review.id
					})}
				>
					{review.name}
				</Htag>
				<Paragraph
					className={cn(styles.reviewDescription, {
						[styles.activeDesc]: activeItem == review.id
					})}
				>
					{review.description}
				</Paragraph>
			</div>
			<span
				className={cn(styles.reviewIndex, {
					[styles.activeReviewIndex]: activeItem == review.id
				})}
			>
				{review.id}/ <span>3</span>
			</span>
		</>
	)
}
