import { Filter } from 'lucide-react';

const FilterSection = () => {
    return (
        <div style={{color: 'orange', display: 'flex', borderRadius: '10px', border: '2px solid orange', width: '5rem', padding: '10px', gap: '2px'}} className='filter-container'>
            <div className='filter'>
                <Filter />
            </div>

            <div style = {{fontWeight: 'bold'}} className='filter-text'>
                Filter
            </div>
        </div>
    )
}

export default FilterSection;