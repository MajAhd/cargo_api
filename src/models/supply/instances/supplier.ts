import {iSupplier, iSupplierCargo, iSupply} from "./supply_interface";
import {SupplyModel} from "../SupplyModel";
import {logger} from "../../../../config/logger";

class Supplier implements iSupply {

    async get_supply_info(id: number): Promise<object | null> {
        try {
            return await SupplyModel.findByPk(id);
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

    async new_supplier(params: iSupplier): Promise<object> {
        try {
            return await SupplyModel.create({
                license_plate: params.license_plate,
                carrier_id: params.carrier_id,
                geo_lat: params.geo_lat,
                geo_lon: params.geo_lon,
                allowed_weight: params.allowed_weight,
                current_cargo_weight: params.current_cargo_weight,
                current_number_of_pallets: params.current_number_of_pallets,
                max_number_of_pallets: params.max_number_of_pallets,
            })
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }

        }
    }

    async update_supplier_license_plate(id: number, params: object): Promise<object> {
        try {
            let supplier: any = await SupplyModel.findByPk(id)
            supplier['license_plate'] = params['license_plate'];
            await supplier.save();
            return supplier;
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

    async update_supplier_cargo(id: number, params: iSupplierCargo): Promise<object> {
        try {
            let supplier: any = await this.get_supply_info(id)
            supplier.geo_lat = params.geo_lat;
            supplier.geo_lon = params.geo_lon;
            supplier.allowed_weight = params.allowed_weight;
            supplier.current_cargo_weight = params.current_cargo_weight;
            supplier.current_number_of_pallets = params.current_number_of_pallets;
            supplier.max_number_of_pallets = params.max_number_of_pallets;
            await supplier.save();
            return supplier;
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }
}

export default new Supplier();