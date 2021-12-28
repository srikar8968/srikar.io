import styles from './Gallery.module.css'
import Image from 'next/image'
import Link from 'next/link'

import type Work from '@/types/work'

const GalleryItem = ({item}: { item: Work }) => {
	
	return (
		<Link href={ item.url }>
			<a target="_blank" className={styles.masonryGridItemWrapper}
				style={{
					backgroundImage: `url('/images/work-images/${item.styling.backDrop}')`
				}}>

					<div 
						className={styles.masonryGridItem} 
						style={{
							minHeight: `${item.styling.minHeight}px`,
						}}>

						{ (!item?.git && item?.logo) && <Image 
							src={`/images/work-images/${item?.logo}`} 
							alt={item.name}
							width={180}
							height={50} />
						}

						{ item?.git && <div className={styles.masonryGridItemName}>{ item.name }</div> }

						{ item?.description && <p className={styles.masonryGridItemDesc}>{ item?.description }</p> }

					</div>
			</a>
		</Link>
	)
}

export default GalleryItem