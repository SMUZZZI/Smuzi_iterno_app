import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./headermobile.css"

function HeaderMobile() {

    const [btnState, setBtnState] = useState(false);

    const resetBtn = () => {
        setBtnState(false)
    }

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
                    <Link onClick={resetBtn} to="/" >Home</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/services" >Services</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/project/bathroom/1" >Project</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/blog/1" >Blog</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/contactus" >Contact</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/team" >Our Team</Link>
                </li>
                <li className="header-mobile-item">
                    <Link onClick={resetBtn} to="/aboutus" >About Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMobile