import {
  ContainerTag,
  GridContainer,
} from "../../components/common/common.style";
import PostSide from "../../components/postSide/post-side.component";
import ProfileCard from "../../components/profileCard/profile-card.component";
import ProfileLeft from "../../components/profileLeft/profile-left.component";
import RightSide from "../../components/rightSide/right-side.component";

const ProfilePage = () => {
  return (
    <GridContainer>
      <ProfileLeft />
      <ContainerTag
        gap="1rem"
        flexDirection="column"
        height="100vh"
        overflow="auto"
      >
        <ProfileCard inProfilePage />
        <PostSide inProfilePage />
      </ContainerTag>
      <RightSide />
    </GridContainer>
  );
};

export default ProfilePage;
