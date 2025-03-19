import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../auth/slice/authSlice";
import {
  useGetCommunityHelpCommentsQuery,
  useGetCommunityHelpPostQuery,
  usePostCommunityHelpCommentMutation,
  useUpdateCommunityHelpStatusMutation,
} from "../api/communityHelpApi";

export const useCommunityHelp = (postId) => {
  const userId = useSelector(selectCurrentUserId);

  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
    error: postError,
  } = useGetCommunityHelpPostQuery(postId);

  const {
    data: commentsData,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    error: commentsError,
  } = useGetCommunityHelpCommentsQuery(postId);

  const [postComment, { isLoading: isPostingComment }] =
    usePostCommunityHelpCommentMutation();

  const [updateStatus, { isLoading: isUpdatingStatus }] =
    useUpdateCommunityHelpStatusMutation();

  const comments = commentsData?.comments || [];
  const isCreator = post?.created_by === Number(userId);

  const handlePostComment = async (commentData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await postComment({ id: postId, commentData }).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const handleUpdateStatus = async (status) => {
    if (!isCreator) return;
    // eslint-disable-next-line no-useless-catch
    try {
      await updateStatus({ id: postId, status }).unwrap();
    } catch (error) {
      throw error;
    }
  };

  return {
    post,
    comments,
    isLoading: isPostLoading || isCommentsLoading,
    isError: isPostError || isCommentsError,
    error: postError || commentsError,
    isPostingComment,
    isUpdatingStatus,
    isCreator,
    postComment: handlePostComment,
    updateStatus: handleUpdateStatus,
  };
};
