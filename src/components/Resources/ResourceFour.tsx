import React from "react";

import Resource from "./ResourceContainer";
import brain from "../../images/resources/brain.png";
import { TierLevels } from "../../config/config";

type Props = {};

const ResourceFour = (props: Props) => {
  return (
    <Resource
      image={brain}
      resourceTier={4}
      nextTierThreshold={TierLevels.Four}
    />
  );
};

export default ResourceFour;
