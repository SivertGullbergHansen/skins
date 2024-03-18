import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { matchzy_stats_maps, matchzy_stats_mapsId } from './matchzy_stats_maps';
import type { matchzy_stats_players, matchzy_stats_playersId } from './matchzy_stats_players';

export interface matchzy_stats_matchesAttributes {
  matchid: number;
  start_time: Date;
  end_time?: Date;
  winner: string;
  series_type: string;
  team1_name: string;
  team1_score: number;
  team2_name: string;
  team2_score: number;
  server_ip: string;
}

export type matchzy_stats_matchesPk = "matchid";
export type matchzy_stats_matchesId = matchzy_stats_matches[matchzy_stats_matchesPk];
export type matchzy_stats_matchesOptionalAttributes = "matchid" | "end_time" | "winner" | "series_type" | "team1_name" | "team1_score" | "team2_name" | "team2_score" | "server_ip";
export type matchzy_stats_matchesCreationAttributes = Optional<matchzy_stats_matchesAttributes, matchzy_stats_matchesOptionalAttributes>;

export class matchzy_stats_matches extends Model<matchzy_stats_matchesAttributes, matchzy_stats_matchesCreationAttributes> implements matchzy_stats_matchesAttributes {
  matchid!: number;
  start_time!: Date;
  end_time?: Date;
  winner!: string;
  series_type!: string;
  team1_name!: string;
  team1_score!: number;
  team2_name!: string;
  team2_score!: number;
  server_ip!: string;

  // matchzy_stats_matches hasMany matchzy_stats_maps via matchid
  matchzy_stats_maps!: matchzy_stats_maps[];
  getMatchzy_stats_maps!: Sequelize.HasManyGetAssociationsMixin<matchzy_stats_maps>;
  setMatchzy_stats_maps!: Sequelize.HasManySetAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  addMatchzy_stats_map!: Sequelize.HasManyAddAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  addMatchzy_stats_maps!: Sequelize.HasManyAddAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  createMatchzy_stats_map!: Sequelize.HasManyCreateAssociationMixin<matchzy_stats_maps>;
  removeMatchzy_stats_map!: Sequelize.HasManyRemoveAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  removeMatchzy_stats_maps!: Sequelize.HasManyRemoveAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  hasMatchzy_stats_map!: Sequelize.HasManyHasAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  hasMatchzy_stats_maps!: Sequelize.HasManyHasAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  countMatchzy_stats_maps!: Sequelize.HasManyCountAssociationsMixin;
  // matchzy_stats_matches belongsToMany matchzy_stats_maps via matchid and mapnumber
  mapnumber_matchzy_stats_maps!: matchzy_stats_maps[];
  getMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManyGetAssociationsMixin<matchzy_stats_maps>;
  setMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManySetAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  addMapnumber_matchzy_stats_map!: Sequelize.BelongsToManyAddAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  addMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManyAddAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  createMapnumber_matchzy_stats_map!: Sequelize.BelongsToManyCreateAssociationMixin<matchzy_stats_maps>;
  removeMapnumber_matchzy_stats_map!: Sequelize.BelongsToManyRemoveAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  removeMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManyRemoveAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  hasMapnumber_matchzy_stats_map!: Sequelize.BelongsToManyHasAssociationMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  hasMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManyHasAssociationsMixin<matchzy_stats_maps, matchzy_stats_mapsId>;
  countMapnumber_matchzy_stats_maps!: Sequelize.BelongsToManyCountAssociationsMixin;
  // matchzy_stats_matches hasMany matchzy_stats_players via matchid
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

  static initModel(sequelize: Sequelize.Sequelize): typeof matchzy_stats_matches {
    return matchzy_stats_matches.init({
    matchid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    series_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    team1_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    team1_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    team2_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    team2_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    server_ip: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'matchzy_stats_matches',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matchid" },
        ]
      },
    ]
  });
  }
}
