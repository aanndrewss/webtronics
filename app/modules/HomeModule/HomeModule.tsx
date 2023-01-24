import React from 'react'
import { HeaderComponent } from '../../components'
import { Meta } from '../../ui'
import { IData } from '../../interfaces/IData'

export const HomeModule = ({ links }: IData): JSX.Element => {
	return (
		<>
			<Meta title="Webtronics | Courses" description="The best courses" />
			<HeaderComponent links={links} />
		</>
	)
}
