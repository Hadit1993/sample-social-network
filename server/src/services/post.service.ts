import { Types } from "mongoose";
import { ACCESS_DENIED, EMPTY_POST, INVALID_POST } from "../constants/errors";
import { CreatePostDto } from "../dtos/post.dto";
import PostModel from "../models/post.model";
import UserModel from "../models/user.model";
import { HttpError } from "../utils/common-types";

export const createPost = async (
  postInfo: CreatePostDto,
  creatorId: string
) => {
  if (!postInfo.desc && !postInfo.image) throw new HttpError(EMPTY_POST, 422);
  const post = await new PostModel({ ...postInfo, userId: creatorId }).save();
  return post.toObject();
};

export const getPost = async (id: string) => {
  const post = await PostModel.findById(id);
  if (!post) throw new HttpError(INVALID_POST, 404);
  return post.toObject();
};

export const deletePost = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new HttpError(INVALID_POST, 404);
  if (post.userId.toString() === userId) {
    await post.delete();
  } else {
    throw new HttpError(ACCESS_DENIED, 403);
  }
};

export const likePost = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new HttpError(INVALID_POST, 404);
  if (!post.likes.map((val) => val.prototype?.toString()).includes(userId)) {
    await post.updateOne({ $push: { likes: userId } });
  }
};

export const dislikePost = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new HttpError(INVALID_POST, 404);
  if (post.likes.map((val) => val.prototype?.toString()).includes(userId)) {
    await post.updateOne({ $pull: { likes: userId } });
  }
};

export const getTimelinePosts = async (userId: string) => {
  const userPosts = await PostModel.find({ userId });
  const followingPosts = await UserModel.aggregate([
    {
      $match: {
        _id: new Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: "posts",
        localField: "followings",
        foreignField: "userId",
        as: "followingPosts",
      },
    },
    {
      $project: {
        followingPosts: 1,
        _id: 0,
      },
    },
  ]);

  const totalPosts = [...userPosts, ...followingPosts[0].followingPosts];
  const sortedPosts = totalPosts.sort((a: any, b: any) => {
    return b.createdAt - a.createdAt;
  });

  return sortedPosts;
};
