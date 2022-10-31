import { GridContainer } from "../../components/common/common.style";
import PostSide from "../../components/postSide/post-side.component";
import ProfileSide from "../../components/profileSide/profile-side.component";
import RightSide from "../../components/rightSide/right-side.component";

const HomePage = () => {
  return (
    <GridContainer>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </GridContainer>
  );
};

export default HomePage;
