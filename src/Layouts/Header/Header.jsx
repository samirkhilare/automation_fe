import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { Box } from "@mui/material";

const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        pl={10}
      >
        <>
          <Box display="flex">
            <Box mr={2} borderRight={2} borderColor={"white"} pr={2}>
              {/* <BsFillBellFill className="icon" />
              <br /> */}
              <span className="header-left-menu-text">
                <b>PRODUCTION :</b> 100
              </span>
            </Box>
            <Box mr={2} borderRight={2} borderColor={"white"} pr={2}>
              {/* <BsFillEnvelopeFill className="icon" /> <br /> */}
              <span className="header-left-menu-text">
                <b>DATE :</b> 21/04/200 - 12:00 AM
              </span>
            </Box>
            <Box mr={2}>
              {/* <BsPersonCircle className="icon" /> <br /> */}
              <span className="header-left-menu-text">
                <b>NAME :</b> Toney start
              </span>
            </Box>
          </Box>
        </>
        <>
          <div className="menu-icon">
            <button onClick={OpenSidebar}>
              <BsJustify className="icon" />
            </button>
          </div>
          <div className="header-right">
            <BsFillBellFill className="icon" />
            &nbsp;
            <BsFillEnvelopeFill className="icon" />
            &nbsp;
            <BsPersonCircle className="icon" />
            &nbsp;
          </div>
        </>
      </Box>
    </header>
  );
};

export default Header;
