import Sequelize from "sequelize";
import {MySqlDB} from "../../../config/mysql";

const CarrierModel = MySqlDB.define(
    "carrier",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(128),
        },

    }
);

module.exports = CarrierModel;

