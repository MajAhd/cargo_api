import {SupplyModel} from "../SupplyModel";
import sequelize, {Op} from 'sequelize'
import {logger} from "../../../../config/logger";

class Suppliers {

    async get_suppliers(page = 1): Promise<object> {
        try {
            let limit = 10;
            if (page !== null && page > 1) {
                page = (page - 1) * limit;
            }
            return await SupplyModel.findAll({
                offset: page,
                limit: limit,
            })
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

    async filter_suppliers(demand, distance): Promise<object> {
        try {
            return await SupplyModel.findAll({
                attributes: ["id", "license_plate", "carrier_id", "geo_lat", "geo_lon",
                    "allowed_weight", "current_cargo_weight", "current_number_of_pallets",
                    [sequelize.literal(" " +
                    "ACOS( SIN( RADIANS( `geo_lat` ) ) * SIN( RADIANS( " + demand.origin_lat + " ) ) + " +
                    "COS( RADIANS( `geo_lat` ) ) * COS( RADIANS( " + demand.origin_lat + " )) * COS( RADIANS( `geo_lon` ) - " +
                    "RADIANS( " + demand.origin_lon + " )) ) * 6380"),
                    'distance']],
                where: {
                    [Op.and]: [
                        {
                            current_cargo_weight: {
                                [Op.gt]: demand.total_weight
                            }
                        },
                        {
                            current_number_of_pallets: {
                                [Op.gt]: demand.pallets_qtt
                            }
                        }
                    ]
                },
                having: sequelize.literal('distance <=' + distance),
                order: sequelize.literal('distance ASC'),
            })
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

}

export default new Suppliers();