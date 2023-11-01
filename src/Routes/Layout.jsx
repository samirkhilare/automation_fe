import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import AppLayout from "../Layouts/AppLayout";
import ProtectedRoute from "./ProtectedRoute";

const LayoutRoutes = ({ setIsAuthenticated }) => {
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, index) => (
          <Route
            element={<AppLayout setIsAuthenticated={setIsAuthenticated} />}
          >
            <Route path={path} element={Component} />
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;
