import { Button, Form } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import RegistrationFormInputs from "./RegistrationFormInputs";
import { REGISTRATION_FORM_NAME } from "../constant/registrationFrom.const";
import { useAuth } from "../../hook/useAuthApi";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegistrationSubmit = async (evt) => {
    setLoading(true);
    try {
      await register(evt);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
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
        <Button type="primary" htmlType="submit" block loading={loading}>
          {loading ? "Registering..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
