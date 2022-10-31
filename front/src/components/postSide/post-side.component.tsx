import { ContainerTag } from "../common/common.style";
import Posts from "../posts/posts.component";
import PostShare from "../postShare/post-share.component";

const PostSide = (props: { inProfilePage?: boolean }) => {
  return (
    <ContainerTag
      flexDirection="column"
      gap="1rem"
      height={props.inProfilePage ? undefined : "100vh"}
      overflow={props.inProfilePage ? undefined : "auto"}
    >
      <PostShare />
      <Posts />
    </ContainerTag>
  );
};

export default PostSide;
