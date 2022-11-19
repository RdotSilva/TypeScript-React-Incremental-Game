import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceFive = (props: Props) => {
  return (
    <Resource
      image={ResourceIcons.ResourceFive}
      resourceTier={5}
      nextTierThreshold={TierLevels.Two}
    />
  );
};

export default ResourceFive;
