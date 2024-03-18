import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sa_serversAttributes {
  id: number;
  address: string;
  hostname: string;
}

export type sa_serversPk = "id";
export type sa_serversId = sa_servers[sa_serversPk];
export type sa_serversOptionalAttributes = "id";
export type sa_serversCreationAttributes = Optional<sa_serversAttributes, sa_serversOptionalAttributes>;

export class sa_servers extends Model<sa_serversAttributes, sa_serversCreationAttributes> implements sa_serversAttributes {
  id!: number;
  address!: string;
  hostname!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sa_servers {
    return sa_servers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "address"
    },
    hostname: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sa_servers',
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
      {
        name: "address",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address" },
        ]
      },
    ]
  });
  }
}
