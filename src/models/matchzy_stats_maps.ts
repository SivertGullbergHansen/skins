import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { matchzy_stats_matches, matchzy_stats_matchesId } from './matchzy_stats_matches';
import type { matchzy_stats_players, matchzy_stats_playersId } from './matchzy_stats_players';

export interface matchzy_stats_mapsAttributes {
  matchid: number;
  mapnumber: number;
  start_time: Date;
  end_time?: Date;
  winner: string;
  mapname: string;
  team1_score: number;
  team2_score: number;
}

export type matchzy_stats_mapsPk = "matchid" | "mapnumber";
export type matchzy_stats_mapsId = matchzy_stats_maps[matchzy_stats_mapsPk];
export type matchzy_stats_mapsOptionalAttributes = "end_time" | "winner" | "mapname" | "team1_score" | "team2_score";
export type matchzy_stats_mapsCreationAttributes = Optional<matchzy_stats_mapsAttributes, matchzy_stats_mapsOptionalAttributes>;

export class matchzy_stats_maps extends Model<matchzy_stats_mapsAttributes, matchzy_stats_mapsCreationAttributes> implements matchzy_stats_mapsAttributes {
  matchid!: number;
  mapnumber!: number;
  start_time!: Date;
  end_time?: Date;
  winner!: string;
  mapname!: string;
  team1_score!: number;
  team2_score!: number;

  // matchzy_stats_maps belongsToMany matchzy_stats_matches via mapnumber and matchid
  matchid_matchzy_stats_matches!: matchzy_stats_matches[];
  getMatchid_matchzy_stats_matches!: Sequelize.BelongsToManyGetAssociationsMixin<matchzy_stats_matches>;
  setMatchid_matchzy_stats_matches!: Sequelize.BelongsToManySetAssociationsMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  addMatchid_matchzy_stats_match!: Sequelize.BelongsToManyAddAssociationMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  addMatchid_matchzy_stats_matches!: Sequelize.BelongsToManyAddAssociationsMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  createMatchid_matchzy_stats_match!: Sequelize.BelongsToManyCreateAssociationMixin<matchzy_stats_matches>;
  removeMatchid_matchzy_stats_match!: Sequelize.BelongsToManyRemoveAssociationMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  removeMatchid_matchzy_stats_matches!: Sequelize.BelongsToManyRemoveAssociationsMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  hasMatchid_matchzy_stats_match!: Sequelize.BelongsToManyHasAssociationMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  hasMatchid_matchzy_stats_matches!: Sequelize.BelongsToManyHasAssociationsMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  countMatchid_matchzy_stats_matches!: Sequelize.BelongsToManyCountAssociationsMixin;
  // matchzy_stats_maps hasMany matchzy_stats_players via mapnumber
  matchzy_stats_players!: matchzy_stats_players[];
  getMatchzy_stats_players!: Sequelize.HasManyGetAssociationsMixin<matchzy_stats_players>;
  setMatchzy_stats_players!: Sequelize.HasManySetAssociationsMixin<matchzy_stats_players, matchzy_stats_playersId>;
  addMatchzy_stats_player!: Sequelize.HasManyAddAssociationMixin<matchzy_stats_players, matchzy_stats_playersId>;
  addMatchzy_stats_players!: Sequelize.HasManyAddAssociationsMixin<matchzy_stats_players, matchzy_stats_playersId>;
  createMatchzy_stats_player!: Sequelize.HasManyCreateAssociationMixin<matchzy_stats_players>;
  removeMatchzy_stats_player!: Sequelize.HasManyRemoveAssociationMixin<matchzy_stats_players, matchzy_stats_playersId>;
  removeMatchzy_stats_players!: Sequelize.HasManyRemoveAssociationsMixin<matchzy_stats_players, matchzy_stats_playersId>;
  hasMatchzy_stats_player!: Sequelize.HasManyHasAssociationMixin<matchzy_stats_players, matchzy_stats_playersId>;
  hasMatchzy_stats_players!: Sequelize.HasManyHasAssociationsMixin<matchzy_stats_players, matchzy_stats_playersId>;
  countMatchzy_stats_players!: Sequelize.HasManyCountAssociationsMixin;
  // matchzy_stats_maps belongsTo matchzy_stats_matches via matchid
  match!: matchzy_stats_matches;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<matchzy_stats_matches>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<matchzy_stats_matches, matchzy_stats_matchesId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<matchzy_stats_matches>;

  static initModel(sequelize: Sequelize.Sequelize): typeof matchzy_stats_maps {
    return matchzy_stats_maps.init({
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
      primaryKey: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    winner: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    mapname: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    team1_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    team2_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'matchzy_stats_maps',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matchid" },
          { name: "mapnumber" },
        ]
      },
      {
        name: "mapnumber_index",
        using: "BTREE",
        fields: [
          { name: "mapnumber" },
        ]
      },
    ]
  });
  }
}
