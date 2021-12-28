import styles from './partials/Search.module.css'

const Search = ({ onSearchEnter }: { onSearchEnter: (val: string) => void }) => {
    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchBoxInput}
                aria-label="Search writings"
                type="text"
                onChange={(e) => onSearchEnter(e.target.value)}
                placeholder="Search"
                spellCheck="false"
                autoComplete="off" />
            <svg className={styles.searchBoxIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillOpacity="0.25" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    )
}

export default Search;