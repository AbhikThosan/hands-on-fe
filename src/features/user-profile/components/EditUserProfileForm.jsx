import React from "react";
import { Form, Button, message } from "antd";
import { useUpdateProfileMutation } from "../api/userProfileApi";
import EditUserProfileFormInput from "./EditUserProfileFormInput";

const EditUserProfileForm = ({ onClose, profile }) => {
  const [form] = Form.useForm();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onFinish = async (values) => {
    try {
      await updateProfile(values).unwrap();
      message.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      message.error(
        "Failed to update profile: " + (error.data?.message || "Unknown error")
      );
    }
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: profile.name,
          skills: profile.skills,
          causes_supported: profile.causes_supported,
        }}
        requiredMark={false}
      >
        <EditUserProfileFormInput />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditUserProfileForm;
