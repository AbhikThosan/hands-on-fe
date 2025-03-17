import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin, Button, Card, Typography, List } from "antd";
import { selectIsAuthenticated } from "../auth/slice/authSlice";
import { useUserProfile } from "./hook/useUserProfile";
import EditUserProfileDrawer from "./components/EditUserProfileDrawer";

const { Title, Text } = Typography;

const UserProfile = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const { profile, isLoading, isError, error } = useUserProfile();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  if (isLoading) return <Spin tip="Loading profile..." />;
  if (isError)
    return <div>Error: {error?.message || "Failed to load profile"}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Title level={2}>My Profile</Title>
        <Button type="primary" onClick={() => setDrawerVisible(true)}>
          Edit Profile
        </Button>
      </div>

      <Card className="shadow-md rounded-lg">
        <div className="space-y-4">
          <div>
            <Text strong>Name: </Text>
            <Text>{profile.name}</Text>
          </div>
          <div>
            <Text strong>Email: </Text>
            <Text>{profile.email}</Text>
          </div>
          <div>
            <Text strong>Skills: </Text>
            <List
              dataSource={profile.skills}
              renderItem={(skill) => <List.Item>{skill}</List.Item>}
              locale={{ emptyText: "No skills added" }}
            />
          </div>
          <div>
            <Text strong>Causes Supported: </Text>
            <List
              dataSource={profile.causes_supported}
              renderItem={(cause) => <List.Item>{cause}</List.Item>}
              locale={{ emptyText: "No causes added" }}
            />
          </div>
          <div>
            <Text strong>Volunteer Hours: </Text>
            <Text>{profile.volunteer_hours}</Text>
          </div>
          <div>
            <Text strong>Joined: </Text>
            <Text>{new Date(profile.created_at).toLocaleDateString()}</Text>
          </div>
        </div>
      </Card>

      <EditUserProfileDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        profile={profile}
      />
    </div>
  );
};

export default UserProfile;
