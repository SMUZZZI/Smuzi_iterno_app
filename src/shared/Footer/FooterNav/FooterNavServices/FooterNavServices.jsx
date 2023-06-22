import React from "react";
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'
import "./footernavservices.css";



function FooterNavServices() {
    
    return (
        <ul className="footernavservices">
            <li className="footernavpages-item">
                <h3 className="footernavservices-item-title">Services</h3>
            </li>
            <li className="footernavservices-item">
                <Link to="/project/kitchan/1"onClick={() =>{
                    window.scrollTo(0, 0);
                }} className="footernavservices-item-p">Kitchan</Link>
            </li>
            <li className="footernavservices-item">
                <Link to="/project/bathroom/1"onClick={() =>{
                    window.scrollTo(0, 0);
                }} className="footernavservices-item-p">Bathroom</Link>
            </li>
            <li className="footernavservices-item">
                <Link to="/project/bedroom/1"onClick={() =>{
                    window.scrollTo(0, 0);
                }} className="footernavservices-item-p">Bedroom</Link>
            </li>
            <li className="footernavservices-item">
                <Link to="/project/livingroom/1"onClick={() =>{
                    window.scrollTo(0, 0);
                }} className="footernavservices-item-p">Living Area</Link>
            </li>
        </ul>
    );
}

export default FooterNavServices;