import { loginUser, registerUser } from "./../services/auth.service";

import { Middleware } from "../utils/common-types";
import BaseResponse from "../models/base-response.model";
import { RegisterUserDto, LoginUserDto } from "../dtos/auth.dto";

export const registerUserController: Middleware<RegisterUserDto> = async (
  req,
  res,
  next
) => {
  try {
    const authToken = await registerUser(req.body);
    return res.status(201).json(new BaseResponse(authToken));
  } catch (error) {
    return next(error);
  }
};

export const loginUserController: Middleware<LoginUserDto> = async (
  req,
  res,
  next
) => {
  try {
    const authToken = await loginUser(req.body);
    return res.status(200).json(new BaseResponse(authToken));
  } catch (error) {
    return next(error);
  }
};
