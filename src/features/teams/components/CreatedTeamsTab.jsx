import React from "react";
import { Button, Typography } from "antd";
import TeamCard from "./TeamCard";

const { Text } = Typography;

const CreatedTeamsTab = ({ teams, isAuthenticated, onInvite }) => {
  if (teams.length === 0) {
    return <Text>No teams created yet.</Text>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((team) => (
        <div key={team.id}>
          <TeamCard
            team={team}
            isAuthenticated={isAuthenticated}
            isMemberOrCreator={true}
          />
          {team.is_private && (
            <Button onClick={() => onInvite(team.id)} className="mt-2 w-full">
              Invite Member
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreatedTeamsTab;
