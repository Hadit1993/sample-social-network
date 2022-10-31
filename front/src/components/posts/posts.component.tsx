import { postsData } from "../../data/posts.data";
import { ContainerTag } from "../common/common.style";
import Post from "./post.component";

const Posts = () => {
  return (
    <ContainerTag flexDirection="column" gap="1rem">
      {postsData.map((data, ind) => (
        <Post key={ind} {...data} />
      ))}
    </ContainerTag>
  );
};

export default Posts;
