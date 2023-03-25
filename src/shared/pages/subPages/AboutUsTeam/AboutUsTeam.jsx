import React from 'react'
import { Link } from 'react-router-dom'

import "./aboutusteam.css"

function AboutUsTeam({ data, title }) {

    return (
        <section className='aboutus-team'>
            <div className="aboutus-team-content">
                <h2 className='aboutus-team-title title-h2-small '>{title}</h2>
                <ul className='aboutus-team-list'>
                    <li className='aboutus-team-item'>
                        <Link to="/team/details" state={data[0]}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={data[0].img} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to="/team/details" state={data[1]}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={data[1].img} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to="/team/details" state={data[2]}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={data[2].img} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to="/team/details" state={data[3]}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={data[3].img} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutUsTeam
