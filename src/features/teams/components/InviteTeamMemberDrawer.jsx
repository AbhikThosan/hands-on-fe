import React from "react";
import { Drawer, Form, Input, Button, message } from "antd";
import { useSendTeamInvitationMutation } from "../api/teamInvitationApi";

const InviteTeamMemberDrawer = ({ visible, onClose, teamId }) => {
  const [form] = Form.useForm();
  const [sendInvitation, { isLoading }] = useSendTeamInvitationMutation();

  const onFinish = async (values) => {
    try {
      await sendInvitation({ teamId, user_email: values.user_email }).unwrap();
      message.success("Invitation sent successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error(
        "Failed to send invitation: " + (error.data?.message || "Unknown error")
      );
    }
  };

  return (
    <Drawer
      title="Invite Member to Team"
      width={400}
      onClose={onClose}
      visible={visible}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
