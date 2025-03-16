import React from "react";

import { Form, Button, message } from "antd";
import { useCreateCommunityHelpPostMutation } from "../api/createCommunityHelpPostApi";
import CreateCommunityHelpPostFormInputs from "./CreateCommunityHelpPostFormInputs";

const CreateCommunityHelpPostForm = ({ onClose }) => {
  const [form] = Form.useForm();
  const [createCommunityHelpPost, { isLoading }] =
    useCreateCommunityHelpPostMutation();

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const onFinish = async (values) => {
    try {
      const postData = {
        ...values,
        category: capitalizeWords(values.category),
      };
      await createCommunityHelpPost(postData).unwrap();
      message.success("Community help post created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error(
        "Failed to create post: " + (error.data?.message || "Unknown error")
      );
    }
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <CreateCommunityHelpPostFormInputs />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateCommunityHelpPostForm;
