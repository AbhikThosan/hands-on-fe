import React from "react";
import { List } from "antd";
import InvitationCard from "./InvitationCard";

const InvitationsTab = ({ invitations, onRespond }) => {
  return (
    <List
      dataSource={invitations}
      renderItem={(invitation) => (
        <List.Item>
          <InvitationCard invitation={invitation} onRespond={onRespond} />
        </List.Item>
      )}
    />
  );
};

export default InvitationsTab;
