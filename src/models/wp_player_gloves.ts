import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wp_player_glovesAttributes {
  steamid: string;
  weapon_defindex: number;
}

export type wp_player_glovesPk = "steamid";
export type wp_player_glovesId = wp_player_gloves[wp_player_glovesPk];
export type wp_player_glovesCreationAttributes = wp_player_glovesAttributes;

export class wp_player_gloves extends Model<wp_player_glovesAttributes, wp_player_glovesCreationAttributes> implements wp_player_glovesAttributes {
  steamid!: string;
  weapon_defindex!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof wp_player_gloves {
    return wp_player_gloves.init({
    steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    weapon_defindex: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_player_gloves',
    timestamps: false,
    indexes: [
      {
        name: "steamid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "steamid" },
        ]
      },
    ]
  });
  }
}
