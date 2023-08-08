import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles["App-body"])}>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <button>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    "App-body": {
        fontSize: "1rem",
        margin: "auto",
        height: "45%",
        padding: "2rem",
        borderBottom: "3px solid #e0354b",
    },
});

export default Login;