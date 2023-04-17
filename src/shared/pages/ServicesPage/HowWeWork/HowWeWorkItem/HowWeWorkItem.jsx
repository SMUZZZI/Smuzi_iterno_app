import React from 'react'
import "./howweworkitem.css"

function HowWeWorkItem({data}) {
    return (
        <li className='howwework-item'>
            <div className="howwework-item-bg"
            style={{
                backgroundImage: `url(${data.bg})`
               }} />
            <div className="howwework-item-content">
                <div className='howwework-item-img-block'>
                    <div className='howwework-item-img-block-image' style={{
                        backgroundImage: `url(${data.svg})`
                    }}/>
                    <h2 className='howwework-item-img-block-number'>{data.num}</h2>
                </div>
                <div className='howwework-item-text-block'>
                    <h2 className='howwework-item-title'>{data.title}</h2>
                    <p className='p-black-gray howwework-item-p'>{data.text}</p>
                </div>
            </div>
        </li>
    )
}

export default HowWeWorkItem