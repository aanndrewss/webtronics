import { Paragraph } from '@/app/ui'
import React from 'react'
import { HeaderLinkProps } from './HeaderLink.props'

export const HeaderLink = ({ name }: HeaderLinkProps) => {
	return (
		<a href="#">
			<Paragraph>{name}</Paragraph>
		</a>
	)
}
