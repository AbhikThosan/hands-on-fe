import { Form, Input, Switch } from "antd";
import React from "react";

const CreateTeamsFormInputs = () => {
  return (
    <>
      <Form.Item
        name="name"
        label="Team Name"
        rules={[{ required: true, message: "Please enter a team name" }]}
      >
        <Input placeholder="Team Name" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea rows={4} placeholder="Team Description" />
      </Form.Item>
      <Form.Item name="is_private" label="Private Team" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="avatar_url" label="Avatar URL (Optional)">
        <Input placeholder="https://example.com/avatar.jpg" />
      </Form.Item>
    </>
  );
};

export default CreateTeamsFormInputs;
