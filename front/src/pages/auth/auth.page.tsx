import logo from "../../assets/img/logo.png";
import {
  ButtonTag,
  ContainerTag,
  ImgTag,
  TextTag,
} from "../../components/common/common.style";
import { AuthInfoForm, AuthInfoInput, LoginTitleTag } from "./auth.style";

const AuthPage = () => {
  return (
    <ContainerTag
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="4rem"
      position="relative"
    >
      <ContainerTag justifyContent="center" alignItems="center" gap="2rem">
        <ImgTag src={logo} alt="logo" width="4rem" height="4rem" />
        <div>
          <LoginTitleTag>ZKC Media</LoginTitleTag>
          <h5>Explore the ideas throughout the world</h5>
        </div>
      </ContainerTag>

      {/* <SignUp /> */}
      <SignIn />
    </ContainerTag>
  );
};

export const SignIn = () => {
  return (
    <ContainerTag justifyContent="center" alignItems="center">
      <AuthInfoForm>
        <h3>Login</h3>

        <div>
          <AuthInfoInput type="text" placeholder="Username" name="username" />
        </div>

        <div>
          <AuthInfoInput
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <TextTag fontSize="12px">Don't have an account? Signup!</TextTag>
          <ButtonTag
            type="submit"
            width="6rem"
            height="2rem"
            alignSelf="flex-end"
          >
            Login
          </ButtonTag>
        </div>
      </AuthInfoForm>
    </ContainerTag>
  );
};

const SignUp = () => {
  return (
    <ContainerTag justifyContent="center" alignItems="center">
      <AuthInfoForm>
        <h3>Sign up</h3>
        <div>
          <AuthInfoInput
            type="text"
            placeholder="First Name"
            name="firstname"
          />
          <AuthInfoInput type="text" placeholder="Last Name" name="lastname" />
        </div>
        <div>
          <AuthInfoInput type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <AuthInfoInput
            type="password"
            placeholder="Password"
            name="password"
          />
          <AuthInfoInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPass"
          />
        </div>
        <div>
          <TextTag fontSize="12px">Already have an account? Login!</TextTag>
        </div>
        <ButtonTag
          type="submit"
          width="6rem"
          height="2rem"
          alignSelf="flex-end"
        >
          Signup
        </ButtonTag>
      </AuthInfoForm>
    </ContainerTag>
  );
};

export default AuthPage;
