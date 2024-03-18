import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sa_adminsAttributes {
  id: number;
  player_steamid: string;
  player_name: string;
  flags: string;
  immunity: string;
  server_id?: number;
  ends?: Date;
  created: Date;
}

export type sa_adminsPk = "id";
export type sa_adminsId = sa_admins[sa_adminsPk];
export type sa_adminsOptionalAttributes = "id" | "immunity" | "server_id" | "ends" | "created";
export type sa_adminsCreationAttributes = Optional<sa_adminsAttributes, sa_adminsOptionalAttributes>;

export class sa_admins extends Model<sa_adminsAttributes, sa_adminsCreationAttributes> implements sa_adminsAttributes {
  id!: number;
  player_steamid!: string;
  player_name!: string;
  flags!: string;
  immunity!: string;
  server_id?: number;
  ends?: Date;
  created!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sa_admins {
    return sa_admins.init({
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
      allowNull: false
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    immunity: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "0"
    },
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ends: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'sa_admins',
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
