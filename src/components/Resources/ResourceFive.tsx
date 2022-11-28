import React from "react";

import ResourceContainer from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceFive = (props: Props) => {
  return (
    <ResourceContainer
      image={ResourceIcons.ResourceFive}
      resourceTier={5}
      nextTierThreshold={TierLevels.Two}
      initialStatValue={5}
      amountToShowUpgradeMultiplier={5}
    />
  );
};

export default ResourceFive;
