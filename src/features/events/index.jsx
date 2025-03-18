import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin, Button } from "antd";
import Title from "antd/es/typography/Title";
import { useEvents } from "./hook/useEvents";
import { useJoinEventMutation } from "./api/joinEventApi";
import {
  selectIsAuthenticated,
  selectCurrentUserId,
} from "../auth/slice/authSlice";
import EventPostFilters from "../../components/filter/EventPostFilters";
import EventPostList from "../../components/list/EventPostList";
import PaginationControls from "../../components/pagination/PaginationControls";
import CreateEventDrawer from "./components/CreateEventDrawer";

const Events = ({ isHome = false }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    date: "",
    all: false,
  });
  const [joinedEvents, setJoinedEvents] = useState(new Set());
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userId = useSelector(selectCurrentUserId);
  const navigate = useNavigate();

  const { events, pagination, isLoading, isFetching, isError, error } =
    useEvents({
      page,
      limit,
      category: filters.category,
      location: filters.location,
      date: filters.date,
      all: filters.all,
    });

  const [joinEvent, { isLoading: isJoining }] = useJoinEventMutation();

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleJoinEvent = async (eventId) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      await joinEvent(eventId).unwrap();
      setJoinedEvents((prev) => new Set(prev).add(eventId));
    } catch (err) {
      console.error("Failed to join event:", err);
    }
  };

  const handleCreateEventClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      setDrawerVisible(true);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spin tip="Loading events..." />
      </div>
    );
  if (isError)
    return <div>Error: {error?.message || "Failed to load events"}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Title className="text-2xl font-bold">Events</Title>
        {isHome && (
          <Button type="primary" onClick={() => navigate("/events")}>
            See more
          </Button>
        )}
        {!isHome && (
          <Button type="primary" onClick={handleCreateEventClick}>
            Create New Event
          </Button>
        )}
      </div>

      {!isHome && (
        <EventPostFilters
          filters={filters}
          limit={limit}
          onFilterChange={handleFilterChange}
          onLimitChange={(value) => setLimit(value)}
          labels={{
            category: "Event Category",
            location: "Location",
            date: "Date",
          }}
        />
      )}

      {isFetching && <Spin tip="Fetching updates..." />}

      <EventPostList
        items={events}
        joinedItems={joinedEvents}
        userId={userId}
        isJoining={isJoining}
        onJoin={handleJoinEvent}
        label="Event"
      />
      {!isHome && (
        <>
          <PaginationControls
            page={page}
            pagination={pagination}
            onPageChange={setPage}
          />

          <CreateEventDrawer
            visible={drawerVisible}
            onClose={() => setDrawerVisible(false)}
          />
        </>
      )}
    </div>
  );
};

export default Events;
