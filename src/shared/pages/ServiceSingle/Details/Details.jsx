import React from 'react'
import "./servisesingledetails.css"

function Details({detailsData}) {
    return (
        <section className='servisesingle-details'>
            <h2 className='servisesingle-details-title title-h2-small'>{detailsData.title}</h2>
            <div className="servisesingle-details-text-block">
                <h3 className='title-h3 servisesingle-details-title-h3'>{detailsData.titleH3}</h3>
                <p className='p-black-gray servisesingle-details-p'>{detailsData.text}</p>
                <p className='p-black-gray servisesingle-details-p'>{detailsData.textSecond}</p>
            </div>
        </section>
    )
}

export default Details