import { Search } from 'lucide-react';

const SearchIcon = () => {
    return (
        <div style={{color: 'gray', display: 'flex', borderRadius: '5px', border: '2px solid rgb(216, 216, 216)', padding: '0.4rem', gap: '2px'}} className='search-container'>
            <div className='search'>
                <Search />
            </div>

            <div className='search-text'>
                Search for a building...
            </div>
        </div>
    )
}

export default SearchIcon;