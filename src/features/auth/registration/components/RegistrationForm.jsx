import { Button, Form } from "antd";
import React from "react";
import RegistrationFormInputs from "./RegistrationFormInputs";
import { REGISTRATION_FORM_NAME } from "../constant/registrationFrom.const";
import { useAuth } from "../../hook/useAuthApi";

const RegistrationForm = () => {
  const { register } = useAuth();
  const handleRegistrationSubmit = async (evt) => {
    try {
      await register(evt);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };
  return (
    <>
      <Form
        name={REGISTRATION_FORM_NAME}
        onFinish={handleRegistrationSubmit}
        layout="vertical"
        requiredMark={false}
      >
        <RegistrationFormInputs />
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
