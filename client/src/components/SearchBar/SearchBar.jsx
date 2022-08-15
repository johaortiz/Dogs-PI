import React from 'react'
import { useSetSearchBar } from '../../hooks/useSetSearchBar';

export const SearchBar = () => {

    const [search, handleChange, debounce] = useSetSearchBar();

    return (
        <div>
            <input
                value={search}
                placeholder="Search Pokemon"
                onChange={handleChange}
            />
        </div>
    )
}
