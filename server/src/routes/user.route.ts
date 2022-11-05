import { validateUpdateUser } from "./../validators/user.validator";
import {
  deleteUserController,
  followUserController,
  getUserController,
  unfollowUserController,
  updateUserController,
} from "./../controllers/user.controller";
import { Router } from "express";
import validationMiddleware from "../middlewares/validation.middleware";
import { authenticateUserMiddleware } from "../middlewares/auth.middleware";
import { followUser, unfollowUser } from "../services/user.service";

const userRouter = Router();

userRouter
  .route("/:id")
  .get(authenticateUserMiddleware, getUserController)
  .delete(authenticateUserMiddleware, deleteUserController)
  .put(
    authenticateUserMiddleware,
    validationMiddleware(validateUpdateUser),
    updateUserController
  );

userRouter
  .route("/:id/follow")
  .put(authenticateUserMiddleware, followUserController);
userRouter
  .route("/:id/unfollow")
  .put(authenticateUserMiddleware, unfollowUserController);

export default userRouter;
