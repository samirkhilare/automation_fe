import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, redirectTo, isAuthenticated }) => {
  return (
    <Route
      element={isAuthenticated ? element : <Navigate to={redirectTo} replace />}
    />
  );
};

export default ProtectedRoute;
