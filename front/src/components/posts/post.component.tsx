import { PostData } from "../../data/posts.data";

import comment from "../../assets/img/comment.png";
import share from "../../assets/img/share.png";
import heart from "../../assets/img/like.png";
import emptyHeart from "../../assets/img/notlike.png";
import { ContainerTag, ImgTag, TextTag } from "../common/common.style";

const Post = (props: PostData) => {
  return (
    <ContainerTag
      bgColor="var(--cardColor)"
      flexDirection="column"
      padding="1rem"
      borderRadius="1rem"
      gap="1rem"
    >
      <ImgTag
        width="100%"
        src={props.img}
        alt=""
        maxHeight="20rem"
        borderRadius="0.5rem"
        objectFit="cover"
      />
      <ContainerTag alignItems="flex-start" gap="1.5rem">
        <img src={props.liked ? heart : emptyHeart} alt="like" />
        <img src={comment} alt="comment" />
        <img src={share} alt="share" />
      </ContainerTag>
      <TextTag color="var(--gray)" fontSize="12px">
        {props.likes} likes
      </TextTag>
      <ContainerTag gap="0.5rem">
        <span>
          <b>{props.name}</b>
        </span>
        <span>{props.desc}</span>
      </ContainerTag>
    </ContainerTag>
  );
};

export default Post;
