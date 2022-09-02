import React from 'react';
import { useOrderBy } from '../../hooks/useOrderBy';

export const Sorters = () => {

    const [select, selected] = useOrderBy();

    return (
        <>
            <select name="Order by..." value={select} onChange={selected}>
                <option value="default">Default</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
                <option value="weightMin-asc">Weight Min Asc</option>
                <option value="weightMax-asc">Weight Max Asc</option>
                <option value="weightMin-desc">Weight Min Desc</option>
                <option value="weightMax-desc">Weight Max Desc</option>
            </select>
        </>
    )
}