import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";

const PrivateRoute = () => {
  const token = sessionStorage.getItem("token");

  return (
    <>
      {token ? (
        <>
          <div className="sticky top-0 z-50 bg-gray-900">
            <Header />
          </div>
          <Outlet />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
