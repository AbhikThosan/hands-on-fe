import React from "react";
import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
