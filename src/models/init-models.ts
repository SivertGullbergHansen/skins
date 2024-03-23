import type { Sequelize } from "sequelize";
import { wp_player_agents as _wp_player_agents } from "./wp_player_agents";
import type {
  wp_player_agentsAttributes,
  wp_player_agentsCreationAttributes,
} from "./wp_player_agents";
import { wp_player_gloves as _wp_player_gloves } from "./wp_player_gloves";
import type {
  wp_player_glovesAttributes,
  wp_player_glovesCreationAttributes,
} from "./wp_player_gloves";
import { wp_player_knife as _wp_player_knife } from "./wp_player_knife";
import type {
  wp_player_knifeAttributes,
  wp_player_knifeCreationAttributes,
} from "./wp_player_knife";
import { wp_player_skins as _wp_player_skins } from "./wp_player_skins";
import type {
  wp_player_skinsAttributes,
  wp_player_skinsCreationAttributes,
} from "./wp_player_skins";

export {
  _wp_player_agents as wp_player_agents,
  _wp_player_gloves as wp_player_gloves,
  _wp_player_knife as wp_player_knife,
  _wp_player_skins as wp_player_skins,
};

export type {
  wp_player_agentsAttributes,
  wp_player_agentsCreationAttributes,
  wp_player_glovesAttributes,
  wp_player_glovesCreationAttributes,
  wp_player_knifeAttributes,
  wp_player_knifeCreationAttributes,
  wp_player_skinsAttributes,
  wp_player_skinsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const wp_player_agents = _wp_player_agents.initModel(sequelize);
  const wp_player_gloves = _wp_player_gloves.initModel(sequelize);
  const wp_player_knife = _wp_player_knife.initModel(sequelize);
  const wp_player_skins = _wp_player_skins.initModel(sequelize);

  return {
    wp_player_agents: wp_player_agents,
    wp_player_gloves: wp_player_gloves,
    wp_player_knife: wp_player_knife,
    wp_player_skins: wp_player_skins,
  };
}
