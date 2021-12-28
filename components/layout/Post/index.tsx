import type { NextPage } from 'next'
import { ReactNode } from 'react'
import Comments from '@/components/app/Comments'
import useDarkMode from 'use-dark-mode';

import styles from './partials/Post.module.css'

const PostLayout: NextPage = ({children}: { children: ReactNode }) => {
    const darkMode = useDarkMode();

    return (
        <div className={styles.postBody}>
            { children }

            <Comments theme={darkMode.value ? 'dark' : 'light'} />
        </div>
    )
}

export default PostLayout