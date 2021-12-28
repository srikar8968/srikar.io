import styles from './Avatar.module.css'
import Image from 'next/image'

const Avatar = ({ media }: { media: boolean }) => {
	return (
		<div className={styles.avatar}>
			<Image 
				src={media}
            	alt="Panuganti Srikar"
            	layout="fixed"
            	width={32}
            	height={32} />
		</div>
	)
}

export default Avatar