import React, { useState, useRef, useEffect } from "react";
import "../styles/homepage.css";

import animals from "../utils/animals.json";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  }

  const handleSubmit = () => {
    console.log(input);

  }

  

  return (
    <div className="container-homepage">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="pos-rel">
          <input className="search-bar"
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={() => setDisplay(!display)} />
          {display && (
            <div className="auto-container" ref={wrapperRef}>
              {animals
              .filter((search) => search.toLowerCase().search(input.toLowerCase()) > -1)
              .map((item, index) => {
                return (
                  <div className="option" 
                  key={index} 
                  tabIndex="0" 
                  onClick={() => { setInput(item); setDisplay(false); }}
                  onKeyPress={(e) => { if (e.key === "Enter") { setInput(item); setDisplay(false); }}}>
                    <p>{item}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Homepage;