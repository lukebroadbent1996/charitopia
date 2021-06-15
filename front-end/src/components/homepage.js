import React, { useState } from "react";
import "../styles/homepage.css";

const Homepage = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(input);

  }

  return (
    <div className="container-homepage">
      <form onSubmit={handleSubmit}>
        <input className="search-bar"
        type="text"
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  )
}

export default Homepage;