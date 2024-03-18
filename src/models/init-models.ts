import type { Sequelize } from "sequelize";
import { matchzy_stats_maps as _matchzy_stats_maps } from "./matchzy_stats_maps";
import type { matchzy_stats_mapsAttributes, matchzy_stats_mapsCreationAttributes } from "./matchzy_stats_maps";
import { matchzy_stats_matches as _matchzy_stats_matches } from "./matchzy_stats_matches";
import type { matchzy_stats_matchesAttributes, matchzy_stats_matchesCreationAttributes } from "./matchzy_stats_matches";
import { matchzy_stats_players as _matchzy_stats_players } from "./matchzy_stats_players";
import type { matchzy_stats_playersAttributes, matchzy_stats_playersCreationAttributes } from "./matchzy_stats_players";
import { sa_admins as _sa_admins } from "./sa_admins";
import type { sa_adminsAttributes, sa_adminsCreationAttributes } from "./sa_admins";
import { sa_bans as _sa_bans } from "./sa_bans";
import type { sa_bansAttributes, sa_bansCreationAttributes } from "./sa_bans";
import { sa_mutes as _sa_mutes } from "./sa_mutes";
import type { sa_mutesAttributes, sa_mutesCreationAttributes } from "./sa_mutes";
import { sa_servers as _sa_servers } from "./sa_servers";
import type { sa_serversAttributes, sa_serversCreationAttributes } from "./sa_servers";
import { wp_player_agents as _wp_player_agents } from "./wp_player_agents";
import type { wp_player_agentsAttributes, wp_player_agentsCreationAttributes } from "./wp_player_agents";
import { wp_player_gloves as _wp_player_gloves } from "./wp_player_gloves";
import type { wp_player_glovesAttributes, wp_player_glovesCreationAttributes } from "./wp_player_gloves";
import { wp_player_knife as _wp_player_knife } from "./wp_player_knife";
import type { wp_player_knifeAttributes, wp_player_knifeCreationAttributes } from "./wp_player_knife";
import { wp_player_skins as _wp_player_skins } from "./wp_player_skins";
import type { wp_player_skinsAttributes, wp_player_skinsCreationAttributes } from "./wp_player_skins";

export {
  _matchzy_stats_maps as matchzy_stats_maps,
  _matchzy_stats_matches as matchzy_stats_matches,
  _matchzy_stats_players as matchzy_stats_players,
  _sa_admins as sa_admins,
  _sa_bans as sa_bans,
  _sa_mutes as sa_mutes,
  _sa_servers as sa_servers,
  _wp_player_agents as wp_player_agents,
  _wp_player_gloves as wp_player_gloves,
  _wp_player_knife as wp_player_knife,
  _wp_player_skins as wp_player_skins,
};

export type {
  matchzy_stats_mapsAttributes,
  matchzy_stats_mapsCreationAttributes,
  matchzy_stats_matchesAttributes,
  matchzy_stats_matchesCreationAttributes,
  matchzy_stats_playersAttributes,
  matchzy_stats_playersCreationAttributes,
  sa_adminsAttributes,
  sa_adminsCreationAttributes,
  sa_bansAttributes,
  sa_bansCreationAttributes,
  sa_mutesAttributes,
  sa_mutesCreationAttributes,
  sa_serversAttributes,
  sa_serversCreationAttributes,
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
  const matchzy_stats_maps = _matchzy_stats_maps.initModel(sequelize);
  const matchzy_stats_matches = _matchzy_stats_matches.initModel(sequelize);
  const matchzy_stats_players = _matchzy_stats_players.initModel(sequelize);
  const sa_admins = _sa_admins.initModel(sequelize);
  const sa_bans = _sa_bans.initModel(sequelize);
  const sa_mutes = _sa_mutes.initModel(sequelize);
  const sa_servers = _sa_servers.initModel(sequelize);
  const wp_player_agents = _wp_player_agents.initModel(sequelize);
  const wp_player_gloves = _wp_player_gloves.initModel(sequelize);
  const wp_player_knife = _wp_player_knife.initModel(sequelize);
  const wp_player_skins = _wp_player_skins.initModel(sequelize);

  matchzy_stats_maps.belongsToMany(matchzy_stats_matches, { as: 'matchid_matchzy_stats_matches', through: matchzy_stats_players, foreignKey: "mapnumber", otherKey: "matchid" });
  matchzy_stats_matches.belongsToMany(matchzy_stats_maps, { as: 'mapnumber_matchzy_stats_maps', through: matchzy_stats_players, foreignKey: "matchid", otherKey: "mapnumber" });
  matchzy_stats_players.belongsTo(matchzy_stats_maps, { as: "mapnumber_matchzy_stats_map", foreignKey: "mapnumber"});
  matchzy_stats_maps.hasMany(matchzy_stats_players, { as: "matchzy_stats_players", foreignKey: "mapnumber"});
  matchzy_stats_maps.belongsTo(matchzy_stats_matches, { as: "match", foreignKey: "matchid"});
  matchzy_stats_matches.hasMany(matchzy_stats_maps, { as: "matchzy_stats_maps", foreignKey: "matchid"});
  matchzy_stats_players.belongsTo(matchzy_stats_matches, { as: "match", foreignKey: "matchid"});
  matchzy_stats_matches.hasMany(matchzy_stats_players, { as: "matchzy_stats_players", foreignKey: "matchid"});

  return {
    matchzy_stats_maps: matchzy_stats_maps,
    matchzy_stats_matches: matchzy_stats_matches,
    matchzy_stats_players: matchzy_stats_players,
    sa_admins: sa_admins,
    sa_bans: sa_bans,
    sa_mutes: sa_mutes,
    sa_servers: sa_servers,
    wp_player_agents: wp_player_agents,
    wp_player_gloves: wp_player_gloves,
    wp_player_knife: wp_player_knife,
    wp_player_skins: wp_player_skins,
  };
}
