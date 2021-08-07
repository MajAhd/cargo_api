import Sequelize from "sequelize";
import {MySqlDB} from "../../../config/mysql";

const DemandModel = MySqlDB.define(
    "demands",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        origin_lat: {
            type: Sequelize.DECIMAL,
        },
        origin_lon: {
            type: Sequelize.DECIMAL,
        },
        delivery_lat: {
            type: Sequelize.DECIMAL,
        },
        delivery_lon: {
            type: Sequelize.DECIMAL,
        },
        total_weight: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },

        pallets_qtt: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },

    }
);

module.exports = DemandModel;

