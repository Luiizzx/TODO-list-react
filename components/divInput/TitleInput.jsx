import React from 'react'
import { titleDivStyle, titleInputLabelStyle, titleInputStyle } from '../divStyles/titleInputStyle'

export function TitleInput({ title, onChangeFn }) {
    return (
        <div className='TitleInput' id="name-div" style={titleDivStyle}>
            <strong><label htmlFor="first-input" id="name-label" style={titleInputLabelStyle}>Titulo:</label></strong>

            <input type="text" id="first-input" value={title} onChange={onChangeFn} style={titleInputStyle}></input>
        </div >
    )
}