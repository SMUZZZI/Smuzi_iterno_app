import React from "react";
import "./header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";


function Header(){
    return(
        <header className="header">
            <HeaderLogo />
            <HeaderNavigation />
        </header>
    );
}

export default Header;
