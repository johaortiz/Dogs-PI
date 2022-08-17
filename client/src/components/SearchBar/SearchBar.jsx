import React from 'react'
import { useSetSearchBar } from '../../hooks/useSetSearchBar';

export const SearchBar = () => {

    const [search, handleChange] = useSetSearchBar();

    return (
        <div>
            <input
                value={search}
                placeholder="Search a Dog..."
                onChange={handleChange}
            />
        </div>
    )
}
