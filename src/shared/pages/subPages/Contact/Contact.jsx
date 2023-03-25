import React from "react";
import { Link } from 'react-router-dom'
import "./contact.css";

function Contact() {
    return (
        <section className="contact">
            <h2 className="title-h2-small contact-title">Wanna join the interno?</h2>
            <p className="title-h3 contact-p">It is a long established fact  will be distracted.</p>
            <Link to="/contactus" className="contact-btn"
            onClick={() =>{
                window.scrollTo(0, 0);
            }}
            >Contact With Us
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </Link>
        </section>
    );
}

export default Contact;