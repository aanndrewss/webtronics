import { ITech } from '@/app/interfaces/ITech'

export interface TechItemProps {
	tech: ITech
	item: {
		hidden: { opacity: number }
		show: { opacity: number }
	}
}
