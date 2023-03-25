import React from 'react'

import "./points.css"
import PointsItem from './PointsItem/PointsItem'

function Points() {
    return (
        <section className='points'>
            <ul className='points-list'>
            <PointsItem data={{title: "Use of Interior", items: ["We provide high quality design services.","Project on time and Latest Design.","Scientific Skills For getting a better result.","Renovations Benefit of Service.","We are confident about our projects."]}} />
            <span className='points-line'></span>
            <PointsItem data={{title: "Make An Art", items: ["We provide high quality design services.","Project on time and Latest Design.","Scientific Skills For getting a better result.","Renovations Benefit of Service.","We are confident about our projects."]}} />
            </ul>
        </section>
    )
}

export default Points