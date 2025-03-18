import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import Title from "antd/es/typography/Title";
import { selectIsAuthenticated } from "../auth/slice/authSlice";
import { usePublicTeams } from "./hook/usePublicTeams";
import { useUserCreatedTeams } from "./hook/useUserCreatedTeams";
import { useTeamInvitations } from "./hook/useTeamInvitations";
import { useUserTeams } from "./hook/useUserTeams";
import { useTeamsLeaderboard } from "./hook/useTeamsLeaderboard";
import TeamsHeader from "./components/TeamsHeader";
import TeamsTabs from "./components/TeamsTabs";
import CreateTeamDrawer from "./components/CreateTeamDrawer";
import InviteTeamMemberDrawer from "./components/InviteTeamMemberDrawer";

const TeamList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const [createDrawerVisible, setCreateDrawerVisible] = useState(false);
  const [inviteDrawerVisible, setInviteDrawerVisible] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [joinedTeams, setJoinedTeams] = useState(new Set());

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const {
    publicTeams,
    publicPagination,
    isLoading: isPublicLoading,
    isError: isPublicError,
    error: publicError,
  } = usePublicTeams({ page, limit, sort_by: sortBy, search });
  const {
    createdTeams,
    isLoading: isCreatedLoading,
    isError: isCreatedError,
    error: createdError,
  } = useUserCreatedTeams();
  const {
    invitations,
    isLoading: isInvitationsLoading,
    isError: isInvitationsError,
    error: invitationsError,
  } = useTeamInvitations();
  const {
    userTeams,
    isLoading: isUserTeamsLoading,
    isError: isUserTeamsError,
    error: userTeamsError,
  } = useUserTeams();
  const {
    leaderboard,
    isLoading: isLeaderboardLoading,
    isError: isLeaderboardError,
    error: leaderboardError,
  } = useTeamsLeaderboard();

  const isLoading =
    isPublicLoading ||
    isCreatedLoading ||
    isInvitationsLoading ||
    isUserTeamsLoading ||
    isLeaderboardLoading;
  const isError =
    isPublicError ||
    isCreatedError ||
    isInvitationsError ||
    isUserTeamsError ||
    isLeaderboardError;
  const error =
    publicError ||
    createdError ||
    invitationsError ||
    userTeamsError ||
    leaderboardError;

  const handleJoinSuccess = (teamId) => {
    setJoinedTeams((prev) => new Set(prev).add(teamId));
  };

  const handleInvitationRespond = () => {};

  const handleInvite = (teamId) => {
    setSelectedTeamId(teamId);
    setInviteDrawerVisible(true);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spin tip="Loading teams..." />
      </div>
    );
  if (isError)
    return <div>Error: {error?.message || "Failed to load teams"}</div>;

  return (
    <div className="p-6">
      <TeamsHeader
        onCreateTeam={() => setCreateDrawerVisible(true)}
        isAuthenticated={isAuthenticated}
      />

      <TeamsTabs
        page={page}
        limit={limit || 10}
        search={search}
        sortBy={sortBy}
        publicTeams={publicTeams || []}
        userTeams={userTeams || []}
        createdTeams={createdTeams || []}
        invitations={invitations || []}
        leaderboard={leaderboard || []}
        publicPagination={publicPagination}
        isAuthenticated={isAuthenticated}
        onPageChange={setPage}
        onLimitChange={(value) => setLimit(Number(value))}
        onSortByChange={setSortBy}
        onSearchChange={(e) => setSearch(e.target.value)}
        onJoinSuccess={handleJoinSuccess}
        onInvite={handleInvite}
        onInvitationRespond={handleInvitationRespond}
      />

      <CreateTeamDrawer
        visible={createDrawerVisible}
        onClose={() => setCreateDrawerVisible(false)}
      />

      <InviteTeamMemberDrawer
        visible={inviteDrawerVisible}
        onClose={() => setInviteDrawerVisible(false)}
        teamId={selectedTeamId}
      />
    </div>
  );
};

export default TeamList;
