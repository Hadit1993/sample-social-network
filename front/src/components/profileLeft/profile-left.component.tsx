import { ContainerTag } from "../common/common.style";
import FollowersCard from "../followersCard/followers-card.component";
import InfoCard from "../infoCard/info-card.component";
import LogoSearch from "../logoSearch/logo-search.component";

const ProfileLeft = () => {
  return (
    <ContainerTag
      flexDirection="column"
      gap="1rem"
      alignItems="center"
      overflow="auto"
    >
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </ContainerTag>
  );
};

export default ProfileLeft;
