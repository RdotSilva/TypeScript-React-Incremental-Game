import React from "react";

import Resource from "../Resource/Resource";
import ore from "../../images/Icon46.png";

type Props = {};

const Ore = (props: Props) => {
  return <Resource image={ore} tier={1} nextTierThreshold={100} />;
};

export default Ore;
