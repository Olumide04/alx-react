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
    'App-body': {
		fontSize: '1.4rem',
		padding: '1.2em',
		height: '45%',
	},

	'form-inputs': {
		display: 'flex',
		gap: '2em',
		alignItems: 'center',
	},

	mobile: {
		'@media (max-width: 375px)': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '0.5em',
		},
	},

	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
});

export default Login;