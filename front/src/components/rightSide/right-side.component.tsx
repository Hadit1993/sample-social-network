import home from "../../assets/img/home.png";
import notif from "../../assets/img/noti.png";
import comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { ButtonTag, ContainerTag } from "../common/common.style";
import { NavIconsTag, ShareButtonTag } from "./right-side.style";
import TrendCard from "../trendCard/trend-card.component";
import useModal from "../../hooks/use-modal.hook";
import { ShareModal } from "../shareModal/share.modal";

const RightSide = () => {
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <ContainerTag flexDirection="column" gap="2rem">
      <NavIconsTag>
        <img src={home} alt="" />
        <UilSetting />
        <img src={notif} alt="" />
        <img src={comment} alt="" />
      </NavIconsTag>
      <TrendCard />

      <ShareButtonTag width="80%" height="3rem" onClick={openModal}>
        Share
      </ShareButtonTag>

      <ShareModal opened={isModalOpened} onClose={closeModal} />
    </ContainerTag>
  );
};

export default RightSide;
