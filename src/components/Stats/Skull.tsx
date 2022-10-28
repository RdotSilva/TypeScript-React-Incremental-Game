import React from "react";

import Resource from "../Resource/Resource";
import skull from "../../images/resources/skull.png";
import { TierLevels } from "../../config/config";

type Props = {};

const Skull = (props: Props) => {
  return (
    <Resource image={skull} resourceTier={3} nextTierThreshold={TierLevels.Three} />
  );
};

export default Skull;
