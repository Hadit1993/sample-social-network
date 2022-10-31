import styled from "styled-components";

export const ProfileCardTag = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow-x: clip;
  background-color: var(--cardColor);

  > span {
    font-weight: bold;
    color: orange;
    align-self: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

export const ProfileImagesTag = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img:nth-of-type(2) {
    position: absolute;
    bottom: -3rem;
    box-shadow: var(--profileShadow);
  }
`;

export const ProfileNameTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 10px;

  span:nth-of-type(1) {
    font-weight: bold;
  }
`;

export const FollowStatusTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  hr {
    width: 85%;
    border: 1px solid var(--hrColor);
  }

  > div {
    display: flex;
    gap: 1rem;
    width: 80%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const FollowTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  > span:nth-last-of-type(1) {
    font-weight: bold;
  }

  > span:nth-last-of-type(2) {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const VL = styled.div`
  height: 150%;
  border-left: 2px solid var(--hrColor);
`;
