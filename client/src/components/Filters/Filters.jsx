import React from 'react'
import { useFilter } from '../../hooks/useFilter';



export const Filters = () => {

    const [select, selected] = useFilter();

    return (
        <div>
            <select name="Filter by..." value={select} onChange={selected} >
                <option value="default">Default</option>
                <option value="api">From Api</option>
                <option value="db">From DB</option>
            </select>

        </div>
    )
}
