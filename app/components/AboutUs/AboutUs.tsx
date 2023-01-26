import React from 'react'
import { AboutUsProps } from './AboutUs.props'
import styles from './AboutUs.module.scss'
import { IMentors } from '@/app/interfaces/IMentors'
import { Mentor } from './Mentor/Mentor'
import { Htag, Paragraph } from '@/app/ui'
import Line from './line.svg'
import Front from './front.svg'

export const AboutUs = ({ mentors }: AboutUsProps): JSX.Element => {
	return (
		<section id={'About'}>
			<Htag className={styles.heading} tag="h2">
				About Us
			</Htag>
			<div className={styles.gridTemplate}>
				<div className={styles.mentorsWrapper}>
					<Htag className={styles.headingMentors} tag="h3">
						Mentors
					</Htag>
					<Line />
					<div className={styles.mentors}>
						{mentors.map((m: IMentors) => (
							<Mentor key={m.id} mentor={m} />
						))}
					</div>
				</div>
				<Paragraph className={styles.description}>
					Front-end engineers work closely with designers to make websites
					beautiful, functional, and fast. This Career Path will teach you not
					only the necessary languages and technologies, but how to think like a
					front-end engineer, too.
				</Paragraph>
				<Front className={styles.front} />
			</div>
		</section>
	)
}
