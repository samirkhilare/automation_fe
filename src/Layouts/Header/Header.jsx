import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <button onClick={OpenSidebar}>
          <BsJustify className="icon" />
        </button>
      </div>
      <div
        style={{
          marginLeft: "15px",
        }}
        className="header-left"
      >
        {/* <button style={{ backgroundColor: "none" }} > */}
        <BsJustify className="icon" onClick={OpenSidebar} />
        {/* </button> */}
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        &nbsp;
        <BsFillEnvelopeFill className="icon" />
        &nbsp;
        <BsPersonCircle className="icon" />
        &nbsp;
      </div>
    </header>
  );
};

export default Header;
