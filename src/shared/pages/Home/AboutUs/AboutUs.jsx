import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";
import CallUs from "./CallUs/CallUs";

function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <h2 className="about-us-title title-h2-small">We Create The Art Of Stylish Living Stylishly</h2>
                <p className="about-us-p p-black-gray">It is a long established fact that a reader will be distracted by the of readable content of a page
                    when lookings at its layouts the points of using
                    that it has a more-or-less normal.</p>
                <div className="about-us-callus-block">
                    <CallUs />
                    <Link to="/aboutus" className="btn-short">Get Free Estimate
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="about-us-bg" />
        </section>
    );
}

export default AboutUs;