import { ButtonTag } from "./../common/common.style";
import styled from "styled-components";

export const NavIconsTag = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ShareButtonTag = styled(ButtonTag)`
  align-self: center;
`;
