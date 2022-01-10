import styles from './partials/MobileNav.module.css'
import Link from 'next/link'

const MobileNav = () => {
	return (
		<div className={styles.navWrapper}>
			<Link href="/writings">
				<a className={styles.navLink}>Writings</a>
			</Link>
			<Link href="mailto:srikarpanuganti08@gmail.com">
				<a className={styles.navLink}>Reach me</a>
			</Link>
		</div>
	)
}

export default MobileNav