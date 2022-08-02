// ays component - @ muq ev bac tesakneri hamar e

import React, { useContext } from "react";
// css - @
import "./Toggle.css";
// nkarnery
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
// context
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon /> {/* lusin */}
      <Sun />  {/* arev */}
      <div className="t-button" style={darkMode ? { left: "2px" } : { right: "2px" }}></div>
    </div>
  );
};

export default Toggle;
