import Joi from "joi";
import { CreatePostDto } from "./../dtos/post.dto";

export const validateCreatePost = (post: CreatePostDto) => {
  const schema = Joi.object({
    desc: Joi.string().min(3),
    image: Joi.string().min(3),
  })
    .or("desc", "image")
    .options({ abortEarly: false });

  return schema.validate(post);
};
