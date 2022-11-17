import React from "react";

import Resource from "../Resource/Resource";
import teeth from "../../images/resources/teeth.png";
import { TierLevels } from "../../config/config";

type Props = {};

const Teeth = (props: Props) => {
  return (
    <Resource
      image={teeth}
      resourceTier={4}
      nextTierThreshold={TierLevels.Two}
    />
  );
};

export default Teeth;
