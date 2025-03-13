import { Checkbox, Form, Input } from "antd";
import React from "react";
import {
  REGISTRATION_FORM_CAUSES,
  REGISTRATION_FORM_INPUTS,
  REGISTRATION_FORM_SKILLS,
} from "../constant/registrationFrom.const";

const RegistrationFormInputs = () => {
  return (
    <>
      <Form.Item
        label="Name"
        name={REGISTRATION_FORM_INPUTS.NAME}
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Email"
        name={REGISTRATION_FORM_INPUTS.EMAIL}
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
        name={REGISTRATION_FORM_INPUTS.PASSWORD}
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 6, message: "Password must be at least 6 characters long!" },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item
        label="Skills"
        name={REGISTRATION_FORM_INPUTS.SKILLS}
        rules={[
          { required: true, message: "Please select at least one skill!" },
        ]}
      >
        <Checkbox.Group className="!grid !grid-cols-2 !gap-2">
          {REGISTRATION_FORM_SKILLS.map((skill) => (
            <Checkbox key={skill} value={skill}>
              {skill}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        label="Causes"
        name={REGISTRATION_FORM_INPUTS.CAUSES}
        rules={[
          { required: true, message: "Please select at least one cause!" },
        ]}
      >
        <Checkbox.Group className="!grid !grid-cols-2 !gap-2">
          {REGISTRATION_FORM_CAUSES.map((cause) => (
            <Checkbox key={cause} value={cause}>
              {cause}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </>
  );
};

export default RegistrationFormInputs;
