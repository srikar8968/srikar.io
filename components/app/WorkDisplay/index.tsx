import styles from './partials/WorkDisplay.module.css'
import Card from './partials/Card'

import type Work from '@/types/work'

const WorkDisplay = ({items}: { items: Work[] }) => {
	return (
		<div>
			{ items?.map((item, index) => (
				<Card key={index} align={index%2 === 0 ? 'right' : 'left'} item={item} />
			)) }
		</div>
	)
}

export default WorkDisplay;