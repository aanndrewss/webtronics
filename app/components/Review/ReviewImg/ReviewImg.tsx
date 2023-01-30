import React from 'react'
import { ReviewImgProps } from './ReviewImg.props'
import styles from './ReviewImg.module.scss'
import cn from 'classnames'

export const ReviewImg = ({
	review,
	activeItem
}: ReviewImgProps): JSX.Element => {
	return (
		<li
			className={cn(styles.listItem, {
				[styles.activeListItem]: activeItem === review.id
			})}
		>
			<img
				className={cn(styles.imageItem, {
					[styles.activeImage]: activeItem === review.id
				})}
				src={review.imgPath}
				alt={review.name}
			/>
		</li>
	)
}
