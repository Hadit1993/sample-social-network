import styled from "styled-components";

export const AppContainer = styled.div`
  overflow: hidden;
  color: var(--black);
  background-color: #f3f3f3;
  padding: 1rem 1rem;
`;

export const Blur = styled.div<{
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}>`
  position: absolute;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background-color: #a6ddf0;
  filter: blur(72px);
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
