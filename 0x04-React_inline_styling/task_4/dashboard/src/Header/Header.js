import React from "react";
import { StyleSheet, css } from "aphrodite";
import holbertonLogo from '../assets/holberton_logo.jpg';

function Header() {
    return (
        <>
            <div className={css(styles["App-header"])}>
                <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </div>
        </>
    );
}

const styles = StyleSheet.create({
    "App-header": {
        display: "flex",
        alignItems: "center",
        fontSize: "1.4rem",
        color: "#e0354b",
        borderBottom: "3px solid #e0354b",
    },

    img: {
        width: "200px",
        height: "200px",
    },
});

export default Header;