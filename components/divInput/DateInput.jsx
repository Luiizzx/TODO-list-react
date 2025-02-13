import React from 'react'
import { dateDivStyle, dateInputLabelStyle, dateInputStyle } from '../divStyles/dateInputStyle'

export function DateInput({ minDate, onChangeFn }) {
    return (
        <div className='DateInput' id="age-div" style={dateDivStyle}>
            <strong><label htmlFor="second-input" id="age-label" style={dateInputLabelStyle}>Data final:</label></strong>

            <input type="date" id="second-input" value={minDate} min={minDate} onChange={onChangeFn} style={dateInputStyle}></input>
        </div>
    )
}
