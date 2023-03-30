import React from 'react'
import "./teampagelistblank.css"


function TeamPageListBlank({ data }) {

    const blank = data

    return (
        <ul className='teampagelist-blank'>
            {
                blank.map(i => (
                    <li key={i} className='teampagelist-blank-item'>
                        <div className="teampagelist-blank-item-bg gradient" />
                        <div className='teampagelist-blank-title gradient' />
                        <div className='teampagelist-blank-p gradient' />
                        <div className='teampagelist-blank-link-block'>
                            <div className='teampagelist-blank-link gradient' />
                            <div className='teampagelist-blank-link gradient' />
                            <div className='teampagelist-blank-link gradient' />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TeamPageListBlank
