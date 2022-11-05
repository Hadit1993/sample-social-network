import Joi from "joi";
import { UpdateUserDto } from "../dtos/user.dto";

export const validateUpdateUser = (user: UpdateUserDto) => {
  const schema = Joi.object({
    firstname: Joi.string().alphanum().min(3).max(30),
    lastname: Joi.string().alphanum().min(3).max(30),
    profilePicture: Joi.string(),
    coverPicture: Joi.string(),
    about: Joi.string().min(5).max(50),
    location: Joi.string(),
    company: Joi.string().min(3).max(30),
    relStatus: Joi.string(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};
