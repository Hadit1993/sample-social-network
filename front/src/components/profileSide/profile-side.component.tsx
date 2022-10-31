import { ContainerTag } from "../common/common.style";
import FollowersCard from "../followersCard/followers-card.component";
import LogoSearch from "../logoSearch/logo-search.component";
import ProfileCard from "../profileCard/profile-card.component";

const ProfileSide = () => {
  return (
    <ContainerTag
      flexDirection="column"
      gap="1rem"
      alignItems="center"
      overflow="auto"
    >
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </ContainerTag>
  );
};

export default ProfileSide;
