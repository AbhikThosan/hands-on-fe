import React from "react";
import { Tabs, Input, Select } from "antd";
import Title from "antd/es/typography/Title";
import PublicTeamsTab from "./PublicTeamsTab";
import MyTeamsTab from "./MyTeamsTab";
import CreatedTeamsTab from "./CreatedTeamsTab";
import InvitationsTab from "./InvitationsTab";
import LeaderboardTab from "./LeaderboardTab";

const { TabPane } = Tabs;
const { Option } = Select;
const { Text } = Title;

const TeamsTabs = ({
  page = 1,
  limit = 10,
  search = "",
  sortBy = "",
  publicTeams = [],
  userTeams = [],
  createdTeams = [],
  invitations = [],
  leaderboard = [],
  publicPagination,
  isAuthenticated,
  onPageChange,
  onLimitChange,
  onSortByChange,
  onSearchChange,
  onJoinSuccess,
  onInvite,
  onInvitationRespond,
}) => {
  const limitString = typeof limit === "number" ? limit.toString() : "10";

  return (
    <Tabs defaultActiveKey="public">
      <TabPane tab="Public Teams" key="public">
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="Search teams"
            value={search}
            onChange={onSearchChange}
            className="w-1/3"
          />
          <Select
            placeholder="Sort by"
            value={sortBy || undefined}
            onChange={onSortByChange}
            className="w-1/4"
            allowClear
          >
            <Option value="created_at">Created At</Option>
            <Option value="member_count">Member Count</Option>
            <Option value="achievement_points">Achievement Points</Option>
          </Select>
          <Select
            value={limitString}
            onChange={onLimitChange}
            className="w-1/4"
          >
            <Option value="5">5 per page</Option>
            <Option value="10">10 per page</Option>
            <Option value="15">15 per page</Option>
          </Select>
        </div>
        <PublicTeamsTab
          teams={publicTeams}
          isAuthenticated={isAuthenticated}
          onJoinSuccess={onJoinSuccess}
          userTeams={userTeams}
          createdTeams={createdTeams}
          pagination={publicPagination}
          page={page}
          onPageChange={onPageChange}
        />
      </TabPane>

      {isAuthenticated && (
        <TabPane tab="My Teams" key="my-teams">
          <MyTeamsTab teams={userTeams} isAuthenticated={isAuthenticated} />
        </TabPane>
      )}

      {isAuthenticated && (
        <TabPane tab="Created Teams" key="created">
          <CreatedTeamsTab
            teams={createdTeams}
            isAuthenticated={isAuthenticated}
            onInvite={onInvite}
          />
        </TabPane>
      )}

      {isAuthenticated && (
        <TabPane tab="Invitations" key="invitations">
          <InvitationsTab
            invitations={invitations}
            onRespond={onInvitationRespond}
          />
        </TabPane>
      )}

      {isAuthenticated && (
        <TabPane tab="Leaderboard" key="leaderboard">
          <LeaderboardTab leaderboard={leaderboard} />
        </TabPane>
      )}
    </Tabs>
  );
};

export default TeamsTabs;
