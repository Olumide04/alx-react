import React from "react";
import './Header.css';
import holbertonLogo from '../assets/holberton_logo.jpg';

function Header() {
    return (
    <div className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
    </div>
    );
}

export default Header;