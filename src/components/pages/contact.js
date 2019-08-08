import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  console.log("Contact");

  return (
    <div className="info">
      <h1>Contact Me</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          +1(705)817-30-80
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:pozovnoy.oleg@gmail.com">pozovnoy.oleg@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
