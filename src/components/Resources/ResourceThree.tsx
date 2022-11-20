import React from "react";

import ResourceContainer from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceThree = (props: Props) => {
  return (
    <ResourceContainer
      image={ResourceIcons.ResourceThree}
      resourceTier={3}
      nextTierThreshold={TierLevels.Three}
    />
  );
};

export default ResourceThree;
