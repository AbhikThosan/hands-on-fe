import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const activeKey =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/profile"
      ? "profile"
      : location.pathname === "/login"
      ? "login"
      : location.pathname === "/registration"
      ? "register"
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
      </Menu>
    </Header>
  );
};

export default Navbar;
