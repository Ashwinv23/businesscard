import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="main-main">
      <h2 style={{ textAlign: "center" }}>Ashwin Vijendra</h2>
      <h4 className="main-title">Frontend Developer</h4>
      <h5 className="main-website">ashwinvijendra.website</h5>
      <div className="container">
        <button>Email</button>
        <button style={{ backgroundColor: "#297FE5", color: "white" }}>
          LinkedIn
        </button>
      </div>

      <div className="main-content">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Main;
