import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wp_player_skinsAttributes {
  steamid: string;
  weapon_defindex: number;
  weapon_paint_id: number;
  weapon_wear: number;
  weapon_seed: number;
}

export type wp_player_skinsOptionalAttributes = "weapon_wear" | "weapon_seed";
export type wp_player_skinsCreationAttributes = Optional<wp_player_skinsAttributes, wp_player_skinsOptionalAttributes>;

export class wp_player_skins extends Model<wp_player_skinsAttributes, wp_player_skinsCreationAttributes> implements wp_player_skinsAttributes {
  steamid!: string;
  weapon_defindex!: number;
  weapon_paint_id!: number;
  weapon_wear!: number;
  weapon_seed!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof wp_player_skins {
    return wp_player_skins.init({
    steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    weapon_defindex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weapon_paint_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weapon_wear: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.000001
    },
    weapon_seed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_player_skins',
    timestamps: false
  });
  }
}
