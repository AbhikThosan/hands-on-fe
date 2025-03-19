import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Spin, Button, Input, Select, List, Typography } from "antd";
import toast from "react-hot-toast";
import { selectIsAuthenticated } from "../../auth/slice/authSlice";
import { useCommunityHelp } from "../hook/useCommunityHelp";

const { Title, Text } = Typography;
const { Option } = Select;

const CommunityHelpPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [commentText, setCommentText] = useState("");
  const [isHelper, setIsHelper] = useState(false);

  const {
    post,
    comments,
    isLoading,
    isError,
    error,
    isPostingComment,
    isUpdatingStatus,
    isCreator,
    postComment,
    updateStatus,
  } = useCommunityHelp(id);

  const handleCommentSubmit = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (commentText.trim()) {
      try {
        await postComment({ comment_text: commentText, is_helper: isHelper });
        setCommentText("");
        setIsHelper(false);
        toast.success("Comment posted successfully!");
      } catch (error) {
        toast.error(`Failed to post comment: ${error.message}`);
      }
    }
  };

  const handleStatusChange = async (value) => {
    try {
      await updateStatus(value);
      toast.success("Status updated successfully!");
    } catch (error) {
      toast.error(`Failed to update status: ${error.message}`);
    }
  };

  if (isLoading) return <Spin tip="Loading post..." />;
  if (isError) return <div>Error: {error?.message || "Failed to load"}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Title level={2}>{post.title}</Title>
      <Text>{post.description}</Text>
      <div className="mt-4">
        <Text strong>Location: </Text>
        <Text>{post.location}</Text>
      </div>
      <div>
        <Text strong>Category: </Text>
        <Text>{post.category}</Text>
      </div>
      <div>
        <Text strong>Urgency: </Text>
        <Text>{post.urgency_level}</Text>
      </div>
      <div>
        <Text strong>Status: </Text>
        <Text>{post.status}</Text>
      </div>
      <div>
        <Text strong>Helpers: </Text>
        <Text>{post.helper_count || 0}</Text>
      </div>
      {isCreator && (
        <div className="mt-4">
          <Select
            value={post.status}
            onChange={handleStatusChange}
            className="w-32"
            disabled={isUpdatingStatus}
          >
            <Option value="open">Open</Option>
            <Option value="in_progress">In Progress</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </div>
      )}

      <div className="mt-6">
        <Title level={4}>Comments</Title>
        <List
          dataSource={comments}
          renderItem={(comment) => (
            <List.Item>
              <div>
                <Text strong>{comment.commenter_name}: </Text>
                <Text>{comment.comment_text}</Text>
                {comment.is_helper && (
                  <Text className="ml-2 text-green-500">[Helper]</Text>
                )}
              </div>
            </List.Item>
          )}
        />
        {isAuthenticated && (
          <div className="mt-4">
            <Input.TextArea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              rows={3}
            />
            <div className="mt-2 flex items-center gap-2">
              <Button
                type="primary"
                onClick={handleCommentSubmit}
                loading={isPostingComment}
              >
                Post Comment
              </Button>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isHelper}
                  onChange={(e) => setIsHelper(e.target.checked)}
                />
                <span className="ml-1">I can help</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityHelpPostDetail;
