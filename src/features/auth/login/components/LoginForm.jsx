import { Button, Form } from "antd";
import React from "react";
import { LOGIN_FORM_NAME } from "../constant/loginFom.const";
import LoginFormInputs from "./LoginFormInputs";
import { useAuth } from "../../hook/useAuthApi";

const LoginForm = () => {
  const { login } = useAuth();
  const handleLoginSubmit = async (evt) => {
    try {
      await login(evt);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };
  return (
    <>
      <Form
        name={LOGIN_FORM_NAME}
        onFinish={handleLoginSubmit}
        layout="vertical"
        requiredMark={false}
      >
        <LoginFormInputs />
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
