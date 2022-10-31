import { followersData } from "../../data/followers.data";
import {
  ButtonTag,
  ContainerTag,
  ImgTag,
  TextTag,
} from "../common/common.style";
import { FollowersCardTag } from "./followers-card.style";

const FollowersCard = () => {
  return (
    <FollowersCardTag
      width="100%"
      borderRadius="0.7rem"
      gap="1rem"
      flexDirection="column"
    >
      <h3>Who is following you?</h3>
      {followersData.map((follower, ind) => (
        <ContainerTag
          key={ind}
          alignItems="center"
          justifyContent="space-between"
        >
          <ContainerTag gap="10px">
            <ImgTag
              src={follower.img}
              alt="follow"
              width="3.2rem"
              height="3.2rem"
              borderRadius="50%"
            />

            <ContainerTag
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <TextTag fontWeight="bold">{follower.name}</TextTag>
              <span>@{follower.username}</span>
            </ContainerTag>
          </ContainerTag>
          <ButtonTag height="2rem" padding="0 20px">
            Follow
          </ButtonTag>
        </ContainerTag>
      ))}
    </FollowersCardTag>
  );
};

export default FollowersCard;
