import { useState } from "react";

const useModal = () => {
  const [isModalOpened, makeModalOpen] = useState(false);
  const openModal = () => makeModalOpen(true);
  const closeModal = () => makeModalOpen(false);
  return { isModalOpened, openModal, closeModal };
};

export default useModal;
