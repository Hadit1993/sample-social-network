import {
  createPost,
  deletePost,
  getPost,
  likePost,
  dislikePost,
  getTimelinePosts,
} from "./../services/post.service";
import { CreatePostDto } from "./../dtos/post.dto";
import { Middleware } from "../utils/common-types";
import BaseResponse from "../models/base-response.model";
import { POST_CREATED, POST_DELETED, POST_LIKED } from "../constants/messages";

export const CreatePostController: Middleware<CreatePostDto> = async (
  req,
  res,
  next
) => {
  try {
    const postInfo = req.body;
    const postCreator = req.userId;
    const post = await createPost(postInfo, postCreator!);
    return res
      .status(200)
      .json(new BaseResponse(post, { message: POST_CREATED }));
  } catch (error) {
    return next(error);
  }
};

export const getPostController: Middleware<CreatePostDto> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const post = await getPost(id);
    return res.status(200).json(new BaseResponse(post));
  } catch (error) {
    return next(error);
  }
};

export const deletePostController: Middleware<CreatePostDto> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    await deletePost(id, req.userId!);
    return res
      .status(200)
      .json(new BaseResponse(undefined, { message: POST_DELETED }));
  } catch (error) {
    return next(error);
  }
};

export const likePostController: Middleware<CreatePostDto> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const { userId } = req;
  try {
    await likePost(id, userId!);
    return res
      .status(200)
      .json(new BaseResponse(undefined, { message: POST_LIKED }));
  } catch (error) {
    return next(error);
  }
};

export const dislikePostController: Middleware<CreatePostDto> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const { userId } = req;
  try {
    await dislikePost(id, userId!);
    return res
      .status(200)
      .json(new BaseResponse(undefined, { message: POST_LIKED }));
  } catch (error) {
    return next(error);
  }
};

export const getTimlinePostsController: Middleware = async (req, res, next) => {
  const { userId } = req;
  console.log("userId", userId);

  try {
    const posts = await getTimelinePosts(userId!);
    return res.status(200).json(new BaseResponse(posts));
  } catch (error) {
    return next(error);
  }
};
