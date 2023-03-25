import React from "react";
import "./footernav.css";
import FooterNavContact from "./FooterNavContact/FooterNavContact";
import FooterNavPages from "./FooterNavPages/FooterNavPages";
import FooterNavServices from "./FooterNavServices/FooterNavServices";

function FooterNav() {
    return (

            <ul className="footernav">
                <FooterNavPages />
                <FooterNavServices />
                <FooterNavContact />
            </ul>
       
    );
}

export default FooterNav;