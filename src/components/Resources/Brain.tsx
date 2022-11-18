import React from "react";

import Resource from "./ResourceContainer";
import brain from "../../images/resources/brain.png";
import { TierLevels } from "../../config/config";

type Props = {};

const Skull = (props: Props) => {
  return (
    <Resource
      image={brain}
      resourceTier={3}
      nextTierThreshold={TierLevels.Four}
    />
  );
};

export default Skull;
