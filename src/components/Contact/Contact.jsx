// hooker
import React, { useContext, useRef, useState } from "react";
// css
import "./Contact.css";
// component u gorciqner
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  // hooker
  const theme = useContext(themeContext);
  const form = useRef();
  const [done, setDone] = useState(false);
  // mug fon
  const darkMode = theme.state.darkMode;


  return (
    <div className="contact-form" id="contact">
      {/* dzax mas@ */}
      <div className="w-left">
        <div className="awesome">
          {/* mug tesak */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* ach koxm */}
      <div className="c-right">
        <form ref={form}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
