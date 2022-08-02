// css
import "./Works.css";
// react
import React, { useContext } from "react";
// nkarner
import Git from "../../img/git.png";
import Photoshop from "../../img/photoshop.png";
import ReactIcon from "../../img/react.png";
import Github from "../../img/github.png";
import Gitlab from "../../img/gitlab.png";
// hooker u gorciqner
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* dzax mas */}
      <div className="w-left">
        <div className="awesome">
          {/* muq fon */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked with All these
          </span>
          <span>Frameworks & Instruments</span>
          <span>
          Frameworks are about efficiency and effectiveness. They save you time. By forcing common conventions, 
            <br />
            a framework helps solve common issues like view rendering, asset generation.
            <br /><br/>
            Virtual instruments are hierarchical and modular.
            <br />
            You can use them as top-level programs.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* ach mas */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Photoshop} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReactIcon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Gitlab} alt="" />
          </div>
        </motion.div>
        {/* fon */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
