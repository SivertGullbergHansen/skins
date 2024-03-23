import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface wp_saved_skinsAttributes {
  steamid: string;
  weapon_defindex: number;
  weapon_paint_id: number;
  weapon_wear: number;
  weapon_seed: number;
}

export type wp_saved_skinsOptionalAttributes = "weapon_wear" | "weapon_seed";
export type wp_saved_skinsCreationAttributes = Optional<
  wp_saved_skinsAttributes,
  wp_saved_skinsOptionalAttributes
>;

export class wp_saved_skins
  extends Model<wp_saved_skinsAttributes, wp_saved_skinsCreationAttributes>
  implements wp_saved_skinsAttributes
{
  steamid!: string;
  weapon_defindex!: number;
  weapon_paint_id!: number;
  weapon_wear!: number;
  weapon_seed!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof wp_saved_skins {
    return wp_saved_skins.init(
      {
        steamid: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        weapon_defindex: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        weapon_paint_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        weapon_wear: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0.000001,
        },
        weapon_seed: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "wp_saved_skins",
        timestamps: false,
      }
    );
  }
}
