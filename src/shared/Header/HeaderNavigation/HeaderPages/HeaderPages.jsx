import React from 'react'
import { Link } from 'react-router-dom';
import "./headerpages.css"

function HeaderPages() {
  return (
    <ul className='headerpages'>
        <li className='headerpages-item'>
        <Link to="/aboutus">About Us</Link>
        </li>
        <li className='headerpages-item'>
        <Link to="/project">Our Projects</Link>
        </li>
        <li className='headerpages-item'>
        <Link to="/team">Our Team</Link>
        </li>
        <li className='headerpages-item'>
        <Link to="/contactus">Contact Us</Link>
        </li>
        <li className='headerpages-item'>
        <Link to="/services">Services</Link>
        </li>
    </ul>
  )
}

export default HeaderPages
