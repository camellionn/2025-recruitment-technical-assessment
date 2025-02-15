import { Search } from 'lucide-react';

const SearchIcon = () => {
    return (
        <div style={{color: 'gray', display: 'flex', borderRadius: '5px', border: '2px solid rgb(216, 216, 216)', width: '35rem', padding: '10px', gap: '2px'}} className='search-container'>
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