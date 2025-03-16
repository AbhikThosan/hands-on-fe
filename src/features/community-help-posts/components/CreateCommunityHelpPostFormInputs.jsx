import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const CreateCommunityHelpPostFormInputs = () => {
  return (
    <>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter the post title" }]}
      >
        <Input placeholder="Post Title" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea rows={4} placeholder="Post Description" />
      </Form.Item>

      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Please enter the location" }]}
      >
        <Input placeholder="Post Location" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please enter a category" }]}
      >
        <Input placeholder="Post Category" />
      </Form.Item>

      <Form.Item
        name="urgency_level"
        label="Urgency Level"
        rules={[{ required: true, message: "Please select an urgency level" }]}
      >
        <Select placeholder="Select Urgency Level">
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="urgent">Urgent</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default CreateCommunityHelpPostFormInputs;
