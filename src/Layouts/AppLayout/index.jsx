import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = ({ setIsAuthenticated }) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 10,
          top: "0px",
        }}
      >
        <Header OpenSidebar={OpenSidebar} />
      </div>
      <div
        style={{
          position: "fixed",
          width: "14rem",
          height: "100vh",
          zIndex: 8,
        }}
      >
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          setIsAuthenticated={setIsAuthenticated}
          OpenSidebar={OpenSidebar}
        />
      </div>
      <div className="main-frame">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default AppLayout;
