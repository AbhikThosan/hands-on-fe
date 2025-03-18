import React from "react";
import { Form, Button } from "antd";
import { useUpdateProfileMutation } from "../api/userProfileApi";
import EditUserProfileFormInput from "./EditUserProfileFormInput";
import toast from "react-hot-toast";

const EditUserProfileForm = ({ onClose, profile }) => {
  const [form] = Form.useForm();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onFinish = async (values) => {
    try {
      await updateProfile(values).unwrap();
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      const errorMessage = error.data?.message || "Unknown error";
      toast.error(`Failed to update profile: ${errorMessage}`);
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
