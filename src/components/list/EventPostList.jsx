import React from "react";
import EventPostCard from "../card/EventPostCard";

const EventPostList = ({
  items,
  joinedItems,
  userId,
  loadingEventId,
  onJoin,
  label,
}) => {
  if (items.length === 0) return <p>No {label.toLowerCase()} found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        const hasJoined =
          joinedItems.has(item.id) ||
          (userId && item.attendees?.includes(Number(userId)));

        return (
          <EventPostCard
            key={item.id}
            item={item}
            hasJoined={hasJoined}
            loadingEventId={loadingEventId}
            onJoin={onJoin}
            label={label}
          />
        );
      })}
    </div>
  );
};

export default EventPostList;
