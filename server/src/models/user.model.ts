import { model, Schema, Types } from "mongoose";
import UserEntity from "../entities/user.entity";

const UserSchema = new Schema<UserEntity>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: {
      type: [Types.ObjectId],
      default: [],
    },
    followings: {
      type: [Types.ObjectId],
      default: [],
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    location: String,
    company: String,
    relStatus: String,
  },
  { timestamps: true }
);

const UserModel = model("Users", UserSchema);

export default UserModel;
