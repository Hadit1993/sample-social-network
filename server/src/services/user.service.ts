import { INVALID_USER } from "../constants/errors";
import UserModel from "../models/user.model";
import { HttpError } from "../utils/common-types";
import { UpdateUserDto } from "./../dtos/user.dto";

export const getUser = async (id: string) => {
  const user = await UserModel.findById(id);
  if (user) return user.toObject();
  else throw new HttpError(INVALID_USER, 404);
};

export const updateUser = async (id: string, userInfo: UpdateUserDto) => {
  const user = await UserModel.findByIdAndUpdate(id, userInfo);
  if (user) return user.toObject();
  else throw new HttpError(INVALID_USER, 404);
};

export const deleteUser = async (id: string) => {
  const result = await UserModel.deleteOne({ id });
  if (result.deletedCount === 0) {
    throw new HttpError(INVALID_USER, 404);
  }
};

export const followUser = async (followerId: string, followingId: string) => {
  const followingUser = await UserModel.findById(followingId);
  if (!followingUser) throw new HttpError(INVALID_USER, 404);
  const followerUser = await UserModel.findById(followerId);
  if (!followingUser.followers.includes(followerId)) {
    await followingUser.updateOne({ $push: { followers: followerId } });
    await followerUser?.updateOne({ $push: { followings: followingId } });
  }
};

export const unfollowUser = async (
  unfollowerId: string,
  unfollowingId: string
) => {
  const unfollowingUser = await UserModel.findById(unfollowingId);
  if (!unfollowingUser) throw new HttpError(INVALID_USER, 404);
  const unfollowerUser = await UserModel.findById(unfollowerId);
  if (unfollowingUser.followers.includes(unfollowerId)) {
    await unfollowingUser.updateOne({ $pull: { followers: unfollowerId } });
    await unfollowerUser?.updateOne({ $pull: { followings: unfollowingId } });
  }
};
