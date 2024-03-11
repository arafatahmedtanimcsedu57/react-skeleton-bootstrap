import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./protectedRoute";
import AppLayout from "../layout";

import {
  Login,
  Profile,
  Home,
  Products
} from "../pages";

const AppRoute : React.FunctionComponent<any> = ():JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route 
          path="*" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  );
};

export default AppRoute;
