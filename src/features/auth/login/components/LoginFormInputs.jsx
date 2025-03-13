import React from "react";
import { LOGIN_FORM_INPUTS } from "../constant/loginFom.const";
import { Form, Input } from "antd";

const LoginFormInputs = () => {
  return (
    <>
      <Form.Item
        label="Email"
        name={LOGIN_FORM_INPUTS.EMAIL}
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name={LOGIN_FORM_INPUTS.PASSWORD}
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 6, message: "Password must be at least 6 characters long!" },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};

export default LoginFormInputs;
