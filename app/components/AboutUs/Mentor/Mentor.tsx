import React from 'react'
import { MentorProps } from './Mentor.props'
import styles from './Mentor.module.scss'
import { Htag, Paragraph } from '@/app/ui'

export const Mentor = ({ mentor }: MentorProps): JSX.Element => {
	return (
		<div className={styles.mentor}>
			<img
				className={styles.mentorImg}
				src={mentor.imgPath}
				alt={mentor.name}
			/>
			<Htag tag="h4">{mentor.name}</Htag>
			<Paragraph size="s">{mentor.description}</Paragraph>
		</div>
	)
}
