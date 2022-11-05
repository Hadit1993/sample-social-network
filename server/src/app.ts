import express from "express";
import handleError from "./middlewares/error-handler.middleware";
import authRouter from "./routes/auth.route";
import postRouter from "./routes/post.route";
import userRouter from "./routes/user.route";

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use(handleError);

export default app;
