import { Sequelize } from "sequelize";
import { initModels } from "../models/init-models";

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "wp",
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost:3306",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const models = initModels(sequelize);

export { models };
