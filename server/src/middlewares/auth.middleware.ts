import { RegisterUserDto } from "../dtos/auth.dto";
import { HttpError, Middleware } from "../utils/common-types";
import { verifyUser } from "../utils/jwt-operations";
import { UNAUTHORIZED_USER } from "../constants/errors";

export const authenticateUserMiddleware: Middleware<RegisterUserDto> = async (
  req,
  _,
  next
) => {
  try {
    const { authorization } = req.headers;
    const error = new Error();
    if (!authorization) throw error;
    const authToken = authorization.replace("Bearer ", "");
    const userId = verifyUser(authToken);
    req.userId = userId;
    return next();
  } catch (error) {
    return next(new HttpError(UNAUTHORIZED_USER, 401));
  }
};
