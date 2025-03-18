import { Button, Form } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LOGIN_FORM_NAME } from "../constant/loginFom.const";
import LoginFormInputs from "./LoginFormInputs";
import { useAuth } from "../../hook/useAuthApi";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (values) => {
    setIsLoading(true);
    try {
      await login(values);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.message || "Login failed. Please try again.";
      toast.error(`Login failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      name={LOGIN_FORM_NAME}
      onFinish={handleLoginSubmit}
      layout="vertical"
      requiredMark={false}
    >
      <LoginFormInputs />
      <Button type="primary" htmlType="submit" block loading={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
