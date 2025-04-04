import React from "react";
import { Form, Button } from "antd";
import { useCreateTeamMutation } from "../api/createTeamApi";
import CreateTeamsFormInputs from "./CreateTeamsFormInputs";
import toast from "react-hot-toast";

const CreateTeamsForm = ({ onClose }) => {
  const [form] = Form.useForm();
  const [createTeam, { isLoading }] = useCreateTeamMutation();

  const onFinish = async (values) => {
    try {
      await createTeam(values).unwrap();
      toast.success("Team created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      const errorMessage = error.data?.message || "Unknown error";
      toast.error(`Failed to create team: ${errorMessage}`);
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
