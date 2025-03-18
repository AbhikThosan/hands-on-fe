import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const activeKey =
    location.pathname === "/"
      ? "home"
      : location.pathname.startsWith("/events")
      ? "events"
      : location.pathname.startsWith("/community-help")
      ? "community-help"
      : location.pathname.startsWith("/teams")
      ? "teams"
      : location.pathname.startsWith("/profile")
      ? "profile"
      : location.pathname.startsWith("/registration")
      ? "register"
      : location.pathname.startsWith("/login")
      ? "login"
      : "home";

  return (
    <Header className="text-white flex justify-between items-center px-6">
      <div className="text-white text-xl font-bold">HandsOn</div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[activeKey]}>
        <Menu.Item
          key="home"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "home"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item
          key="events"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/events"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "events"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Events
          </Link>
        </Menu.Item>
        <Menu.Item
          key="community-help"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/community-help"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "community-help"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Community Help
          </Link>
        </Menu.Item>
        <Menu.Item
          key="teams"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/teams"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "teams"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Teams
          </Link>
        </Menu.Item>
        <Menu.Item
          key="profile"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/profile"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "profile"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item
          key="register"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/registration"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "register"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Register
          </Link>
        </Menu.Item>
        <Menu.Item
          key="login"
          className="!text-white"
          style={{ background: "transparent" }}
        >
          <Link
            to="/login"
            className={`!transition-all !duration-500 !ease-in-out ${
              activeKey === "login"
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Login
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
