import styled from "styled-components";

export const PostShareInputTag = styled.input`
  background-color: var(--inputColor);
  border-radius: 10px;
  padding: 10px;
  font-size: 17px;
  border: none;
  outline: none;
`;

export const OptionTag = styled.div<{ color?: string }>`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${({ color }) => color};
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const PreviewImageTag = styled.div`
  position: relative;
  > svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    cursor: pointer;
  }
`;
