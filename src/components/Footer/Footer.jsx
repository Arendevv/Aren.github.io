// css
import "./Footer.css";
// react
import React from "react";
// nkarner u ikonkeq
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Arenharutyunyann@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/arenn889?igshid=YmMyMTA2M2Y="><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/aren.harutyunyan.984"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Arendevv"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
