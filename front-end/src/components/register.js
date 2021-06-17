import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';

import "../styles/register.css";

const Register = () => {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordMatch, setPasswordMatch] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const submitted = { name: nameInput, email: emailInput, password: passwordInput };
	}

	const display = () => {
		if (error) {
			return <p>Registration Failed! <br />{error.toString()}</p>
		} else if (redirect) {
			return <Redirect to="/login"/>
		}
	}

  Axios.defaults.withCredentials = true

  const reg = () => {
    Axios.post("http://localhost:3001/register", { 
      name: nameInput, 
      email: emailInput, 
      password: passwordInput 
    }).then((response)=>{
      console.log(response)
    })
  }

  

	return (
    <div className="bgr-img-reg">
      <div className="container-reg">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="container-form-reg">
          <input type="text"
            name="name"
            placeholder="Enter your name here"
            className="bar-reg"
            value={nameInput}
            onChange={(e) => { setNameInput(e.target.value) }} />
          <input type="text"
            name="email"
            placeholder="Enter your email here"
            className="bar-reg"
            value={emailInput}
            onChange={(e) => { setEmailInput(e.target.value) }} />
          <input type="password"
            name="password"
            placeholder="Enter your password here"
            className="bar-reg"
            value={passwordInput}
            onChange={(e) => { setPasswordInput(e.target.value) }} />
          <input type="password"
            name="passwordMatch"
            placeholder="Enter your password again"
            className="bar-reg"
            value={passwordMatch}
            onChange={(e) => { setPasswordMatch(e.target.value) }} />
          <input type="submit" name="submit" className="form-button-reg" value="Submit" onClick={reg}/>
        </form>
        {display()}
        <p className="login-text">Already have an account: <Link to="/login" className="link-text">Login here!</Link></p>
      </div>
    </div>
	);
}

export default Register;