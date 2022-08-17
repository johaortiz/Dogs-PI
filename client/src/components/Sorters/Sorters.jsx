import React from 'react'
import { useOrderBy } from '../../hooks/useOrderBy';


export const Sorters = () => {

    const [select, selected] = useOrderBy();

    return (
        <div>
            <select name="Order by..." value={select} onChange={selected} >
                <option value="default">Default</option>
                <option value="weightMin-asc">+WeightMin</option>
                <option value="weightMin-desc">-WeightMin</option>
                <option value="weightMax-asc">+WeightMax</option>
                <option value="weightMax-desc">-WeightMax</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    )
}