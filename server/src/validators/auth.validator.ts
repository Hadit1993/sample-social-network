import Joi from "joi";
import { RegisterUserDto, LoginUserDto } from "../dtos/auth.dto";

export const validateRegisterUser = (user: RegisterUserDto) => {
  const schema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().alphanum().min(5).max(30).required(),
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    lastname: Joi.string().alphanum().min(3).max(30).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

export const validateLoginUser = (user: LoginUserDto) => {
  const schema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().alphanum().min(5).max(30).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};
