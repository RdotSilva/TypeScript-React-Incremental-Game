import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import skull from "../../images/resources/skull.png";
import { TierLevels } from "../../config/config";

type Props = {};

const ResourceThree = (props: Props) => {
  return (
    <Resource
      image={skull}
      resourceTier={3}
      nextTierThreshold={TierLevels.Three}
    />
  );
};

export default ResourceThree;
