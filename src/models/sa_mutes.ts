import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sa_mutesAttributes {
  id: number;
  player_steamid: string;
  player_name?: string;
  admin_steamid: string;
  admin_name: string;
  reason: string;
  duration: number;
  ends: Date;
  created: Date;
  type: 'GAG' | 'MUTE' | 'SILENCE' | '';
  server_id?: number;
  status: 'ACTIVE' | 'UNMUTED' | 'EXPIRED' | '';
}

export type sa_mutesPk = "id";
export type sa_mutesId = sa_mutes[sa_mutesPk];
export type sa_mutesOptionalAttributes = "id" | "player_name" | "created" | "type" | "server_id" | "status";
export type sa_mutesCreationAttributes = Optional<sa_mutesAttributes, sa_mutesOptionalAttributes>;

export class sa_mutes extends Model<sa_mutesAttributes, sa_mutesCreationAttributes> implements sa_mutesAttributes {
  id!: number;
  player_steamid!: string;
  player_name?: string;
  admin_steamid!: string;
  admin_name!: string;
  reason!: string;
  duration!: number;
  ends!: Date;
  created!: Date;
  type!: 'GAG' | 'MUTE' | 'SILENCE' | '';
  server_id?: number;
  status!: 'ACTIVE' | 'UNMUTED' | 'EXPIRED' | '';


  static initModel(sequelize: Sequelize.Sequelize): typeof sa_mutes {
    return sa_mutes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    player_steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    player_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    admin_steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    admin_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ends: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    type: {
      type: DataTypes.ENUM('GAG','MUTE','SILENCE',''),
      allowNull: false,
      defaultValue: "GAG"
    },
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('ACTIVE','UNMUTED','EXPIRED',''),
      allowNull: false,
      defaultValue: "ACTIVE"
    }
  }, {
    sequelize,
    tableName: 'sa_mutes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
