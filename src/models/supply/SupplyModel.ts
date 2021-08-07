import Sequelize from "sequelize";
import {MySqlDB} from "../../../config/mysql";

export const SupplyModel = MySqlDB.define(
    "suppliers",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        license_plate: {
            type: Sequelize.STRING,
            allowNull: true
        },
        geo_lat: {
            type: Sequelize.DECIMAL,
        },
        geo_lon: {
            type: Sequelize.DECIMAL,
        },
        allowed_weight: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        current_cargo_weight: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        current_number_of_pallets: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        max_number_of_pallets: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        }
    },
);