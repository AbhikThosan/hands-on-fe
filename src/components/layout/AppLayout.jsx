import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AppFooter from "./AppFooter";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <Content style={{ padding: "24px", flex: "1 0 auto" }}>
        <Outlet />
      </Content>
      <AppFooter style={{ flexShrink: 0 }} />
    </Layout>
  );
};

export default AppLayout;
