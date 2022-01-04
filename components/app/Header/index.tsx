import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode';
import ThemeToggler from '@/components/app/ThemeToggler'


import styles from './partials/Header.module.css'

const Header = () => {
	const [logo, setLogo] = useState('signature-inv-sm');
	const { value } = useDarkMode();

	useEffect(() => {
		let _logo = value ? 'signature-inv-sm' : 'signature-sm';
		setLogo(_logo);
	}, [value])

	return (
		<header className={styles.appHeader}>
			<div className="container">
				<div className={styles.wrapper}>
					<Link href="/">
						<a className={styles.logo}>
							<Image 
								src={`/images/${logo}.png`}
                            	alt="Panuganti Srikar"
                            	width={60}
                            	height={23}
                            	priority />
						</a>
					</Link>

					<div className="flex items-center">
						<div className={styles.navigation}>
	                        <Link href="/writings"><a><span className="txt-primary">#</span>&nbsp;writings&nbsp;</a></Link>
	                        <Link href="mailto:srikarpanuganti08@gmail.com"><a><span className="txt-primary">#</span>&nbsp;reachMe&nbsp;</a></Link>
		                </div>
		                <ThemeToggler />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header