import React from "react";
import { Drawer, Form, Input, Button } from "antd";
import { useSendTeamInvitationMutation } from "../api/teamInvitationApi";
import toast from "react-hot-toast";

const InviteTeamMemberDrawer = ({ visible, onClose, teamId }) => {
  const [form] = Form.useForm();
  const [sendInvitation, { isLoading }] = useSendTeamInvitationMutation();

  const onFinish = async (values) => {
    try {
      await sendInvitation({ teamId, user_email: values.user_email }).unwrap();
      toast.success("Invitation sent successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      const errorMessage =
        "Failed to send invitation: " +
        (error.data?.message || "Unknown error");
      toast.error(errorMessage);
    }
  };

  return (
    <Drawer
      title="Invite Member to Team"
      width={400}
      onClose={onClose}
      visible={visible}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="user_email"
          label="User Email"
          rules={[
            { required: true, message: "Please enter the user’s email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="example@email.com" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Send Invitation
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default InviteTeamMemberDrawer;
