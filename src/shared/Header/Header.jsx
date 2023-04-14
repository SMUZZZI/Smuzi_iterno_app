import React from "react";
import "./header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";


function Header() {

    return (
        <header className="header">
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderMobile />
        </header>
    );
}

export default Header;
