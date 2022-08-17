import React from 'react'
import { BtnDelete } from './BtnDelete'

export const CardSelectedTemperament = ({ select }) => {
    return (
        <span>
            {select} <BtnDelete select={select} />
        </span>
    )
}
