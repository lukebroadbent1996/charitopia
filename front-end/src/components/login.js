import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "../styles/login.css";

const Login = ({ setUser }) => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [error, setError] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const submitted = { email: emailInput, password: passwordInput };
	}

	const display = () => {
		if (error) {
			return <p>Login Failed!</p>
		} else if (redirect) {
			return <Redirect to="/account"/>
		}
	}

	return (
		<div className="bgr-img-log">
			<div className="container-log">
				<h1>Login</h1>
				<form onSubmit={handleSubmit} className="container-form-log">
					<input type="text"
						name="email"
						placeholder="Enter your email here"
						className="bar-log"
						value={emailInput}
						onChange={(e) => { setEmailInput(e.target.value) }} />
					<input type="password"
						name="password"
						placeholder="Enter your password here"
						className="bar-log"
						value={passwordInput}
						onChange={(e) => { setPasswordInput(e.target.value) }} />
					<input type="submit" name="submit" className="form-button-log" value="Submit" />
				</form>
				{display()}
				<p className="register-text">Don't have an account yet: <Link to="/register" className="link-text">Register here!</Link></p>
			</div>
		</div>
	);
}

export default Login;