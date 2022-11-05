import {
  validateLoginUser,
  validateRegisterUser,
} from "./../validators/auth.validator";

import {
  loginUserController,
  registerUserController,
} from "./../controllers/auth.controller";
import { Router } from "express";
import validationMiddleware from "../middlewares/validation.middleware";

const authRouter = Router();

authRouter.post(
  "/register",
  validationMiddleware(validateRegisterUser),
  registerUserController
);

authRouter.post(
  "/login",
  validationMiddleware(validateLoginUser),
  loginUserController
);

export default authRouter;
