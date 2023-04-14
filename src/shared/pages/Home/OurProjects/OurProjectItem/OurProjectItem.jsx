import React from "react";
import { Link } from 'react-router-dom'
import "./ourprojectitem.css";

function OurProjectItem({ data }) {
    const details = data
    return (
        <li key={data._id} className="ourproject-item">
            <img src={`http://45.146.166.237:5000${data.img}`} className="ourproject-item-img" />
            <div className="ourproject-item-info-block">
                <div className="ourproject-item-title-block">
                    <h3 className="ourproject-item-title title-h3">{data.title}</h3>
                    <p className="p-black-gray">{data.tag}</p>
                </div>
                <Link to={`/project/id=/${details._id}`} className="circle-btn">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="currentColor" />
                        <path d="M32 44L40 35L32 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
        </li>
    );
}

export default OurProjectItem;