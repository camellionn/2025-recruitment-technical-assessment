import { ListFilter } from 'lucide-react';

const SortFilter = () => {
    return (
        <div style={{color: 'orange', display: 'flex', borderRadius: '10px', border: '2px solid orange', width: '5rem', padding:'0.5rem' , gap: '2px', marginRight: '1rem'}} className='sort-container'>
            <div className='filter'>
                <ListFilter />
            </div>

            <div style = {{fontWeight: 'bold'}} className='sort-text'>
                Sort
            </div>
        </div>
    )
}

export default SortFilter;