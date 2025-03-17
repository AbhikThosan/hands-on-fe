import React from "react";
import {
  EDIT_USER_PROFILE_FORM_CAUSES,
  EDIT_USER_PROFILE_FORM_INPUTS,
  EDIT_USER_PROFILE_FORM_SKILLS,
} from "../constant/editUserProfileForm.const";
import { Checkbox, Form, Input } from "antd";

const EditUserProfileFormInput = () => {
  return (
    <>
      <Form.Item
        name={EDIT_USER_PROFILE_FORM_INPUTS.NAME}
        label="Name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        name={EDIT_USER_PROFILE_FORM_INPUTS.SKILLS}
        label="Skills"
        rules={[
          { required: true, message: "Please select at least one skill" },
        ]}
      >
        <Checkbox.Group className="!grid !grid-cols-2 !gap-2">
          {EDIT_USER_PROFILE_FORM_SKILLS.map((skill) => (
            <Checkbox key={skill} value={skill}>
              {skill}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        name={EDIT_USER_PROFILE_FORM_INPUTS.CAUSES}
        label="Causes Supported"
        rules={[
          { required: true, message: "Please select at least one cause" },
        ]}
      >
        <Checkbox.Group className="!grid !grid-cols-2 !gap-2">
          {EDIT_USER_PROFILE_FORM_CAUSES.map((cause) => (
            <Checkbox key={cause} value={cause}>
              {cause}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </>
  );
};

export default EditUserProfileFormInput;
