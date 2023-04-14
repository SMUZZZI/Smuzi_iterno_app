import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./headermobile.css"

function HeaderMobile() {

    const [btnState, setBtnState] = useState(false);

    return (
        <nav className='header-nav-mobile'>
            <button onClick={() => {
                setBtnState(state => !state)
            }} className={`header-mobile-burger ${btnState && "header-mobile-burger-active"}`}>
                <span className="header-mobile-btn-line" />
                <span className="header-mobile-btn-line" />
                <span className="header-mobile-btn-line" />
            </button>
            <ul className={`header-mobile-list ${btnState && "header-mobile-list-active"}`}>
                <li className="header-mobile-item">
                    <Link to="/" >Home</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/services" >Services</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/project/bathroom/1" >Project</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/blog/1" >Blog</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/contactus" >Contact</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/team" >Our Team</Link>
                </li>
                <li className="header-mobile-item">
                    <Link to="/aboutus" >About Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMobile