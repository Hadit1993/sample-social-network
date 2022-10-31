import { UilPen } from "@iconscout/react-unicons";
import { ButtonTag, ContainerTag } from "../common/common.style";
import { ProfileModal } from "../profileModal/profile.modal";
import useModal from "../../hooks/use-modal.hook";

const InfoCard = () => {
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <ContainerTag
      gap="0.75rem"
      bgColor="var(--cardColor)"
      padding="1rem"
      borderRadius="1rem"
      width="100%"
      flexDirection="column"
    >
      <ContainerTag alignItems="center" justifyContent="space-between">
        <h4>Your Info</h4>
        <ContainerTag cursor="pointer">
          <UilPen width="2rem" height="1.2rem" onClick={openModal} />
          <ProfileModal opened={isModalOpened} onClose={closeModal} />
        </ContainerTag>
      </ContainerTag>
      <div>
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div>
        <span>
          <b>Lives in </b>
        </span>
        <span>Tehran</span>
      </div>

      <div>
        <span>
          <b>Works at </b>
        </span>
        <span>Banimode</span>
      </div>
      <ButtonTag
        width="6rem"
        height="2rem"
        margin="6rem 0 0 0"
        alignSelf="flex-end"
      >
        Logout
      </ButtonTag>
    </ContainerTag>
  );
};

export default InfoCard;
