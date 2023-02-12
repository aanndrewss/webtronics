import { IMentors } from '@/app/interfaces/IMentors'
import { Htag, Paragraph } from '@/app/ui'
import styles from './AboutUs.module.scss'
import { AboutUsProps } from './AboutUs.props'
import Front from './front.svg'
import { Mentor } from './Mentor/Mentor'

export const AboutUs = ({ mentors }: AboutUsProps): JSX.Element => {
	return (
		<section id={'About'} className={styles.about}>
			<Htag className={styles.heading} tag="h2">
				About Us
			</Htag>
			<div className={styles.gridTemplate}>
				<div className={styles.mentorsWrapper}>
					<Htag className={styles.headingMentors} tag="h3">
						Mentors
					</Htag>
					<svg
						width="394"
						height="157"
						viewBox="0 0 394 157"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M195.798 1.00377V0H197.798V1.00377H195.798ZM195.798 5.01887V3.01132H197.798V5.01887H195.798ZM195.798 9.03396V7.02641H197.798V9.03396H195.798ZM195.798 13.0491V11.0415H197.798V13.0491H195.798ZM195.798 17.0642V15.0566H197.798V17.0642H195.798ZM195.798 21.0792V19.0717H197.798V21.0792H195.798ZM195.798 25.0943V23.0868H197.798V25.0943H195.798ZM195.798 29.1094V27.1019H197.798V29.1094H195.798ZM195.798 33.1245V31.117H197.798V33.1245H195.798ZM195.798 37.1396V35.1321H197.798V37.1396H195.798ZM195.798 41.1547V39.1472H197.798V41.1547H195.798ZM195.798 45.1698V43.1623H197.798V45.1698H195.798ZM195.798 49.1849V47.1773H197.798V49.1849H195.798ZM195.798 53.2V51.1924H197.798V53.2H195.798ZM195.798 57.2151V55.2075H197.798V57.2151H195.798ZM195.798 61.2302V59.2226H197.798V61.2302H195.798ZM195.798 65.2453V63.2377H197.798V65.2453H195.798ZM195.798 69.2604V67.2528H197.798V69.2604H195.798ZM195.798 73.2754V71.2679H197.798V73.2754H195.798ZM195.798 77.2905V75.283H197.798V77.2905H195.798ZM195.798 81.3056V79.2981H197.798V81.3056H195.798ZM195.798 85.3207V83.3132H197.798V85.3207H195.798ZM195.798 89.3358V87.3283H197.798V89.3358H195.798ZM195.798 93.3509V91.3434H197.798V93.3509H195.798ZM195.798 97.366V95.3584H197.798V97.366H195.798ZM195.798 101.381V99.3735H197.798V101.381H195.798ZM195.798 104.392V103.389H197.798V104.392H195.798Z"
							fill="url(#paint0_linear_52_458)"
							fillOpacity="0.7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M196.335 1.53653C196.34 1.20278 196.342 0.871811 196.342 0.543701L198.342 0.543747C198.342 0.881835 198.34 1.22206 198.335 1.56425L196.335 1.53653ZM196.201 5.55222C196.233 4.87319 196.262 4.20259 196.285 3.5408L198.284 3.6101C198.261 4.28254 198.231 4.96191 198.199 5.64679L196.201 5.55222ZM196.055 8.38644C196.07 8.11282 196.085 7.84035 196.099 7.56964L198.096 7.6755C198.082 7.94853 198.067 8.22168 198.052 8.49542C198.031 8.89436 198.01 9.29456 197.989 9.69753L195.991 9.59276C196.012 9.18939 196.034 8.78667 196.055 8.38644ZM195.807 13.6565C195.831 12.974 195.859 12.2954 195.89 11.6216L197.888 11.7141C197.857 12.382 197.829 13.0528 197.806 13.726L195.807 13.6565ZM195.736 17.7436C195.734 17.0588 195.74 16.3764 195.752 15.6972L197.752 15.7337C197.739 16.4003 197.734 17.0682 197.736 17.737L195.736 17.7436ZM195.861 21.8488C195.819 21.1628 195.789 20.4778 195.769 19.7946L197.768 19.7352C197.788 20.3991 197.817 21.0631 197.858 21.7265L195.861 21.8488ZM196.267 25.9553C196.171 25.2715 196.091 24.5873 196.024 23.9036L198.015 23.7086C198.079 24.3666 198.156 25.0233 198.248 25.678L196.267 25.9553ZM197.035 30.0288C196.872 29.3538 196.728 28.677 196.601 27.9992L198.567 27.6303C198.688 28.2762 198.825 28.9196 198.979 29.5599L197.035 30.0288ZM198.237 34.0128C197.996 33.357 197.777 32.698 197.578 32.0364L199.493 31.4602C199.681 32.0851 199.888 32.7065 200.114 33.3239L198.237 34.0128ZM199.917 37.8312C199.593 37.2078 199.293 36.5798 199.016 35.9479L200.847 35.1431C201.107 35.7365 201.389 36.3256 201.692 36.91L199.917 37.8312ZM202.078 41.4033C201.674 40.8251 201.295 40.2414 200.939 39.6526L202.65 38.6171C202.984 39.1689 203.339 39.7161 203.718 40.2582L202.078 41.4033ZM204.683 44.6678C204.208 44.1434 203.757 43.6128 203.329 43.0764L204.892 41.8284C205.294 42.3322 205.718 42.8313 206.166 43.3251L204.683 44.6678ZM207.65 47.5802C207.122 47.117 206.615 46.6476 206.131 46.1725L207.531 44.7441C207.989 45.193 208.467 45.6371 208.968 46.0761L207.65 47.5802ZM210.905 50.1486C210.331 49.7396 209.777 49.3246 209.243 48.9039L210.481 47.3331C210.989 47.7333 211.517 48.1289 212.065 48.5194L210.905 50.1486ZM214.372 52.3922C213.772 52.0391 213.191 51.6805 212.628 51.3167L213.713 49.6367C214.253 49.9853 214.811 50.3294 215.387 50.6689L214.372 52.3922ZM218.013 54.3551C217.381 54.0434 216.767 53.7267 216.17 53.4049L217.118 51.6441C217.695 51.9544 218.288 52.2603 218.898 52.5618L218.013 54.3551ZM221.751 56.0548C221.103 55.7836 220.471 55.5077 219.854 55.2273L220.682 53.4065C221.28 53.6785 221.894 53.9463 222.523 54.2099L221.751 56.0548ZM225.568 57.5325C224.912 57.2978 224.27 57.059 223.642 56.816L224.364 54.9507C224.976 55.1874 225.602 55.4204 226.242 55.6494L225.568 57.5325ZM229.45 58.8212C228.788 58.6176 228.139 58.4102 227.502 58.199L228.132 56.3007C228.755 56.5072 229.39 56.7102 230.038 56.9096L229.45 58.8212ZM232.419 59.685C232.08 59.5918 231.744 59.4976 231.411 59.4026L231.961 57.4794C232.287 57.5727 232.617 57.6651 232.949 57.7566C233.267 57.8438 233.585 57.9307 233.905 58.0172L233.382 59.9477C233.06 59.8605 232.739 59.773 232.419 59.685ZM237.291 60.9742C236.632 60.8063 235.978 60.6369 235.327 60.4661L235.835 58.5316C236.481 58.7013 237.131 58.8694 237.785 59.0362L237.291 60.9742ZM241.198 61.9437C240.54 61.7847 239.885 61.6244 239.234 61.4629L239.716 59.5217C240.363 59.6822 241.014 59.8415 241.668 59.9996L241.198 61.9437ZM245.115 62.8674C244.459 62.7163 243.806 62.5641 243.156 62.4108L243.614 60.4642C244.261 60.6166 244.911 60.768 245.564 60.9184L245.115 62.8674ZM249.045 63.7529C248.39 63.6085 247.738 63.4631 247.089 63.3169L247.528 61.3658C248.175 61.5114 248.824 61.6561 249.476 61.7999L249.045 63.7529ZM252.984 64.6059C252.326 64.4659 251.67 64.3252 251.016 64.1837L251.439 62.2289C252.09 62.3699 252.744 62.5101 253.4 62.6496L252.984 64.6059ZM256.929 65.4306C256.267 65.2945 255.608 65.1577 254.95 65.0203L255.36 63.0626C256.015 63.1996 256.673 63.3359 257.332 63.4717L256.929 65.4306ZM260.867 66.2298C260.208 66.0978 259.55 65.9652 258.894 65.8321L259.292 63.8721C259.946 64.0048 260.602 64.137 261.26 64.2688L260.867 66.2298ZM264.813 67.0111C264.155 66.8822 263.499 66.753 262.844 66.6234L263.232 64.6615C263.886 64.7908 264.541 64.9198 265.197 65.0484L264.813 67.0111ZM268.764 67.778C268.105 67.6511 267.447 67.5239 266.79 67.3965L267.171 65.4331C267.826 65.5604 268.484 65.6873 269.142 65.814L268.764 67.778ZM272.715 68.5336C272.055 68.4081 271.395 68.2823 270.737 68.1564L271.112 66.192C271.77 66.3178 272.429 66.4434 273.089 66.5688L272.715 68.5336ZM275.366 69.0359C275.14 68.9931 274.914 68.9504 274.688 68.9077L275.06 66.9425C275.717 67.0669 276.375 67.1912 277.034 67.3154L276.663 69.2807C276.23 69.1991 275.798 69.1175 275.366 69.0359ZM280.613 70.0244L278.64 69.6533L279.01 67.6878L280.983 68.0588L280.613 70.0244ZM284.564 70.7674L282.589 70.3957L282.958 68.4302L284.934 68.8019L284.564 70.7674ZM288.512 71.5127C287.854 71.388 287.196 71.2636 286.538 71.1394L286.909 69.1741C287.567 69.2984 288.225 69.4229 288.884 69.5476L288.512 71.5127ZM292.458 72.264C291.801 72.1382 291.143 72.0127 290.485 71.8874L290.859 69.9227C291.518 70.048 292.176 70.1737 292.834 70.2997L292.458 72.264ZM296.402 73.0245C295.745 72.8968 295.087 72.7695 294.429 72.6426L294.808 70.6788C295.467 70.8059 296.126 70.9333 296.784 71.0613L296.402 73.0245ZM300.341 73.7971C299.685 73.6673 299.029 73.538 298.373 73.4092L298.758 71.4466C299.415 71.5756 300.073 71.7052 300.73 71.8353L300.341 73.7971ZM304.278 74.5863C303.624 74.4536 302.968 74.3214 302.312 74.1899L302.705 72.2289C303.363 72.3607 304.02 72.4932 304.676 72.6263L304.278 74.5863ZM308.211 75.3954C307.557 75.2589 306.901 75.1231 306.244 74.988L306.647 73.029C307.306 73.1644 307.963 73.3006 308.62 73.4376L308.211 75.3954ZM312.136 76.2274C311.482 76.0866 310.827 75.9466 310.171 75.8075L310.585 73.8509C311.244 73.9905 311.901 74.131 312.557 74.2723L312.136 76.2274ZM316.049 77.0859C315.4 76.9408 314.749 76.7968 314.096 76.6536L314.525 74.7001C315.18 74.8438 315.833 74.9884 316.485 75.134L316.049 77.0859ZM319.963 77.9782C319.314 77.8273 318.664 77.6776 318.012 77.5289L318.456 75.5789C319.111 75.7282 319.765 75.8787 320.416 76.0303L319.963 77.9782ZM323.866 78.9071C323.218 78.7492 322.567 78.5926 321.913 78.4372L322.376 76.4915C323.033 76.6477 323.687 76.8051 324.339 76.9638L323.866 78.9071ZM327.754 79.8767C327.107 79.7112 326.457 79.5472 325.804 79.3845L326.288 77.4439C326.944 77.6075 327.598 77.7725 328.249 77.939L327.754 79.8767ZM331.623 80.8923C330.982 80.7196 330.339 80.5484 329.692 80.3787L330.2 78.4442C330.85 78.615 331.498 78.7873 332.144 78.9613L331.623 80.8923ZM335.48 81.9628C334.844 81.781 334.204 81.601 333.561 81.4226L334.096 79.4954C334.744 79.6751 335.388 79.8565 336.03 80.0398L335.48 81.9628ZM339.325 83.0961C338.69 82.903 338.051 82.7118 337.409 82.5224L337.974 80.604C338.622 80.7949 339.266 80.9878 339.907 81.1827L339.325 83.0961ZM343.143 84.2973C342.51 84.0912 341.872 83.8873 341.23 83.6855L341.83 81.7776C342.478 81.9814 343.122 82.1873 343.762 82.3955L343.143 84.2973ZM346.929 85.5753C346.301 85.3552 345.667 85.1375 345.028 84.9221L345.668 83.027C346.313 83.2448 346.954 83.4649 347.59 83.6877L346.929 85.5753ZM350.679 86.9404C350.06 86.706 349.435 86.4742 348.806 86.245L349.489 84.3656C350.127 84.5977 350.76 84.8325 351.387 85.0701L350.679 86.9404ZM354.384 88.4046C353.776 88.1539 353.162 87.9061 352.542 87.6611L353.277 85.801C353.906 86.0495 354.529 86.301 355.147 86.5557L354.384 88.4046ZM358.037 89.9819C357.442 89.7124 356.839 89.4463 356.23 89.1832L357.022 87.347C357.642 87.6145 358.255 87.8853 358.861 88.1597L358.037 89.9819ZM361.632 91.6915C361.049 91.3994 360.457 91.111 359.858 90.8261L360.716 89.0198C361.328 89.3103 361.931 89.6047 362.527 89.9029L361.632 91.6915ZM365.146 93.549C364.577 93.2309 363.999 92.9169 363.413 92.6068L364.347 90.8385C364.947 91.1557 365.539 91.4772 366.122 91.8032L365.146 93.549ZM368.555 95.5733C368.005 95.2259 367.445 94.8831 366.876 94.5448L367.896 92.825C368.482 93.1725 369.058 93.5249 369.624 93.8825L368.555 95.5733ZM371.83 97.7866C371.305 97.4065 370.769 97.0316 370.222 96.6617L371.341 95.0044C371.906 95.3862 372.46 95.7736 373.003 96.1669L371.83 97.7866ZM374.936 100.214C374.443 99.7969 373.937 99.3858 373.417 98.9804L374.649 97.4042C375.187 97.8251 375.714 98.2525 376.227 98.6865L374.936 100.214ZM377.827 102.881C377.373 102.422 376.904 101.969 376.42 101.523L377.775 100.053C378.281 100.519 378.772 100.993 379.249 101.474L377.827 102.881ZM379.811 105.04C379.603 104.795 379.39 104.552 379.174 104.31L380.664 102.976C380.892 103.23 381.115 103.486 381.335 103.745C381.556 104.005 381.773 104.264 381.987 104.524L380.442 105.795C380.236 105.543 380.025 105.292 379.811 105.04ZM382.807 108.867C382.435 108.349 382.05 107.83 381.649 107.31L383.234 106.09C383.648 106.628 384.047 107.165 384.432 107.701L382.807 108.867ZM384.957 112.102C384.624 111.559 384.276 111.014 383.913 110.467L385.578 109.36C385.955 109.927 386.316 110.493 386.662 111.057L384.957 112.102ZM386.852 115.477C386.562 114.911 386.258 114.343 385.938 113.772L387.681 112.793C388.014 113.386 388.331 113.977 388.633 114.567L386.852 115.477ZM388.469 118.987C388.227 118.399 387.97 117.809 387.696 117.216L389.513 116.378C389.798 116.997 390.066 117.612 390.319 118.225L388.469 118.987ZM389.79 122.619C389.598 122.012 389.391 121.402 389.168 120.789L391.047 120.105C391.28 120.745 391.496 121.382 391.697 122.015L389.79 122.619ZM390.8 126.351C390.66 125.73 390.505 125.104 390.335 124.474L392.265 123.951C392.443 124.609 392.605 125.262 392.751 125.91L390.8 126.351ZM391.497 130.158C391.408 129.527 391.305 128.889 391.188 128.247L393.155 127.887C393.278 128.557 393.384 129.221 393.477 129.879L391.497 130.158ZM391.889 134.014C391.849 133.377 391.796 132.732 391.73 132.082L393.72 131.88C393.788 132.556 393.843 133.226 393.885 133.887L391.889 134.014ZM391.999 137.894C392.002 137.255 391.996 136.607 391.977 135.952L393.977 135.896C393.996 136.575 394.002 137.244 393.999 137.904L391.999 137.894ZM391.862 141.785C391.903 141.145 391.935 140.495 391.959 139.836L393.958 139.907C393.933 140.586 393.9 141.254 393.858 141.91L391.862 141.785ZM391.529 145.678C391.596 145.043 391.659 144.395 391.716 143.733L393.709 143.905C393.65 144.581 393.586 145.242 393.518 145.888L391.529 145.678ZM391.072 149.587C391.15 148.952 391.23 148.301 391.31 147.632L393.296 147.866C393.216 148.542 393.135 149.198 393.056 149.832L391.072 149.587ZM390.618 153.538C390.678 152.903 390.751 152.241 390.832 151.556L392.818 151.79C392.739 152.467 392.667 153.112 392.609 153.727L390.618 153.538ZM390.447 156.589C390.447 156.255 390.456 155.911 390.471 155.559L392.469 155.646C392.455 155.974 392.447 156.288 392.447 156.589H390.447Z"
							fill="url(#paint1_linear_52_458)"
							fillOpacity="0.7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M197.665 1.53653C197.66 1.20278 197.658 0.871811 197.658 0.543701L195.658 0.543747C195.658 0.881835 195.66 1.22206 195.665 1.56425L197.665 1.53653ZM197.799 5.55222C197.767 4.87319 197.738 4.20259 197.715 3.5408L195.716 3.6101C195.739 4.28254 195.769 4.96191 195.801 5.64679L197.799 5.55222ZM197.945 8.38644C197.93 8.11282 197.915 7.84035 197.901 7.56964L195.904 7.6755C195.918 7.94853 195.933 8.22168 195.948 8.49542C195.969 8.89436 195.99 9.29456 196.011 9.69753L198.009 9.59276C197.988 9.18939 197.966 8.78667 197.945 8.38644ZM198.193 13.6565C198.169 12.974 198.141 12.2954 198.11 11.6216L196.112 11.7141C196.143 12.382 196.171 13.0528 196.194 13.726L198.193 13.6565ZM198.264 17.7436C198.266 17.0588 198.26 16.3764 198.248 15.6972L196.248 15.7337C196.261 16.4003 196.266 17.0682 196.264 17.737L198.264 17.7436ZM198.139 21.8488C198.181 21.1628 198.211 20.4778 198.231 19.7946L196.232 19.7352C196.212 20.3991 196.183 21.0631 196.142 21.7265L198.139 21.8488ZM197.733 25.9553C197.829 25.2715 197.909 24.5873 197.976 23.9036L195.985 23.7086C195.921 24.3666 195.844 25.0233 195.752 25.678L197.733 25.9553ZM196.965 30.0288C197.128 29.3538 197.272 28.677 197.399 27.9992L195.433 27.6303C195.312 28.2762 195.175 28.9196 195.021 29.5599L196.965 30.0288ZM195.763 34.0128C196.004 33.357 196.223 32.698 196.422 32.0364L194.507 31.4602C194.319 32.0851 194.112 32.7065 193.886 33.3239L195.763 34.0128ZM194.083 37.8312C194.407 37.2078 194.707 36.5798 194.984 35.9479L193.153 35.1431C192.893 35.7365 192.611 36.3256 192.308 36.91L194.083 37.8312ZM191.922 41.4033C192.326 40.8251 192.705 40.2414 193.061 39.6526L191.35 38.6171C191.016 39.1689 190.661 39.7161 190.282 40.2582L191.922 41.4033ZM189.317 44.6678C189.792 44.1434 190.243 43.6128 190.671 43.0764L189.108 41.8284C188.706 42.3322 188.282 42.8313 187.834 43.3251L189.317 44.6678ZM186.35 47.5802C186.878 47.117 187.385 46.6476 187.869 46.1725L186.469 44.7441C186.011 45.193 185.533 45.6371 185.032 46.0761L186.35 47.5802ZM183.095 50.1486C183.669 49.7396 184.223 49.3246 184.757 48.9039L183.519 47.3331C183.011 47.7333 182.483 48.1289 181.935 48.5194L183.095 50.1486ZM179.628 52.3922C180.228 52.0391 180.809 51.6805 181.372 51.3167L180.287 49.6367C179.747 49.9853 179.189 50.3294 178.613 50.6689L179.628 52.3922ZM175.987 54.3551C176.619 54.0434 177.233 53.7267 177.83 53.4049L176.882 51.6441C176.305 51.9544 175.712 52.2603 175.102 52.5618L175.987 54.3551ZM172.249 56.0548C172.897 55.7836 173.529 55.5077 174.146 55.2273L173.318 53.4065C172.72 53.6785 172.106 53.9463 171.477 54.2099L172.249 56.0548ZM168.432 57.5325C169.088 57.2978 169.73 57.059 170.358 56.816L169.636 54.9507C169.024 55.1874 168.398 55.4204 167.758 55.6494L168.432 57.5325ZM164.55 58.8212C165.212 58.6176 165.861 58.4102 166.498 58.199L165.868 56.3007C165.245 56.5072 164.61 56.7102 163.962 56.9096L164.55 58.8212ZM161.581 59.685C161.92 59.5918 162.256 59.4976 162.589 59.4026L162.039 57.4794C161.713 57.5727 161.383 57.6651 161.051 57.7566C160.733 57.8438 160.415 57.9307 160.095 58.0172L160.618 59.9477C160.94 59.8605 161.261 59.773 161.581 59.685ZM156.709 60.9742C157.368 60.8063 158.022 60.6369 158.673 60.4661L158.165 58.5316C157.519 58.7013 156.869 58.8694 156.215 59.0362L156.709 60.9742ZM152.802 61.9437C153.46 61.7847 154.115 61.6244 154.766 61.4629L154.284 59.5217C153.637 59.6822 152.986 59.8415 152.332 59.9996L152.802 61.9437ZM148.885 62.8674C149.541 62.7163 150.194 62.5641 150.844 62.4108L150.386 60.4642C149.739 60.6166 149.089 60.768 148.436 60.9184L148.885 62.8674ZM144.955 63.7529C145.61 63.6085 146.262 63.4631 146.911 63.3169L146.472 61.3658C145.825 61.5114 145.176 61.6561 144.524 61.7999L144.955 63.7529ZM141.016 64.6059C141.674 64.4659 142.33 64.3252 142.984 64.1837L142.561 62.2289C141.91 62.3699 141.256 62.5101 140.6 62.6496L141.016 64.6059ZM137.071 65.4306C137.733 65.2945 138.392 65.1577 139.05 65.0203L138.64 63.0626C137.985 63.1996 137.327 63.3359 136.668 63.4717L137.071 65.4306ZM133.133 66.2298C133.792 66.0978 134.45 65.9652 135.106 65.8321L134.708 63.8721C134.054 64.0048 133.398 64.137 132.74 64.2688L133.133 66.2298ZM129.187 67.0111C129.845 66.8822 130.501 66.753 131.156 66.6234L130.768 64.6615C130.114 64.7908 129.459 64.9198 128.803 65.0484L129.187 67.0111ZM125.236 67.778C125.895 67.6511 126.553 67.5239 127.21 67.3965L126.829 65.4331C126.174 65.5604 125.516 65.6873 124.858 65.814L125.236 67.778ZM121.285 68.5336C121.945 68.4081 122.605 68.2823 123.263 68.1564L122.888 66.192C122.23 66.3178 121.571 66.4434 120.911 66.5688L121.285 68.5336ZM118.634 69.0359C118.86 68.9931 119.086 68.9504 119.312 68.9077L118.94 66.9425C118.283 67.0669 117.625 67.1912 116.966 67.3154L117.337 69.2807C117.77 69.1991 118.202 69.1175 118.634 69.0359ZM113.387 70.0244L115.36 69.6533L114.99 67.6878L113.017 68.0588L113.387 70.0244ZM109.436 70.7674L111.411 70.3957L111.042 68.4302L109.066 68.8019L109.436 70.7674ZM105.488 71.5127C106.146 71.388 106.804 71.2636 107.462 71.1394L107.091 69.1741C106.433 69.2984 105.775 69.4229 105.116 69.5476L105.488 71.5127ZM101.542 72.264C102.199 72.1382 102.857 72.0127 103.515 71.8874L103.141 69.9227C102.482 70.048 101.824 70.1737 101.166 70.2997L101.542 72.264ZM97.5976 73.0245C98.2548 72.8968 98.9126 72.7695 99.5707 72.6426L99.1921 70.6788C98.5331 70.8059 97.8743 70.9333 97.2161 71.0613L97.5976 73.0245ZM93.6592 73.7971C94.3146 73.6673 94.9706 73.538 95.6274 73.4092L95.2424 71.4466C94.5845 71.5756 93.9271 71.7052 93.2705 71.8353L93.6592 73.7971ZM89.7222 74.5863C90.3765 74.4536 91.0318 74.3214 91.688 74.1899L91.295 72.2289C90.6373 72.3607 89.9804 72.4932 89.3244 72.6263L89.7222 74.5863ZM85.7888 75.3954C86.4432 75.2589 87.0989 75.1231 87.7558 74.988L87.3529 73.029C86.6942 73.1644 86.0367 73.3006 85.3803 73.4376L85.7888 75.3954ZM81.8641 76.2274C82.5177 76.0866 83.1728 75.9466 83.8294 75.8075L83.4147 73.8509C82.756 73.9905 82.0987 74.131 81.4428 74.2723L81.8641 76.2274ZM77.9511 77.0859C78.6002 76.9408 79.2511 76.7968 79.9037 76.6536L79.4752 74.7001C78.8201 74.8438 78.1667 74.9884 77.5149 75.134L77.9511 77.0859ZM74.0373 77.9782C74.6857 77.8273 75.336 77.6776 75.9884 77.5289L75.5439 75.5789C74.8887 75.7282 74.2353 75.8787 73.584 76.0303L74.0373 77.9782ZM70.134 78.9071C70.7825 78.7492 71.4334 78.5926 72.0865 78.4372L71.6236 76.4915C70.9672 76.6477 70.3129 76.8051 69.6609 76.9638L70.134 78.9071ZM66.2462 79.8767C66.8934 79.7112 67.5433 79.5472 68.1958 79.3845L67.712 77.4439C67.0558 77.6075 66.402 77.7725 65.7508 77.939L66.2462 79.8767ZM62.3772 80.8923C63.0178 80.7196 63.6614 80.5484 64.308 80.3787L63.8003 78.4442C63.1495 78.615 62.5015 78.7873 61.8565 78.9613L62.3772 80.8923ZM58.5199 81.9628C59.1561 81.781 59.7957 81.601 60.4386 81.4226L59.9039 79.4954C59.2562 79.6751 58.6116 79.8565 57.9704 80.0398L58.5199 81.9628ZM54.6752 83.0961C55.31 82.903 55.9488 82.7118 56.5913 82.5224L56.0259 80.604C55.378 80.7949 54.7336 80.9878 54.093 81.1827L54.6752 83.0961ZM50.8572 84.2973C51.4903 84.0912 52.1278 83.8873 52.7695 83.6855L52.1696 81.7776C51.5216 81.9814 50.8777 82.1873 50.2381 82.3955L50.8572 84.2973ZM47.0708 85.5753C47.6994 85.3552 48.3331 85.1375 48.9716 84.9221L48.3323 83.027C47.6868 83.2448 47.0459 83.4649 46.4098 83.6877L47.0708 85.5753ZM43.3214 86.9404C43.9403 86.706 44.5647 86.4742 45.1945 86.245L44.5106 84.3656C43.8728 84.5977 43.2402 84.8325 42.6129 85.0701L43.3214 86.9404ZM39.6159 88.4046C40.2238 88.1539 40.8379 87.9061 41.458 87.6611L40.7233 85.801C40.0941 86.0495 39.4707 86.301 38.8533 86.5557L39.6159 88.4046ZM35.9628 89.9819C36.5585 89.7124 37.1611 89.4463 37.7704 89.1832L36.9778 87.347C36.3581 87.6145 35.745 87.8853 35.1385 88.1597L35.9628 89.9819ZM32.3677 91.6915C32.9514 91.3994 33.543 91.111 34.1423 90.8261L33.2835 89.0198C32.6725 89.3103 32.0688 89.6047 31.4727 89.9029L32.3677 91.6915ZM28.8536 93.549C29.4227 93.2309 30.0007 92.9169 30.5874 92.6068L29.6531 90.8385C29.0528 91.1557 28.4609 91.4772 27.8777 91.8032L28.8536 93.549ZM25.4448 95.5733C25.9946 95.2259 26.5545 94.8831 27.1245 94.5448L26.1036 92.825C25.5182 93.1725 24.9424 93.5249 24.3765 93.8825L25.4448 95.5733ZM22.17 97.7866C22.6946 97.4065 23.2308 97.0316 23.7784 96.6617L22.6589 95.0044C22.0937 95.3862 21.5396 95.7736 20.9966 96.1669L22.17 97.7866ZM19.0644 100.214C19.5574 99.7969 20.0635 99.3858 20.5825 98.9804L19.3513 97.4042C18.8126 97.8251 18.2863 98.2525 17.773 98.6865L19.0644 100.214ZM16.1726 102.881C16.6269 102.422 17.0963 101.969 17.5803 101.523L16.2248 100.053C15.719 100.519 15.2276 100.993 14.7511 101.474L16.1726 102.881ZM14.1888 105.04C14.3971 104.795 14.6095 104.552 14.826 104.31L13.3363 102.976C13.1084 103.23 12.8846 103.486 12.6649 103.745C12.4441 104.005 12.2269 104.264 12.0133 104.524L13.5575 105.795C13.7644 105.543 13.9748 105.292 14.1888 105.04ZM11.1932 108.867C11.5647 108.349 11.9503 107.83 12.3508 107.31L10.7662 106.09C10.352 106.628 9.95284 107.165 9.56812 107.701L11.1932 108.867ZM9.04298 112.102C9.3761 111.559 9.72403 111.014 10.0874 110.467L8.42191 109.36C8.045 109.927 7.68382 110.493 7.33781 111.057L9.04298 112.102ZM7.14838 115.477C7.43768 114.911 7.74214 114.343 8.06242 113.772L6.31863 112.793C5.9855 113.386 5.66866 113.977 5.3674 114.567L7.14838 115.477ZM5.53065 118.987C5.77277 118.399 6.03014 117.809 6.30356 117.216L4.4873 116.378C4.20232 116.997 3.93396 117.612 3.68141 118.225L5.53065 118.987ZM4.20984 122.619C4.40187 122.012 4.60898 121.402 4.83208 120.789L2.95256 120.105C2.71974 120.745 2.50359 121.382 2.30313 122.015L4.20984 122.619ZM3.19952 126.351C3.33997 125.73 3.49489 125.104 3.66537 124.474L1.73485 123.951C1.5569 124.609 1.39523 125.262 1.24872 125.91L3.19952 126.351ZM2.50296 130.158C2.59218 129.527 2.69487 128.889 2.81229 128.247L0.844894 127.887C0.722488 128.557 0.615509 129.221 0.522614 129.879L2.50296 130.158ZM2.1109 134.014C2.15143 133.377 2.20398 132.732 2.26996 132.082L0.280167 131.88C0.211563 132.556 0.156998 133.226 0.114929 133.887L2.1109 134.014ZM2.00093 137.894C1.9976 137.255 2.00426 136.607 2.02257 135.952L0.0233459 135.896C0.00437927 136.575 -0.00248718 137.244 0.000961304 137.904L2.00093 137.894ZM2.13766 141.785C2.09744 141.145 2.06459 140.495 2.04108 139.836L0.0423584 139.907C0.0665436 140.586 0.100342 141.254 0.141617 141.91L2.13766 141.785ZM2.47108 145.678C2.40421 145.043 2.34097 144.395 2.28383 143.733L0.29126 143.905C0.34964 144.581 0.414108 145.242 0.482071 145.888L2.47108 145.678ZM2.92845 149.587C2.85004 148.952 2.76968 148.301 2.69048 147.632L0.70433 147.866C0.78421 148.542 0.865173 149.198 0.943527 149.832L2.92845 149.587ZM3.38237 153.538C3.32198 152.903 3.24869 152.241 3.16811 151.556L1.18182 151.79C1.26147 152.467 1.3329 153.112 1.39134 153.727L3.38237 153.538ZM3.5526 156.589C3.5526 156.255 3.54417 155.911 3.52876 155.559L1.53067 155.646C1.545 155.974 1.5526 156.288 1.5526 156.589H3.5526Z"
							fill="url(#paint2_linear_52_458)"
							fillOpacity="0.7"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_52_458"
								x1="196.018"
								y1="9.82667"
								x2="201.218"
								y2="10.0152"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#15BFFD" />
								<stop offset="1" stopColor="#9C37FD" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_52_458"
								x1="217.544"
								y1="15.2325"
								x2="293.711"
								y2="198.312"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#15BFFD" />
								<stop offset="1" stopColor="#9C37FD" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_52_458"
								x1="176.456"
								y1="15.2325"
								x2="100.289"
								y2="198.312"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#15BFFD" />
								<stop offset="1" stopColor="#9C37FD" />
							</linearGradient>
						</defs>
					</svg>
					<div className={styles.mentors}>
						{mentors.map((m: IMentors) => (
							<Mentor key={m.id} mentor={m} />
						))}
					</div>
				</div>
				<Paragraph className={styles.description}>
					Front-end engineers work closely with designers to make websites
					beautiful, functional, and fast. This Career Path will teach you not
					only the necessary languages and technologies, but how to think like a
					front-end engineer, too.
				</Paragraph>
				<Front className={styles.front} />
			</div>
		</section>
	)
}
