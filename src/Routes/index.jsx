import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Pages/Login/Login";

const Routers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter basename="/">
        <Suspense>
          <Routes>
            {isAuthenticated ? (
              <Route
                path={`/*`}
                element={<Layout setIsAuthenticated={setIsAuthenticated} />}
              />
            ) : (
              <Route
                path={`/`}
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Routers;
