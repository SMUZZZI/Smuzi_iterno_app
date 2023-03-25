import React from 'react'
import { Link } from 'react-router-dom'
import "./toportfolio.css"

function ToPortfolio() {
    return (
        <section className='toportfolio'>
            <div className="toportfolio-img"></div>
            <div className="toportfolio-content">
                <h2 className='title-h2-small toportfolio-title'>We love design.That's how we got here.</h2>
                <p className='p-black-gray toportfolio-p'>It is a long established fact that a reader will be distracted by the of readable content .</p>
                <Link to="/project" className='toportfolio-link btn'
                    onClick={()=>{
                        window.scrollTo(0, 0);
                    }}
                >Our Portfolio
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.92969 8.43536L15.6529 8.29851M10.5479 1.91132L17.0708 8.4343L10.4165 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default ToPortfolio
