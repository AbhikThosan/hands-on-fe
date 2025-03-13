import React from "react";
import AuthLogin from "../../../features/auth/login";
import Title from "antd/es/typography/Title";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <Title level={2} className="text-center mb-4">
          Welcome Back!
        </Title>
        <AuthLogin />
      </div>
    </div>
  );
};

export default Login;
