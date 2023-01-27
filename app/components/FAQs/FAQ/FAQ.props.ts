import { ISteps } from '@/app/interfaces/ISteps'

export interface FAQProps {
	faq: ISteps
	item: {
		hidden: { opacity: number }
		show: { opacity: number }
	}
}
