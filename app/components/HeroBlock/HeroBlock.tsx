import { Header } from '../Header/Header'
import { Heading } from '../Heading/Heading'
import styles from './HeroBlock.module.scss'
import { HeroProps } from './HeroBlock.props'

export const HeroBlock = ({ links }: HeroProps): JSX.Element => {
	return (
		<section className={styles.bg}>
			<div className={styles.wrapper}>
				<Header links={links} />
				<Heading />
			</div>
		</section>
	)
}
