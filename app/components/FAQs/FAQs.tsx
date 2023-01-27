import { Htag, Paragraph } from '@/app/ui'
import React from 'react'
import { FAQsProps } from './FAQs.props'
import styles from './FAQs.module.scss'
import { ISteps } from '@/app/interfaces/ISteps'
import { FAQ } from './FAQ/FAQ'
import { motion } from 'framer-motion'

export const FAQs = ({ faqs }: FAQsProps): JSX.Element => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.4
			}
		}
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}
	return (
		<section id={'FAQs'} className={styles.faqs}>
			<Htag tag="h2" className={styles.heading}>
				Frequently Asked Questions
			</Htag>
			<div className={styles.faqsContent}>
				<aside className={styles.aside}>
					<Paragraph className={styles.p}>
						Do you have any kind of questions? We are here to help.
					</Paragraph>
					<img
						src="/images/question.png"
						alt="question symbol"
						className={styles.questionSymbol}
					/>
				</aside>
				<motion.ul
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className={styles.questionList}
				>
					{faqs.map((f: ISteps) => (
						<FAQ key={f.id} item={item} faq={f} />
					))}
				</motion.ul>
			</div>
		</section>
	)
}
