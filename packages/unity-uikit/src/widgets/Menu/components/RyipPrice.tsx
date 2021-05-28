import React from "react";
import styled from "styled-components";
import { UnityRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  ryipPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const RyipPrice: React.FC<Props> = ({ ryipPriceUsd }) => {
  return ryipPriceUsd ? (
    <PriceLink href="https://unityswap.info/token/0x0A9Ed1ad9D99bc01b163E9038556fE60ec2151ec" target="_blank">
      <UnityRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${ryipPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(RyipPrice);
