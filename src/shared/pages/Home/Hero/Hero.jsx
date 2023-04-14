import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-block">
                <h2 className="hero-title title-h2">Let Your Home Be Unique</h2>
                <p className="hero-p p-black">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                <Link to="/project/bathroom/1" className="btn">Get started
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default Hero;