import { authenticateUserMiddleware } from "./../middlewares/auth.middleware";
import {
  deletePostController,
  dislikePostController,
  getPostController,
  getTimlinePostsController,
  likePostController,
} from "./../controllers/post.controller";
import { Router } from "express";
import { CreatePostController } from "../controllers/post.controller";

const postRouter = Router();

postRouter.route("/").post(authenticateUserMiddleware, CreatePostController);

postRouter.get(
  "/timeline",
  authenticateUserMiddleware,
  getTimlinePostsController
);

postRouter
  .route("/:id")
  .get(getPostController)
  .delete(authenticateUserMiddleware, deletePostController);

postRouter
  .route("/:id/like")
  .get(authenticateUserMiddleware, likePostController);

postRouter
  .route("/:id/dislike")
  .get(authenticateUserMiddleware, dislikePostController);

export default postRouter;
