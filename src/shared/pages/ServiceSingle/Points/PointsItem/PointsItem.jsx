import React from 'react'
import "./pointsitem.css"

function PointsItem({ data }) {
    const items = data.items;
    const result = [];

    for (let i = 0; i < items.length; i++) {
        result.push(
            <li key={i} className="pointsitem-item">
                <p className='pointsitem-num'>{i +1}</p>
                <p className='p-black-gray pointsitem-p'>{items[i]}</p>
            </li>,
        )
    }

    return (
        <li className='pointsitem'>
            <h2 className='pointsitem-title'>{data.title}</h2>
            <ul className='pointsitem-list'>
                {result}
            </ul>
        </li >
    )
}

export default PointsItem