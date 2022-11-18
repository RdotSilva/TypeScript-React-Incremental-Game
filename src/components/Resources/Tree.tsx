import React from "react";

import Resource from "../Resources/ResourceContainer";
import tree from "../../images/tree2.svg";
import { TierLevels } from "../../config/config";

type Props = {};

const Tree = (props: Props) => {
  return (
    <Resource
      image={tree}
      resourceTier={2}
      nextTierThreshold={TierLevels.Two}
    />
  );
};

export default Tree;
