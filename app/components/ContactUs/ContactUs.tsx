import { Button, Htag, Input, Paragraph } from '@/app/ui'
import React from 'react'
import styles from './ContactUs.module.scss'

export const ContactUs = () => {
	return (
		<section className={styles.contact} id={'Get in touch'}>
			<form className={styles.contactForm}>
				<Htag tag="h2">Contact Us</Htag>
				<Paragraph className={styles.subTitle}>
					Do you have any kind of help please contact with us.
				</Paragraph>
				<Input placeholder="Name" className={styles.input} />
				<Input placeholder="Phone" className={styles.input} />
				<Input placeholder="E-mail" className={styles.input} />
				<Button className={styles.btn}>Send</Button>
			</form>
		</section>
	)
}
