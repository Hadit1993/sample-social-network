import { SearcgInputTag, SearchIconTag } from "./logo-search.style";
import logo from "../../assets/img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import { ContainerTag } from "../common/common.style";

const LogoSearch = () => {
  return (
    <ContainerTag gap="0.75rem">
      <img src={logo} alt="logo" />
      <ContainerTag
        bgColor="var(--inputColor)"
        borderRadius="10px"
        padding="5px"
      >
        <SearcgInputTag type="text" placeholder="#Explore" />
        <SearchIconTag>
          <UilSearch />
        </SearchIconTag>
      </ContainerTag>
    </ContainerTag>
  );
};

export default LogoSearch;
