import React from "react";
import { Drawer, Select } from "antd";
import EditUserProfileForm from "./EditUserProfileForm";

const EditUserProfileDrawer = ({ visible, onClose, profile }) => {
  return (
    <Drawer
      title="Edit Profile"
      width={400}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <EditUserProfileForm onClose={onClose} profile={profile} />
    </Drawer>
  );
};

export default EditUserProfileDrawer;
