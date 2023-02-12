import { Button, Htag, Paragraph } from '@/app/ui'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styles from './ModalDialog.module.scss'
import { DialogProps } from './ModalDialog.props'

export const ModalDialog = ({
	isOpen,
	setIsOpen
}: DialogProps): JSX.Element => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className={styles.dialog}
				onClose={() => setIsOpen(false)}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className={styles.bg} />
				</Transition.Child>

				<div className={styles.container}>
					<div className={styles.card}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className={styles.panel}>
								<Dialog.Title>
									<Htag className={styles.htag} tag="h4">
										Success
									</Htag>
								</Dialog.Title>
								<div className="mt-2">
									<Paragraph className={styles.ptag}>Success</Paragraph>
								</div>

								<div className="mt-4">
									<Button onClick={() => setIsOpen(false)}>
										Got it, thanks!
									</Button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
