import Sequelize from "sequelize";
import {MySqlDB} from "../../../config/mysql";

const UserModel = MySqlDB.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(128),
        },
        email: {
            type: Sequelize.STRING(255),
        },

    }
);

module.exports = UserModel;

