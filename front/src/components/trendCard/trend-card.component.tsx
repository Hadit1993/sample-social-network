import { trendsData } from "../../data/trends.data";
import { ContainerTag, TextTag } from "../common/common.style";

const TrendCard = () => {
  return (
    <ContainerTag
      bgColor="var(--cardColor)"
      padding="1rem 1rem 1rem 2rem"
      borderRadius="1rem"
      flexDirection="column"
      gap="1rem"
    >
      <h3>Trends for you</h3>
      {trendsData.map((trend) => (
        <ContainerTag gap="0.5rem" flexDirection="column">
          <TextTag fontWeight="bold">#{trend.name}</TextTag>
          <TextTag fontSize="13px">{trend.shares}k shares</TextTag>
        </ContainerTag>
      ))}
    </ContainerTag>
  );
};

export default TrendCard;
