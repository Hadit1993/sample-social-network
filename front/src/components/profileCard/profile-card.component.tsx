import {
  FollowStatusTag,
  FollowTag,
  ProfileCardTag,
  ProfileImagesTag,
  ProfileNameTag,
  VL,
} from "./profile-card.style";
import cover from "../../assets/img/cover.jpg";
import profile from "../../assets/img/profileimg.jpg";
import { ImgTag } from "../common/common.style";
import { ShowIF } from "../common/common.component";

const ProfileCard = (props: { inProfilePage?: boolean }) => {
  return (
    <ProfileCardTag>
      <ProfileImagesTag>
        <ImgTag width="100%" src={cover} alt="" />
        <ImgTag width="6rem" src={profile} alt="" borderRadius="50%" />
      </ProfileImagesTag>

      <ProfileNameTag>
        <span>Zendaya MJ</span>
        <span>Senior UI/UX designer</span>
      </ProfileNameTag>

      <FollowStatusTag>
        <hr />
        <div>
          <FollowTag>
            <span>6,890</span>
            <span>Followings</span>
          </FollowTag>
          <VL />
          <FollowTag>
            <span>10</span>
            <span>Followers</span>
          </FollowTag>

          <ShowIF term={props.inProfilePage}>
            <VL />
            <FollowTag>
              <span>3</span>
              <span>Posts</span>
            </FollowTag>
          </ShowIF>
        </div>
        <hr />
      </FollowStatusTag>

      <ShowIF term={!props.inProfilePage}>
        <span>My Profile</span>
      </ShowIF>
    </ProfileCardTag>
  );
};

export default ProfileCard;
