import React from "react";
import "./header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderSearchMobile from "./HeaderSearchMobile/HeaderSearchMobile";


function Header() {

    return (
        <header className="header">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderNavigation />
            <HeaderMobile />
            <HeaderSearchMobile />
        </header>
    );
}

export default Header;
