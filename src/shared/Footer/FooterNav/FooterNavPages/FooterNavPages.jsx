import React from "react";
import { Link } from 'react-router-dom'
import "./footernavpages.css";

function FooterNavPages() {
    return (
        <ul className="footernavpages">
            <li className="footernavpages-item">
                <h3 className="footernavpages-item-title">Pages</h3>
            </li>
            <li className="footernavpages-item">
                <Link to="/aboutus" className="footernavpages-item-p" onClick={() =>{
                    window.scrollTo(0, 0);
                }}>About Us</Link>
            </li>
            <li className="footernavpages-item">
                <Link to="/project" className="footernavpages-item-p" onClick={() =>{
                    window.scrollTo(0, 0);
                }}>Our Projects</Link>
            </li>
            <li className="footernavpages-item">
                <Link to="/team" className="footernavpages-item-p" onClick={() =>{
                    window.scrollTo(0, 0);
                }}>Our Team</Link>
            </li>
            <li className="footernavpages-item">
                <Link to="/contactus" className="footernavpages-item-p" onClick={() =>{
                    window.scrollTo(0, 0);
                }}>Contact Us</Link>
            </li>
            <li className="footernavpages-item">
                <Link to="/services" className="footernavpages-item-p" onClick={() =>{
                    window.scrollTo(0, 0);
                }}>Services</Link>
            </li>
        </ul>
    );
}

export default FooterNavPages;