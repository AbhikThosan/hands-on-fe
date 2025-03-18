import React from "react";
import { Form, Button, message } from "antd";
import { useCreateTeamMutation } from "../api/createTeamApi";
import CreateTeamsFormInputs from "./CreateTeamsFormInputs";

const CreateTeamsForm = ({ onClose }) => {
  const [form] = Form.useForm();
  const [createTeam, { isLoading }] = useCreateTeamMutation();

  const onFinish = async (values) => {
    try {
      await createTeam(values).unwrap();
      message.success("Team created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error(
        "Failed to create team: " + (error.data?.message || "Unknown error")
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
        <CreateTeamsFormInputs />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateTeamsForm;
