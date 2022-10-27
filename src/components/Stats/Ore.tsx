import React from "react";

import Resource from "../Resource/Resource";
import ore from "../../images/Icon46.png";
import { TierLevels } from "../../config/config";

type Props = {};

const Ore = (props: Props) => {
  return <Resource image={ore} tier={1} nextTierThreshold={TierLevels.One} />;
};

export default Ore;
