import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wp_player_knifeAttributes {
  steamid: string;
  knife: string;
}

export type wp_player_knifePk = "steamid";
export type wp_player_knifeId = wp_player_knife[wp_player_knifePk];
export type wp_player_knifeCreationAttributes = wp_player_knifeAttributes;

export class wp_player_knife extends Model<wp_player_knifeAttributes, wp_player_knifeCreationAttributes> implements wp_player_knifeAttributes {
  steamid!: string;
  knife!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof wp_player_knife {
    return wp_player_knife.init({
    steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    knife: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_player_knife',
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
