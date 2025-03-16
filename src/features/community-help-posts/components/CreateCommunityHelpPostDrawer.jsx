import { Drawer } from "antd";
import React from "react";
import CreateCommunityHelpPostForm from "./CreateCommunityHelpPostForm";

const CreateCommunityHelpPostDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Create Community Help Post"
      width={400}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <CreateCommunityHelpPostForm onClose={onClose} />
    </Drawer>
  );
};

export default CreateCommunityHelpPostDrawer;
