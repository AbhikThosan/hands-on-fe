import React from "react";
import { Card, Button, Typography } from "antd";
import { useRespondToInvitationMutation } from "../api/teamInvitationApi";

const { Text } = Typography;

const InvitationCard = ({ invitation, onRespond }) => {
  const [respondToInvitation, { isLoading }] = useRespondToInvitationMutation();

  const handleRespond = async (accept) => {
    try {
      await respondToInvitation({
        invitationId: invitation.id,
        accept,
      }).unwrap();
      onRespond(invitation.id);
    } catch (error) {
      console.error("Failed to respond to invitation:", error);
    }
  };

  return (
    <Card className="shadow-md rounded-lg">
      <Text strong>Team: </Text>
      <Text>{invitation.team_name}</Text>
      <br />
      <Text strong>Description: </Text>
      <Text>{invitation.team_description}</Text>
      <br />
      <Text strong>Invited By: </Text>
      <Text>{invitation.invited_by_name}</Text>
      <br />
      <Text strong>Members: </Text>
      <Text>{invitation.member_count}</Text>
      <div className="mt-3">
        <Button
          type="primary"
          onClick={() => handleRespond(true)}
          loading={isLoading}
          className="mr-2"
        >
          Accept
        </Button>
        <Button onClick={() => handleRespond(false)} loading={isLoading}>
          Decline
        </Button>
      </div>
    </Card>
  );
};

export default InvitationCard;
