import { Layout } from "antd";
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AppFooter from "./AppFooter";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="p-6">
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
