import React from "react";

import Resource from "../Resource/Resource";
import tree from "../../images/tree2.svg";
import { TierLevels } from "../../config/tierLevels";

type Props = {};

const Tree = (props: Props) => {
  return <Resource image={tree} tier={2} nextTierThreshold={TierLevels.Two} />;
};

export default Tree;
