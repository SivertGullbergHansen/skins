import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wp_player_agentsAttributes {
  steamid: string;
  agent_ct?: string;
  agent_t?: string;
}

export type wp_player_agentsPk = "steamid";
export type wp_player_agentsId = wp_player_agents[wp_player_agentsPk];
export type wp_player_agentsOptionalAttributes = "agent_ct" | "agent_t";
export type wp_player_agentsCreationAttributes = Optional<wp_player_agentsAttributes, wp_player_agentsOptionalAttributes>;

export class wp_player_agents extends Model<wp_player_agentsAttributes, wp_player_agentsCreationAttributes> implements wp_player_agentsAttributes {
  steamid!: string;
  agent_ct?: string;
  agent_t?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof wp_player_agents {
    return wp_player_agents.init({
    steamid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    agent_ct: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    agent_t: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_player_agents',
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
