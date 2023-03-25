import React from "react";
import "./footer.css";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterNav from "./FooterNav/FooterNav";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <FooterLinks />
                <FooterNav />
            </div>
            <p className="footer-copyright">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
        </footer>
    );
}

export default Footer;