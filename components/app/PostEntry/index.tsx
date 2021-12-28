import EntryType from '@/types/entry'
import Meta from './partials/Meta'
import Link from 'next/link'

import styles from './partials/PostEntry.module.css'

const PostEntry = ({ post }: { post: EntryType }) => {
	return (
		<Link href="/writings/[slug]" as={`/writings/${post.slug}`}>
            <a className={styles.postEntry}>
                <h5 className={styles.title}>{ post?.title }</h5>
                <p className={styles.excerpt}>{ post?.excerpt }</p>

                <Meta post={post} />
            </a>
        </Link>
	)
}

export default PostEntry