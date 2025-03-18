import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spin, Card, Typography, List, Button } from "antd";
import Title from "antd/es/typography/Title";

import { useTeamDashboard } from "../hook/useTeamDashboard";
import { selectIsAuthenticated } from "../../auth/slice/authSlice";

const { Text } = Typography;

const TeamDashboard = () => {
  const { teamId } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const { dashboard, isLoading, isError, error } = useTeamDashboard(teamId);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spin tip="Loading team dashboard..." />
      </div>
    );
  if (isError)
    return <div>Error: {error?.message || "Failed to load dashboard"}</div>;

  if (!dashboard) return <div>No dashboard data available</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Title level={2}>{dashboard.name} Dashboard</Title>
        <Button onClick={() => navigate("/teams")}>Back to Teams</Button>
      </div>

      <Card className="shadow-md rounded-lg">
        <Title level={4}>{dashboard.name}</Title>
        <Text>{dashboard.description}</Text>
        <div className="mt-2">
          <Text strong>Private: </Text>
          <Text>{dashboard.is_private ? "Yes" : "No"}</Text>
        </div>
        <div>
          <Text strong>Members: </Text>
          <Text>{dashboard.member_count}</Text>
        </div>
        <div>
          <Text strong>Achievement Points: </Text>
          <Text>{dashboard.achievement_points}</Text>
        </div>
        <div>
          <Text strong>Your Role: </Text>
          <Text>{dashboard.user_role || "Not a member"}</Text>
        </div>
      </Card>

      <div className="mt-6">
        <Title level={3}>Members</Title>
        <List
          dataSource={dashboard.members}
          renderItem={(member) => (
            <List.Item>
              <Text>
                {member.name} ({member.role}) - Joined:{" "}
                {new Date(member.joined_at).toLocaleDateString()}
              </Text>
            </List.Item>
          )}
        />
      </div>

      <div className="mt-6">
        <Title level={3}>Recent Events</Title>
        <List
          dataSource={dashboard.recent_events}
          renderItem={(event) => <List.Item>{event.title}</List.Item>}
          locale={{ emptyText: "No recent events" }}
        />
      </div>

      <div className="mt-6">
        <Title level={3}>Recent Achievements</Title>
        <List
          dataSource={dashboard.recent_achievements}
          renderItem={(achievement) => (
            <List.Item>{achievement.title}</List.Item>
          )}
          locale={{ emptyText: "No recent achievements" }}
        />
      </div>
    </div>
  );
};

export default TeamDashboard;
