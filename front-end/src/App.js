import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import './styles/App.css';

import Homepage from "./components/homepage";
import Recommended from "./components/recommended";
import Register from "./components/register";
import Account from "./components/account";
import Login from "./components/login";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.img}) no-repeat center bottom fixed;
  background-size: cover;
`

const App = () => {
  const [randomImg, setRandomImg] = useState("");
  const [randomImgSrc, setRandomImgSrc] = useState("");

  useEffect(() => {
    const getRandomImg = () => {  
      const importAll = (r) => {
        let images = {};
        r.keys().forEach((keys) => { images[keys.replace("./", "")] = r(keys) });
        return images;
      }
      const images = importAll(require.context("./images/", false, /\.jpg$/));
      const imgArr = Object.keys(images);

      let num = Math.floor(Math.random() * imgArr.length);
  
      let newRandomImg = imgArr[num];
      let newRandomImgSrc = Object.entries(images)[num][1].default;
      setRandomImg(newRandomImg);
      setRandomImgSrc(newRandomImgSrc);
    }

    getRandomImg()
  }, []);
  
  return (
    <div className="App">
      <StyledWrapper img={randomImgSrc}>
        <Router>
          <div className="navbar">
            <ul>
              <li>
                <Link to="/" className="navbar-item">Search</Link>
              </li>
              <li>
                <Link to="/recommended" className="navbar-item" >Recommended</Link>
              </li>
              <li>
                <Link to="/account" className="navbar-item">Account</Link>
              </li> 
              <li>
                <Link to="/login" className="navbar-item">Login</Link>
              </li>
              <li>
                <Link to="/register" className="navbar-item">Register</Link>
              </li>
            </ul>
          </div>

          <Switch>
          <Route path="/account">
              <Account />
            </Route>
            
            <Route path="/recommended">
              <Recommended />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>


          </Switch>
        </Router>
      </StyledWrapper>
    </div>
  );
}

export default App;