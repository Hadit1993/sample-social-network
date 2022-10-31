import { Modal, useMantineTheme } from "@mantine/core";
import { AuthInfoForm, AuthInfoInput } from "../../pages/auth/auth.style";
import { ButtonTag } from "../common/common.style";

export const ProfileModal = (props: {
  opened: boolean;
  onClose: () => void;
}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened={props.opened}
      onClose={props.onClose}
    >
      <AuthInfoForm>
        <h3>Your Info</h3>

        <div>
          <AuthInfoInput
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <AuthInfoInput type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div>
          <AuthInfoInput type="text" name="worksAt" placeholder="Works At" />
        </div>
        <div>
          <AuthInfoInput type="text" name="livesIn" placeholder="Lives In" />
          <AuthInfoInput type="text" name="country" placeholder="Country" />
        </div>

        <div>
          <AuthInfoInput
            type="text"
            name="relSt"
            placeholder="Relationship Status"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <ButtonTag
          type="submit"
          width="6rem"
          height="2rem"
          alignSelf="flex-end"
        >
          Update
        </ButtonTag>
      </AuthInfoForm>
    </Modal>
  );
};
