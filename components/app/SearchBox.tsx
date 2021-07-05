type Props = {
    onSearchEnter: (val: string) => void
}

const SearchBox = ({ onSearchEnter }: Props) => {
    return (
        <div className="inline-block border rounded relative pl pr">
            <input
                className="bg-default pd text-sm"
                aria-label="Search writings"
                type="text"
                onChange={(e) => onSearchEnter(e.target.value)}
                placeholder="Search"
                spellCheck="false"
                autoComplete="off" />
            <svg className="text-light" style={{ position: 'absolute', top: '.5rem', right: '.5rem' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    )
}

export default SearchBox;