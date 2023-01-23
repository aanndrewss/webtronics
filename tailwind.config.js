const bgColor = '#0C102D'
const primary = '#0A1482'
const lightPrimary = '#3B48D0'
const white = '#ffffff'
const errorColor = '#FD4646'
const borderColor = '#636363'
const textColor = '#A2CBFB'

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary,
				bgColor,
				lightPrimary,
				white,
				errorColor,
				borderColor,
				textColor
			}
		}
	},
	plugins: []
}
