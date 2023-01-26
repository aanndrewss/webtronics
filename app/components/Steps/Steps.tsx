import { ISteps } from '@/app/interfaces/ISteps'
import { Htag, Paragraph } from '@/app/ui'
import React from 'react'
import styles from './Steps.module.scss'
import { StepsProps } from './Steps.props'

export const Steps = ({ steps }: StepsProps): JSX.Element => {
	return (
		<section id={'Steps'}>
			<Htag className={styles.heading} tag="h2">
				Steps
			</Htag>
			<ol className={styles.stepsList}>
				{steps.map((s: ISteps) => (
					<li key={s.id} className={styles.step}>
						<svg
							width="146"
							height="228"
							viewBox="0 0 146 228"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={styles.cardBorder}
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M127 5.84615H0V0H127C137.493 0 146 8.28847 146 18.5128V209.487C146 219.712 137.493 228 127 228H0V222.154H127C134.18 222.154 140 216.483 140 209.487V18.5128C140 11.5172 134.18 5.84615 127 5.84615Z"
								fill="url(#paint0_linear_1849_7)"
								fillOpacity="0.7"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1849_7"
									x1="0"
									y1="114"
									x2="143"
									y2="114"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0.081934" stopColor="#15BFFD" stopOpacity="0" />
									<stop offset="0.706057" stopColor="#15BFFD" />
									<stop offset="1" stopColor="#9C37FD" />
								</linearGradient>
							</defs>
						</svg>
						<Htag tag="h4">Step {s.id}</Htag>
						<Htag tag="h3">{s.name}</Htag>
						<Paragraph className={styles.p}>{s.description}</Paragraph>
					</li>
				))}
			</ol>
		</section>
	)
}
