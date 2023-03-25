import React from "react";
import "./footernavcontact.css";

function FooterNavContact() {
    return (
        <ul className="footernavcontact">
            <li className="footernavcontact-item">
                <h3 className="footernavcontact-item-title">Contact</h3>
            </li>
            <li className="footernavcontact-item">
                <a href="#">
                    <p className="footernavcontact-item-p">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                </a>
            </li>
            <li className="footernavcontact-item">
                <a href="#">
                    <p className="footernavcontact-item-p">contact@interno.com</p>
                </a>
            </li>
            <li className="footernavcontact-item">
                <a href="#">
                    <p className="footernavcontact-item-p">(123) 456 - 7890</p>
                </a>
            </li>
        </ul>
    );
}

export default FooterNavContact;