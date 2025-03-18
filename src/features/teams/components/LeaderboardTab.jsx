import React from "react";
import { List, Card, Typography, Avatar, Empty, Timeline } from "antd";
import {
  TrophyOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const LeaderboardTab = ({ leaderboard }) => {
  return (
    <List
      dataSource={leaderboard}
      renderItem={(team) => (
        <List.Item>
          <Card className="w-full">
            <div className="flex items-center gap-4">
              <Avatar
                size={64}
                src={team.avatar_url}
                alt={team.name}
                shape="square"
                className="mr-8"
                style={{ borderRadius: "8px" }}
              />
              <div className="flex-grow">
                <Title level={4} className="mb-2">
                  {team.name}
                </Title>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <TrophyOutlined className="mr-2" />
                      <Text strong>Achievement Points: </Text>
                      <Text className="ml-1">{team.achievement_points}</Text>
                    </div>

                    <div className="flex items-center mb-2">
                      <TeamOutlined className="mr-2" />
                      <Text strong>Members: </Text>
                      <Text className="ml-1">{team.member_count}</Text>
                    </div>
                  </div>

                  <div>
                    <Text strong>Recent Achievements:</Text>
                    {team.recent_achievements &&
                    team.recent_achievements.length > 0 ? (
                      <Timeline className="mt-2">
                        {team.recent_achievements.map((achievement, i) => {
                          if (
                            achievement.title === null &&
                            achievement.points === null &&
                            achievement.achieved_at === null
                          ) {
                            return (
                              <Timeline.Item key={i}>
                                <Text type="secondary">
                                  No recent achievements
                                </Text>
                              </Timeline.Item>
                            );
                          }

                          return (
                            <Timeline.Item key={i}>
                              <div>
                                <Text strong>
                                  {achievement.title || "Unnamed Achievement"}
                                </Text>
                                {achievement.points !== null && (
                                  <Text className="ml-2">
                                    ({achievement.points} points)
                                  </Text>
                                )}
                              </div>
                              {achievement.achieved_at && (
                                <div className="flex items-center">
                                  <CalendarOutlined className="mr-1" />
                                  <Text type="secondary">
                                    {achievement.achieved_at}
                                  </Text>
                                </div>
                              )}
                            </Timeline.Item>
                          );
                        })}
                      </Timeline>
                    ) : (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="No achievements to show"
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
      locale={{
        emptyText: <Empty description="No teams on the leaderboard yet" />,
      }}
    />
  );
};

export default LeaderboardTab;
