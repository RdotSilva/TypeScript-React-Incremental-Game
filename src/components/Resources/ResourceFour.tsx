import React from "react";

import ResourceContainer from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceFour = (props: Props) => {
  return (
    <ResourceContainer
      image={ResourceIcons.ResourceFour}
      resourceTier={4}
      nextTierThreshold={TierLevels.Four}
      initialStatValue={4}
    />
  );
};

export default ResourceFour;
