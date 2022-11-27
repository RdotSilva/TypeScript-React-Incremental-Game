import React from "react";

import ResourceContainer from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceOne = (props: Props) => {
  return (
    <ResourceContainer
      image={ResourceIcons.ResourceOne}
      resourceTier={1}
      nextTierThreshold={TierLevels.One}
      initialStatValue={1}
    />
  );
};

export default ResourceOne;
