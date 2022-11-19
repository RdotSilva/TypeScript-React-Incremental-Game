import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceTwo = (props: Props) => {
  return (
    <Resource
      image={ResourceIcons.ResourceTwo}
      resourceTier={2}
      nextTierThreshold={TierLevels.Two}
    />
  );
};

export default ResourceTwo;
