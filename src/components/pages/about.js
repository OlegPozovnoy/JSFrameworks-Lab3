import React from "react";
import avatar from "../../images/avatar.png";
function About() {
  console.log("About");

  return (
    <header>
      <div className="header">
        <img src={avatar} alt="me smiling" />
        <h1>Pozovnoy Oleg</h1>
      </div>
      <div className="info">
        <ul>
          <li>
            Graduated from the Georgian college in 2018 and moved to Russia.
          </li>
          <li>Worked for several years in finance.</li>
          <li>Graduated from the Moscow State University in 2002.</li>
          <li>Graduated from high school in 1991.</li>
          <li>Passed away in 1985.</li>
        </ul>
      </div>
    </header>
  );
}

export default About;
