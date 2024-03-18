import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sa_bansAttributes {
  id: number;
  player_steamid?: string;
  player_name?: string;
  player_ip?: string;
  admin_steamid: string;
  admin_name: string;
  reason: string;
  duration: number;
  ends: Date;
  created: Date;
  server_id?: number;
  status: 'ACTIVE' | 'UNBANNED' | 'EXPIRED' | '';
}

export type sa_bansPk = "id";
export type sa_bansId = sa_bans[sa_bansPk];
export type sa_bansOptionalAttributes = "id" | "player_steamid" | "player_name" | "player_ip" | "created" | "server_id" | "status";
export type sa_bansCreationAttributes = Optional<sa_bansAttributes, sa_bansOptionalAttributes>;

export class sa_bans extends Model<sa_bansAttributes, sa_bansCreationAttributes> implements sa_bansAttributes {
  id!: number;
  player_steamid?: string;
  player_name?: string;
  player_ip?: string;
  admin_steamid!: string;
  admin_name!: string;
  reason!: string;
  duration!: number;
  ends!: Date;
  created!: Date;
  server_id?: number;
  status!: 'ACTIVE' | 'UNBANNED' | 'EXPIRED' | '';


  static initModel(sequelize: Sequelize.Sequelize): typeof sa_bans {
    return sa_bans.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    player_steamid: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    player_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    player_ip: {
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
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('ACTIVE','UNBANNED','EXPIRED',''),
      allowNull: false,
      defaultValue: "ACTIVE"
    }
  }, {
    sequelize,
    tableName: 'sa_bans',
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
