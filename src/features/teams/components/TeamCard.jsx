import React from "react";
import { Card, Button, Typography, Avatar } from "antd";
import { useJoinTeamMutation } from "../api/joinTeamApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const { Title, Text } = Typography;

const TeamCard = ({
  team,
  isAuthenticated,
  onJoinSuccess,
  isMemberOrCreator = false,
}) => {
  const [joinTeam, { isLoading: isJoining }] = useJoinTeamMutation();
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    try {
      await joinTeam(team.id).unwrap();
      onJoinSuccess(team.id);
      toast.success("Successfully joined the team!");
    } catch (error) {
      const errorMessage = error.data?.message || "Failed to join event.";
      toast.error(errorMessage);
    }
  };

  const handleDashboard = () => {
    navigate(`/teams/${team.id}/dashboard`);
  };

  return (
    <Card className="shadow-md rounded-lg">
      <div className="flex justify-center mt-4">
        <Avatar src={team.avatar_url} size={100} shape="circle" />
      </div>
      <div className="text-center">
        <Title level={4} className="mt-4">
          {team.name}
        </Title>
        <Text>{team.description}</Text>
        <div className="mt-2">
          <Text strong>Members: </Text>
          <Text>{team.member_count}</Text>
        </div>
        <div>
          <Text strong>Achievement Points: </Text>
          <Text>{team.achievement_points}</Text>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <Button
            type="primary"
            onClick={handleJoin}
            disabled={isJoining || isMemberOrCreator}
            loading={isJoining}
          >
            {isMemberOrCreator ? "Joined" : "Join Team"}
          </Button>
          <Button onClick={handleDashboard}>Dashboard</Button>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
