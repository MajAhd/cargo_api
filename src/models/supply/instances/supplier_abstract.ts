import {SupplyModel} from "../SupplyModel";
import {logger} from "../../../../config/logger";

export abstract class SupplierAbstract {
    abstract id: number;

    async get_supply_info(): Promise<object | null> {
        try {
            return await SupplyModel.findByPk(this.id);
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

    async get_supplier_geo(): Promise<object | null | boolean> {
        try {
            return await SupplyModel.findOne({
                attributes: ['geo_lat', 'geo_lon'],
                where: {
                    id: this.id
                }
            })
        } catch (e) {
            return false
        }
    }

    async get_supplier_parcel(): Promise<object | null | boolean> {
        try {
            return await SupplyModel.findOne({
                attributes: ['allowed_weight', 'current_cargo_weight', 'current_number_of_pallets', 'max_number_of_pallets'],
                where: {
                    id: this.id
                }
            })
        } catch (e) {
            return false
        }
    }
}