import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import { ResourceIcons, TierLevels } from "../../config/config";

type Props = {};

const ResourceOne = (props: Props) => {
  return (
    <Resource
      image={ResourceIcons.ResourceOne}
      resourceTier={1}
      nextTierThreshold={TierLevels.One}
    />
  );
};

export default ResourceOne;
