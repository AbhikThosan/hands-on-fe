import React from "react";
import { Form, Input, Select } from "antd";
import { CREATE_COMMUNITY_HELP_POST_FORM_INPUTS } from "../constant/createCommunityHelpPostForm.const";

const { Option } = Select;

const CreateCommunityHelpPostFormInputs = () => {
  return (
    <>
      <Form.Item
        name={CREATE_COMMUNITY_HELP_POST_FORM_INPUTS.TITLE}
        label="Title"
        rules={[{ required: true, message: "Please enter the post title" }]}
      >
        <Input placeholder="Post Title" />
      </Form.Item>

      <Form.Item
        name={CREATE_COMMUNITY_HELP_POST_FORM_INPUTS.DESCRIPTION}
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea rows={4} placeholder="Post Description" />
      </Form.Item>

      <Form.Item
        name={CREATE_COMMUNITY_HELP_POST_FORM_INPUTS.LOCATION}
        label="Location"
        rules={[{ required: true, message: "Please enter the location" }]}
      >
        <Input placeholder="Post Location" />
      </Form.Item>

      <Form.Item
        name={CREATE_COMMUNITY_HELP_POST_FORM_INPUTS.CATEGORY}
        label="Category"
        rules={[{ required: true, message: "Please enter a category" }]}
      >
        <Input placeholder="Post Category" />
      </Form.Item>

      <Form.Item
        name={CREATE_COMMUNITY_HELP_POST_FORM_INPUTS.URGENCY}
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
