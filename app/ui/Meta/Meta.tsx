import React, { FC } from 'react'
import Head from 'next/head'

interface IMetaProps {
	title: string
	description: string
}

export const Meta: FC<IMetaProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link
				href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&display=swap"
				rel="stylesheet"
			/>
		</Head>
	)
}
