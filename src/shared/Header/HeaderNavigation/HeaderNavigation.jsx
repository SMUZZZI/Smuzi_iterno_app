import React from "react";
import { Link } from 'react-router-dom';
import "./headernavigation.css";

import { useState } from 'react'
import HeaderPages from "./HeaderPages/HeaderPages";



function HeaderNavigation() { 

    const [btnState, setBtnState] = useState(false);
    function pagesClick() {
        setBtnState(btnState => !btnState);
    }
    let toggleClassCheck = btnState ? " link-active": "";

    const resetBtn = () => {
        setBtnState(false)
    }
    return (
        <nav className="headerNav">
            <ul className="headerNavList">
                <li className="headerNavItem">
                    <Link onClick={resetBtn} to="/">Home</Link>
                </li>
                <li className="headerNavItem">
                    <a onClick={pagesClick} className={`link${toggleClassCheck}`}>Pages
                    <div className="link-pages">
                    <HeaderPages />
                    </div>
                    </a>
                </li>
                <li className="headerNavItem">
                    <Link onClick={resetBtn} to="/services">Services</Link>
                </li>
                <li className="headerNavItem">
                    <Link onClick={resetBtn} to="/project/bathroom/1">Project</Link>
                </li>
                <li className="headerNavItem">
                    <Link onClick={resetBtn} to="/blog/1">Blog</Link>
                </li>
                <li className="headerNavItem">
                    <Link onClick={resetBtn} to="/contactus">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;