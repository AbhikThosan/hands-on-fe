import React from "react";
import TeamCard from "./TeamCard";
import PaginationControls from "../../../components/pagination/PaginationControls";

const PublicTeamsTab = ({
  teams,
  isAuthenticated,
  onJoinSuccess,
  userTeams,
  createdTeams,
  pagination,
  page,
  onPageChange,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            isAuthenticated={isAuthenticated}
            onJoinSuccess={onJoinSuccess}
            isMemberOrCreator={
              userTeams.some((t) => t.id === team.id) ||
              createdTeams.some((t) => t.id === team.id)
            }
          />
        ))}
      </div>
      <PaginationControls
        page={page}
        pagination={pagination}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default PublicTeamsTab;
