import { signUser } from "./../utils/jwt-operations";
import bcrypt from "bcrypt";
import { DUPLICATE_USERNAME, INVALID_USER_PASS } from "../constants/errors";
import { RegisterUserDto, LoginUserDto } from "../dtos/auth.dto";
import { HttpError } from "../utils/common-types";
import UserModel from "../models/user.model";

export const registerUser = async (user: RegisterUserDto) => {
  const existingUser = await UserModel.findOne({ username: user.username });
  if (existingUser) throw new HttpError(DUPLICATE_USERNAME, 400);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const newUser = await new UserModel({
    ...user,
    password: hashedPassword,
  }).save();
  const authToken = signUser(newUser._id.toString());
  return authToken;
};

export const loginUser = async (user: LoginUserDto) => {
  const error = new HttpError(INVALID_USER_PASS, 400);
  const existingUser = await UserModel.findOne({ username: user.username });
  if (!existingUser) throw error;
  const isValid = await bcrypt.compare(user.password, existingUser.password);
  if (isValid) {
    const authToken = signUser(existingUser._id.toString());
    return authToken;
  } else throw error;
};
