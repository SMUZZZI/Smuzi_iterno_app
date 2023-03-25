import React from "react";
import { Link } from "react-router-dom";
import "./work.css";

function Work() {
    return (
        <section className="work">
            <ul className="work-block">
                <li className="work-list-item">
                    <h3 className="work-title title-h3">Project Plan</h3>
                    <p className="work-p p-black-gray">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <Link to="/services" className="link-black-gray">Read more
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="work-list-item">
                    <h3 className="work-title title-h3">Interior Work</h3>
                    <p className="work-p p-black-gray">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <Link to="/services" className="link-black-gray">Read more
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="work-list-item">
                    <h3 className="work-title title-h3">Realization</h3>
                    <p className="work-p p-black-gray">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <Link to="/services" className="link-black-gray">Read more
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Work;