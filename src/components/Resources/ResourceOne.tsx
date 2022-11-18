import React from "react";

import Resource from "./ResourceContainer/ResourceContainer";
import ore from "../../images/Icon46.png";
import { TierLevels } from "../../config/config";

type Props = {};

const ResourceOne = (props: Props) => {
  return (
    <Resource image={ore} resourceTier={1} nextTierThreshold={TierLevels.One} />
  );
};

export default ResourceOne;
