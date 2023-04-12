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
                        <Link to={`/team/details/${data.items[0]._id}`}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={`http://45.146.166.237:5000${data.items[0].img}`} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to={`/team/details/${data.items[1]._id}`}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={`http://45.146.166.237:5000${data.items[1].img}`} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to={`/team/details/${data.items[2]._id}`}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={`http://45.146.166.237:5000${data.items[2].img}`} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                    <li className='aboutus-team-item'>
                        <Link to={`/team/details/${data.items[3]._id}`}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            <div className="aboutus-item-bg"></div>
                            <img src={`http://45.146.166.237:5000${data.items[3].img}`} className="aboutus-team-item-img" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutUsTeam
