import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { matchzy_stats_maps, matchzy_stats_mapsId } from './matchzy_stats_maps';
import type { matchzy_stats_matches, matchzy_stats_matchesId } from './matchzy_stats_matches';

export interface matchzy_stats_playersAttributes {
  matchid: number;
  mapnumber: number;
  steamid64: number;
  team: string;
  name: string;
  kills: number;
  deaths: number;
  damage: number;
  assists: number;
  enemy5ks: number;
  enemy4ks: number;
  enemy3ks: number;
  enemy2ks: number;
  utility_count: number;
  utility_damage: number;
  utility_successes: number;
  utility_enemies: number;
  flash_count: number;
  flash_successes: number;
  health_points_removed_total: number;
  health_points_dealt_total: number;
  shots_fired_total: number;
  shots_on_target_total: number;
  v1_count: number;
  v1_wins: number;
  v2_count: number;
  v2_wins: number;
  entry_count: number;
  entry_wins: number;
  equipment_value: number;
  money_saved: number;
  kill_reward: number;
  live_time: number;
  head_shot_kills: number;
  cash_earned: number;
  enemies_flashed: number;
}

export type matchzy_stats_playersPk = "matchid" | "mapnumber" | "steamid64";
export type matchzy_stats_playersId = matchzy_stats_players[matchzy_stats_playersPk];
export type matchzy_stats_playersOptionalAttributes = "team";
export type matchzy_stats_playersCreationAttributes = Optional<matchzy_stats_playersAttributes, matchzy_stats_playersOptionalAttributes>;

export class matchzy_stats_players extends Model<matchzy_stats_playersAttributes, matchzy_stats_playersCreationAttributes> implements matchzy_stats_playersAttributes {
  matchid!: number;
  mapnumber!: number;
  steamid64!: number;
  team!: string;
  name!: string;
  kills!: number;
  deaths!: number;
  damage!: number;
  assists!: number;
  enemy5ks!: number;
  enemy4ks!: number;
  enemy3ks!: number;
  enemy2ks!: number;
  utility_count!: number;
  utility_damage!: number;
  utility_successes!: number;
  utility_enemies!: number;
  flash_count!: number;
  flash_successes!: number;
  health_points_removed_total!: number;
  health_points_dealt_total!: number;
  shots_fired_total!: number;
  shots_on_target_total!: number;
  v1_count!: number;
  v1_wins!: number;
  v2_count!: number;
  v2_wins!: number;
  entry_count!: number;
  entry_wins!: number;
  equipment_value!: number;
  money_saved!: number;
  kill_reward!: number;
  live_time!: number;
  head_shot_kills!: number;
  cash_earned!: number;
  enemies_flashed!: number;

  // matchzy_stats_players belongsTo matchzy_stats_maps via mapnumber
  mapnumber_matchzy_stats_map!: matchzy_stats_maps;
  getMapnumber_matchzy_stats_map!: Sequelize.BelongsToGetAssociationMixin<matchzy_stats_maps>;
  setMapnumber_matchzy_stats_map!: Sequelize.BelongsToSetAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  createMapnumber_matchzy_stats_map!: Sequelize.BelongsToCreateAssociationMixin<matchzy_stats_maps>;
  // matchzy_stats_players belongsTo matchzy_stats_matches via matchid
  match!: matchzy_stats_matches;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<matchzy_stats_matches>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<matchzy_stats_matches>;

  static initModel(sequelize: Sequelize.Sequelize): typeof matchzy_stats_players {
    return matchzy_stats_players.init({
    matchid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'matchzy_stats_matches',
        key: 'matchid'
      }
    },
    mapnumber: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'matchzy_stats_maps',
        key: 'mapnumber'
      }
    },
    steamid64: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    team: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kills: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deaths: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    damage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enemy5ks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enemy4ks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enemy3ks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enemy2ks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utility_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utility_damage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utility_successes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utility_enemies: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flash_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flash_successes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    health_points_removed_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    health_points_dealt_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shots_fired_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shots_on_target_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v1_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v1_wins: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v2_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v2_wins: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entry_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entry_wins: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    equipment_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    money_saved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kill_reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    live_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    head_shot_kills: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cash_earned: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enemies_flashed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'matchzy_stats_players',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matchid" },
          { name: "mapnumber" },
          { name: "steamid64" },
        ]
      },
      {
        name: "mapnumber",
        using: "BTREE",
        fields: [
          { name: "mapnumber" },
        ]
      },
    ]
  });
  }
}
