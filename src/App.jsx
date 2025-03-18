import React from "react";
import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import AppLayout from "./components/layout/AppLayout";
import UserProfile from "./pages/profile";
import Teams from "./pages/teams";
import TeamDashboard from "./features/teams/components/TeamDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId/dashboard" element={<TeamDashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
