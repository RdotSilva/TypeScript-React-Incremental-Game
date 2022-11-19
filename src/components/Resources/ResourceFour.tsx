import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceFour = (props: Props) => {
  return (
    <Resource
      image={ResourceIcons.ResourceFour}
      resourceTier={4}
      nextTierThreshold={TierLevels.Four}
    />
  );
};

export default ResourceFour;
