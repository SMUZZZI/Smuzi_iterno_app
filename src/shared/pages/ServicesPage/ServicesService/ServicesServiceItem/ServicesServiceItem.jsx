import React from 'react'
import { Link } from 'react-router-dom'
import "./servicesserviceitem.css"

function ServicesServiceItem({ data }) {
    return (
        <li className='services-service-item'>
            <h2 className='services-service-title title-h3'>{data.name}</h2>
            <p className='services-service-p p-black-gray'>{data.text}</p>
            <Link to="/services/single" state={data.itemData} className='services-service-link link-black-gray'
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >Read more
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </Link>
        </li>
    )
}

export default ServicesServiceItem
