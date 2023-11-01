import { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header/Header";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

import Routers from "./Routes";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Routers />
    </div>
  );
}

export default App;
