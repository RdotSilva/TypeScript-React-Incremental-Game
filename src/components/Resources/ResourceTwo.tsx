import React from "react";

import ResourceContainer from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceTwo = (props: Props) => {
  return (
    <ResourceContainer
      image={ResourceIcons.ResourceTwo}
      resourceTier={2}
      nextTierThreshold={TierLevels.Two}
      initialStatValue={2}
    />
  );
};

export default ResourceTwo;
