import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="text-center !bg-gray-800 !text-white p-4">
      © {new Date().getFullYear()} HandsOn. All rights reserved.
    </Footer>
  );
};

export default AppFooter;
