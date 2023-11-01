import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillHouseExclamationFill,
} from "react-icons/bs";

import { NavLink, useNavigate } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ openSidebarToggle, OpenSidebar, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const sidebarList = [
    {
      icon: <BsGrid1X2Fill />,
      title: "Dashboard",
      url: "/",
    },
    {
      icon: <BsFillHouseExclamationFill />,
      title: "Home",
      url: "/home",
    },
    {
      icon: <BsFillArchiveFill />,
      title: "Part Master",
      url: "/part-master",
    },
    {
      icon: <BsFillGrid3X3GapFill />,
      title: "Modal Master",
      url: "/modal-master",
    },
    {
      icon: <BsFillGearFill />,
      title: "Setting",
      url: "/settings",
    },
    {
      icon: <BsPeopleFill />,
      title: "Customers",
    },
  ];

  const handleRoutes = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      {/* <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div> */}
      <div style={{ marginTop: "4rem" }}>
        <ul className="sidebar-list">
          {sidebarList.map(({ icon, title, url }) => (
            <li
              className={
                openSidebarToggle
                  ? "sidebar-list-item"
                  : "sidebar-list-item-left"
              }
            >
              <button
                onClick={() => handleRoutes(url)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                }}
                className="btn"
              >
                <span>{icon}</span>
                <span
                  className={
                    openSidebarToggle
                      ? "sidebar-list-title-none"
                      : "sidebar-list-title"
                  }
                >
                  &nbsp;&nbsp;{title}
                </span>
              </button>
            </li>
          ))}

          <li
            className={
              openSidebarToggle ? "sidebar-list-item" : "sidebar-list-item-left"
            }
          >
            <button
              onClick={handleLogout}
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
              }}
              className="btn"
            >
              <span>
                <BiLogOut />
              </span>
              <span
                className={
                  openSidebarToggle
                    ? "sidebar-list-title-none"
                    : "sidebar-list-title"
                }
              >
                &nbsp;&nbsp;Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
