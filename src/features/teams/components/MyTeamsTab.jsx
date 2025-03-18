import React from "react";
import { Typography } from "antd";
import TeamCard from "./TeamCard";

const { Text } = Typography;

const MyTeamsTab = ({ teams, isAuthenticated }) => {
  if (teams.length === 0) {
    return <Text>No teams joined yet.</Text>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isAuthenticated={isAuthenticated}
          isMemberOrCreator={true}
        />
      ))}
    </div>
  );
};

export default MyTeamsTab;
