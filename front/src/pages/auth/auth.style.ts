import styled from "styled-components";

export const LoginTitleTag = styled.h1`
  font-size: 3rem;
  background-color: red;
  background-image: var(--buttonBg);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const AuthForm = styled.form`
  background-color: var(--cardColor);
  border-radius: 1rem;
  padding: 1rem;

  > div {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const AuthInfoForm = styled(AuthForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  > div {
    display: flex;
    gap: 1rem;
    height: 2rem;
    /* width: 90%; */
  }
`;

export const AuthInfoInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--inputColor);
  border-radius: 8px;
  padding: 20px;
  flex: 1;
`;
