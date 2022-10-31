import { Modal, useMantineTheme } from "@mantine/core";

import PostShare from "../postShare/post-share.component";

export const ShareModal = (props: { opened: boolean; onClose: () => void }) => {
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
      <PostShare />
    </Modal>
  );
};
