import { Button, Htag, Input, Paragraph } from '@/app/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import styles from './ContactUs.module.scss'
import { ModalDialog } from './Dialog/ModalDialog'

interface IFormInputs {
	name: string
	phone: string
	email: string
}

const phoneRegExp =
	// eslint-disable-next-line no-useless-escape
	/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

const emailRegExp = /^\S+@\S+\.\S+$/

const schema = yup
	.object({
		name: yup.string().required('Name is required'),
		phone: yup
			.string()
			.required('Phone number is required')
			.matches(phoneRegExp, 'Phone number is not valid'),
		email: yup
			.string()
			.required('E-mail is required')
			.matches(emailRegExp, 'Email is not valid')
	})
	.required()

export const ContactUs = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onTouched',
		reValidateMode: 'onChange'
	})

	const onSubmit = (formData: IFormInputs): void => {
		reset()
		setIsOpen(true)
		console.log(formData)
	}

	const variants = {
		visible: {
			opacity: 1,

			transition: {
				delay: 0.3
			}
		},
		hidden: { opacity: 0 }
	}
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			variants={variants}
			viewport={{ once: true }}
			className={styles.contact}
			id={'Get in touch'}
		>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
				<Htag tag="h2">Contact Us</Htag>
				<Paragraph className={styles.subTitle}>
					Do you have any kind of help please contact with us.
				</Paragraph>
				<Input
					error={errors.name}
					placeholder="Name"
					className={styles.input}
					{...register('name')}
				/>
				<Input
					error={errors.phone}
					placeholder="Phone"
					className={styles.input}
					{...register('phone')}
				/>
				<Input
					error={errors.email}
					placeholder="E-mail"
					className={styles.input}
					{...register('email')}
				/>
				<Button className={styles.btn}>Send</Button>
				{isOpen && <ModalDialog isOpen={isOpen} setIsOpen={setIsOpen} />}
			</form>
		</motion.section>
	)
}
