import cn from 'classnames'
import styles from './ReviewImg.module.scss'
import { ReviewImgProps } from './ReviewImg.props'

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
