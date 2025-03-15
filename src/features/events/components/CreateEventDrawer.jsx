import React from "react";
import { Drawer } from "antd";
import CreateEventForm from "./CreateEventForm";

const CreateEventDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Create New Event"
      width={400}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      onClose={onClose}
    >
      <CreateEventForm onClose={onClose} />
    </Drawer>
  );
};

export default CreateEventDrawer;
