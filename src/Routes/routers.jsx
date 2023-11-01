import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ModalMaster from "../Pages/ModalMaster/ModalMaster";
import ModalScreen from "../Pages/ModalScreen/ModalScreen";
import PartMaster from "../Pages/PartMaster/PartMaster";

export const routes = [
  // {
  //   path: "/",
  //   Component: <Login />,
  // },
  {
    path: "/",
    Component: <Home />,
  },
  {
    path: "/home",
    Component: <ModalScreen />,
  },
  {
    path: "/part-master",
    Component: <PartMaster />,
  },
  {
    path: "/modal-master",
    Component: <ModalMaster />,
  },
];
