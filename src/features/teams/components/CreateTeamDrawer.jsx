import React from "react";
import CreateTeamsForm from "./CreateTeamsForm";
import { Drawer } from "antd";

const CreateTeamDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Create New Team"
      width={400}
      onClose={onClose}
      visible={visible}
    >
      <CreateTeamsForm onClose={onClose} />
    </Drawer>
  );
};

export default CreateTeamDrawer;
