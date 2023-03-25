import React from 'react'
import { Link } from 'react-router-dom'
import "./aboutusresult.css"

function AboutUsResult() {
    return (
        <ul className='aboutusresult'>
            <li className='aboutusresult-item'>
            </li>
            <li className='aboutusresult-item'>
                <h2 className='aboutusresult-title title-h2-small'>The End Result</h2>
                <p className='aboutusresult-p p-black-gray'>It is a long established fact that a reader will be distracted by the of readable content of a page
                    when lookings at its layouts the points of using
                    that it has a more-or-less normal.</p>
                <Link to="/project/*" className='btn'>Our Portfolio
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.93542L15.7232 8.79857M10.6182 2.41138L17.1412 8.93436L10.4868 15.5887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </Link>
            </li>
        </ul>
    )
}

export default AboutUsResult
