import React from "react";

import Resource from "../Resource/Resource";
import tree from "../../images/tree2.svg";

type Props = {};

const Tree = (props: Props) => {
  return <Resource image={tree} tier={2} nextTierThreshold={120} />;
};

export default Tree;
