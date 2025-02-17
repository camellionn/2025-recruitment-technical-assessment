import { Filter } from 'lucide-react';

const FilterSection = () => {
    return (
        <div style={{color: 'orange', display: 'flex', borderRadius: '10px', border: '2px solid orange', width: '5rem', padding: '0.5rem', gap: '2px', marginLeft: '1rem'}} className='filter-container'>
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