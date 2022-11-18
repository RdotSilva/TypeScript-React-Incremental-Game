import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import teeth from "../../images/resources/teeth.png";
import { TierLevels } from "../../config/config";

type Props = {};

const ResourceFive = (props: Props) => {
  return (
    <Resource
      image={teeth}
      resourceTier={5}
      nextTierThreshold={TierLevels.Two}
    />
  );
};

export default ResourceFive;
