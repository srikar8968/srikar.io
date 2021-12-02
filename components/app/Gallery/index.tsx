import WorkType from '@/types/work'
import { Wrapper } from './partials/styles'
import GalleryItem from './partials/GalleryItem'

type ListProps = {
	items: WorkType[]
}

const Gallery = ({items}: ListProps) => {
	return (
		<Wrapper>
			{ items.map((item,index) => (
				<GalleryItem item={item} key={index} />
			)) }
		</Wrapper>
	)
}

export default Gallery