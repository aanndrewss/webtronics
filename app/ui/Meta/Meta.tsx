import Head from 'next/head'
import { FC } from 'react'

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
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
				rel="stylesheet"
			/>
		</Head>
	)
}
