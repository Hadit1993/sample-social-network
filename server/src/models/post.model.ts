import { model, Schema, Types } from "mongoose";

const PostSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true,
    },
    desc: String,
    likes: {
      type: [Types.ObjectId],
      default: [],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Posts", PostSchema);

export default PostModel;
