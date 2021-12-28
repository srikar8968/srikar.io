import styles from './partials/UserCard.module.css'
import Avatar from './partials/Avatar'
import Link from 'next/link'
import myAvatar from '@/public/images/avatar-dark-sm.png'

const UserCard = () => {
	return (
		<div className={styles.userCard}>
			<Avatar media={myAvatar} />
			<Link href="/">
				<a className={styles.userName}>Srikar Panuganti</a>
			</Link>
		</div>
	)
}

export default UserCard