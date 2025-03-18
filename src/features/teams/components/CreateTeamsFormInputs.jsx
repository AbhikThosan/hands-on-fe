import { Form, Input, Switch } from "antd";
import React from "react";
import { CREATE_TEAM_FORM_INPUTS } from "../constant/createTeamForm.const";

const CreateTeamsFormInputs = () => {
  return (
    <>
      <Form.Item
        name={CREATE_TEAM_FORM_INPUTS.NAME}
        label="Team Name"
        rules={[{ required: true, message: "Please enter a team name" }]}
      >
        <Input placeholder="Team Name" />
      </Form.Item>
      <Form.Item
        name={CREATE_TEAM_FORM_INPUTS.DESCRIPTION}
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea rows={4} placeholder="Team Description" />
      </Form.Item>
      <Form.Item
        name={CREATE_TEAM_FORM_INPUTS.ISPRIVATE}
        label="Private Team"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        name={CREATE_TEAM_FORM_INPUTS.AVATAT}
        label="Avatar URL (Optional)"
      >
        <Input placeholder="https://example.com/avatar.jpg" />
      </Form.Item>
    </>
  );
};

export default CreateTeamsFormInputs;
