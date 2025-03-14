import React from "react";
import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
