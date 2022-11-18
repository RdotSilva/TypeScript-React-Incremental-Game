import React from "react";

import Resource from "../Resources/ResourceContainer";
import ore from "../../images/Icon46.png";
import { TierLevels } from "../../config/config";

type Props = {};

const Ore = (props: Props) => {
  return (
    <Resource image={ore} resourceTier={1} nextTierThreshold={TierLevels.One} />
  );
};

export default Ore;
