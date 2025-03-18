import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import { useRespondToInvitationMutation } from "../api/teamInvitationApi";
import toast from "react-hot-toast";

const { Text } = Typography;

const InvitationCard = ({ invitation, onRespond }) => {
  const [respondToInvitation] = useRespondToInvitationMutation();
  const [loadingState, setLoadingState] = useState({
    accept: false,
    decline: false,
  });

  const handleRespond = async (accept) => {
    setLoadingState({ ...loadingState, [accept ? "accept" : "decline"]: true });

    try {
      await respondToInvitation({
        invitationId: invitation.id,
        accept,
      }).unwrap();

      toast.success(
        `Invitation ${accept ? "accepted" : "declined"} successfully`
      );
      onRespond(invitation.id);
    } catch (error) {
      const errorMessage = error.data?.message || "Unknown error";
      toast.error(`Failed to respond to invitation: ${errorMessage}`);
    } finally {
      setLoadingState({ accept: false, decline: false });
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
          loading={loadingState.accept}
          className="!mr-2"
        >
          Accept
        </Button>
        <Button
          onClick={() => handleRespond(false)}
          loading={loadingState.decline}
        >
          Decline
        </Button>
      </div>
    </Card>
  );
};

export default InvitationCard;
