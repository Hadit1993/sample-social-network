import { UpdateUserDto } from "./../dtos/user.dto";
import BaseResponse from "../models/base-response.model";
import {
  deleteUser,
  followUser,
  getUser,
  unfollowUser,
  updateUser,
} from "./../services/user.service";
import { HttpError, Middleware } from "./../utils/common-types";
import cleanObject from "../utils/object-cleaner";
import {
  USER_DELETE,
  USER_FOLLOWED,
  USER_UNFOLLOWED,
} from "../constants/messages";
import { ACCESS_DENIED, NOt_ACCEPTABLE } from "../constants/errors";

export const getUserController: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    const user = await getUser(userId!);
    if (userId === id) {
      cleanObject(user, ["password"]);
      return res.status(200).json(new BaseResponse(user));
    } else {
      if (user?.isAdmin) {
        const expectedUser = await getUser(id);
        cleanObject(expectedUser, ["password"]);
        return res.status(200).json(new BaseResponse(expectedUser));
      } else throw new HttpError(ACCESS_DENIED, 403);
    }
  } catch (error) {
    return next(error);
  }
};

export const updateUserController: Middleware<UpdateUserDto> = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const userInfo = req.body;
    const { userId } = req;
    cleanObject(userInfo, [
      "username",
      "password",
      "isAdmin",
      "followers",
      "followings",
    ]);
    const user = await getUser(userId!);
    if (userId === id || user?.isAdmin) {
      const updatedUser = await updateUser(id, userInfo);
      return res.status(200).json(new BaseResponse(updatedUser));
    } else throw new HttpError(ACCESS_DENIED, 403);
  } catch (error) {
    return next(error);
  }
};

export const deleteUserController: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    const user = await getUser(userId!);
    if (userId === id || user?.isAdmin) {
      await deleteUser(id);
      return res
        .status(200)
        .json(new BaseResponse(undefined, { message: USER_DELETE }));
    } else throw new HttpError(ACCESS_DENIED, 403);
  } catch (error) {
    return next(error);
  }
};

export const followUserController: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const followerId = req.userId;
    if (id === followerId) throw new HttpError(NOt_ACCEPTABLE, 400);
    await followUser(followerId!, id);
    return res
      .status(200)
      .json(new BaseResponse(undefined, { message: USER_FOLLOWED }));
  } catch (error) {
    return next(error);
  }
};

export const unfollowUserController: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const unfollowerId = req.userId;
    if (id === unfollowerId) throw new HttpError(NOt_ACCEPTABLE, 400);
    await unfollowUser(unfollowerId!, id);
    return res
      .status(200)
      .json(new BaseResponse(undefined, { message: USER_UNFOLLOWED }));
  } catch (error) {
    return next(error);
  }
};
