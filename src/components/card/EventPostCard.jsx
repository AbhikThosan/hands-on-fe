import React from "react";
import { Card, Button, Typography, Tooltip } from "antd";

const { Title, Text, Paragraph } = Typography;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const truncateText = (text, length = 100) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

const EventPostCard = ({ item, hasJoined, isJoining, onJoin }) => {
  return (
    <Card className="shadow-md rounded-lg w-full min-h-[250px] flex flex-col justify-between">
      <div>
        <Title level={4}>{item.title}</Title>

        <Tooltip title={item.description}>
          <Paragraph ellipsis={{ rows: 3 }}>
            {truncateText(item.description, 120)}
          </Paragraph>
        </Tooltip>

        {Object.entries({
          location: item.location,
          date: new Date(item.date).toLocaleDateString(),
          time: new Date(item.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          category: item.category,
          attendees: item.attendees?.length || 0,
        }).map(([key, value]) => (
          <div key={key}>
            <Text strong>{capitalize(key)}: </Text>
            <Text>{value}</Text>
          </div>
        ))}
      </div>

      <Button
        type="primary"
        onClick={() => onJoin(item.id)}
        disabled={hasJoined || isJoining}
        loading={isJoining}
        className="!mt-3"
      >
        {hasJoined ? "Joined" : "Join"}
      </Button>
    </Card>
  );
};

export default EventPostCard;
