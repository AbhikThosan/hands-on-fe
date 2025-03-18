import React from "react";
import { Button } from "antd";
import Title from "antd/es/typography/Title";

const TeamsHeader = ({ onCreateTeam, isAuthenticated }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Title level={2}>Teams</Title>
      {isAuthenticated && (
        <Button type="primary" onClick={onCreateTeam}>
          Create Team
        </Button>
      )}
    </div>
  );
};

export default TeamsHeader;
