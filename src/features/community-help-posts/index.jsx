import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin, Button } from "antd";
import Title from "antd/es/typography/Title";
import { selectIsAuthenticated } from "../auth/slice/authSlice";
import EventPostFilters from "../../components/filter/EventPostFilters";
import EventPostList from "../../components/list/EventPostList";
import PaginationControls from "../../components/pagination/PaginationControls";
import CreateCommunityHelpPostDrawer from "./components/CreateCommunityHelpPostDrawer";
import { useCommunityHelpPosts } from "./hook/useCommunityHelpPosts";

const CommunityHelpPosts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    urgency_level: "",
    status: "",
    all: false,
  });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const { helpRequests, pagination, isLoading, isFetching, isError, error } =
    useCommunityHelpPosts({
      page,
      limit,
      category: filters.category,
      location: filters.location,
      urgency_level: filters.urgency_level,
      status: filters.status,
      all: filters.all,
    });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleCreatePostClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      setDrawerVisible(true);
    }
  };

  if (isLoading) return <Spin tip="Loading community help posts..." />;
  if (isError)
    return <div>Error: {error?.message || "Failed to load posts"}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Title className="text-2xl font-bold">Community Help Posts</Title>
        <Button type="primary" onClick={handleCreatePostClick}>
          Create New Post
        </Button>
      </div>

      <EventPostFilters
        filters={filters}
        limit={limit}
        onFilterChange={handleFilterChange}
        onLimitChange={(value) => setLimit(value)}
        labels={{
          category: "Category",
          location: "Location",
          urgency_level: "Urgency Level",
          status: "Status",
        }}
      />

      {isFetching && <Spin tip="Fetching updates..." />}

      <EventPostList
        items={helpRequests}
        joinedItems={new Set()}
        userId={null}
        isJoining={false}
        onJoin={() => {}}
        label="Community Help Post"
      />

      <PaginationControls
        page={page}
        pagination={pagination}
        onPageChange={setPage}
      />

      <CreateCommunityHelpPostDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </div>
  );
};

export default CommunityHelpPosts;
