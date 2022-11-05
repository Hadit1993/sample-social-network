import jwt from "jsonwebtoken";
import { UNAUTHORIZED_USER } from "../constants/errors";
import { HttpError } from "./common-types";

export const signUser = (id: string) =>
  jwt.sign(id, process.env.JWT_SECRET_KEY!);

export const verifyUser = (authToken: string) => {
  const userId = jwt.verify(authToken, process.env.JWT_SECRET_KEY!);
  return userId.toString();
};
