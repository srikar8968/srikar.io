import EntryType from '@/types/entry'
import { format, parseISO } from 'date-fns'

import styles from './Meta.module.css'

const Meta = ({ post, single = false }: { post: EntryType, single: boolean }) => {
	return (
		<div className={styles.postMeta}>
            <span>: : : : : :&nbsp;</span>
            <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
            <span className={styles.separator}>•</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                { post.readingTime }
            </span>
           	{ single ? 
           		<>
           		<span className={styles.separator}>•</span>
	           		<button className={styles.shareWrapper}>
			            share&nbsp;
			            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
			        </button>
		        </>
		        : null
		    }
        </div>
	)
}

export default Meta