import styles from './partials/Gallery.module.css'
import GalleryItem from './partials/GalleryItem'

import type Work from '@/types/work'

const Gallery = ({items}: { items: Work[] }) => {
	return (
		<div className={styles.masonryGrid}>
			{ items?.map((item, index) => (
				<GalleryItem item={item} key={index} />
			)) }
		</div>
	)
}

export default Gallery