import React from "react";
import { Card, Button, Typography, Tooltip } from "antd";

const { Title, Text, Paragraph } = Typography;

const truncateText = (text, length = 100) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

const EventPostCard = ({ item, hasJoined, loadingEventId, onJoin, label }) => {
  const isEvent = label === "Event";

  const details = isEvent
    ? {
        Date: new Date(item.date).toLocaleDateString(),
        Time: new Date(item.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        Location: item.location,
        Category: item.category,
        Attendees: item.attendees?.length || 0,
      }
    : {
        Location: item.location,
        Category: item.category,
        Urgency: item.urgency_level,
        Status: item.status,
        Helper: item.helper_count || 0,
      };

  return (
    <Card className="shadow-md rounded-lg w-full min-h-[250px] flex flex-col justify-between">
      <div>
        <Title level={4}>{item.title}</Title>

        <Tooltip title={item.description}>
          <Paragraph ellipsis={{ rows: 3 }}>
            {truncateText(item.description, 120)}
          </Paragraph>
        </Tooltip>

        {Object.entries(details).map(([key, value]) => (
          <div key={key}>
            <Text strong>{key}: </Text>
            <Text>{value}</Text>
          </div>
        ))}
      </div>

      {isEvent && (
        <Button
          type="primary"
          onClick={() => onJoin(item.id)}
          disabled={hasJoined || loadingEventId === item.id}
          loading={loadingEventId === item.id}
          className="!mt-3"
        >
          {hasJoined ? "Joined" : "Join"}
        </Button>
      )}
    </Card>
  );
};

export default EventPostCard;
