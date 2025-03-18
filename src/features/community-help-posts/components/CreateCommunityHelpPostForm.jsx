import React from "react";

import { Form, Button } from "antd";
import { useCreateCommunityHelpPostMutation } from "../api/createCommunityHelpPostApi";
import CreateCommunityHelpPostFormInputs from "./CreateCommunityHelpPostFormInputs";
import toast from "react-hot-toast";

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
      toast.success("Community help post created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      const errorMessage = error.data?.message || "Unknown error";
      toast.error(`Failed to create community help post: ${errorMessage}`);
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
