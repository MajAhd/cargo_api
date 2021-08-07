import {SupplierAbstract} from "./supplier_abstract";
import {iSupply} from "./supply_interface";
import {SupplyModel} from "../SupplyModel";

export class Supplier extends SupplierAbstract implements iSupply {
    id: number;

    constructor(id) {
        super()
        this.id = id
    }

    async new_supplier(carrier_id, license_plate): Promise<object | null | boolean> {
        try {
            return await SupplyModel.create({
                license_plate: license_plate,
                carrier_id: carrier_id,
            })
        } catch (e) {
            return false
        }
    }

    async update_supplier_license_plate(license_plate: string): Promise<object | null | boolean> {
        try {
            let supplier: any = await SupplyModel.findByPk(this.id)
            supplier['license_plate'] = license_plate;
            await supplier.save();
            return supplier;

        } catch (e) {
            return false
        }
    }

    async update_supplier_geo_info(geo_lat, geo_lon): Promise<object | null | boolean> {
        try {
            let supplier: any = await this.get_supplier_geo()
            supplier.geo_lat = geo_lat;
            supplier.geo_lon = geo_lon;
            await supplier.save();
            return supplier;
        } catch (e) {
            return false
        }
    }

    async update_supplier_parcel_info(allowed_weight, current_cargo_weight,
                                      current_number_of_pallets, max_number_of_pallets)
        : Promise<object | null | boolean> {
        try {
            let supplier: any = await this.get_supplier_parcel()
            supplier.allowed_weight = allowed_weight;
            supplier.current_cargo_weight = current_cargo_weight;
            supplier.current_number_of_pallets = current_number_of_pallets;
            supplier.max_number_of_pallets = max_number_of_pallets;
            await supplier.save();
            return supplier;

        } catch (e) {
            return false
        }
    }
}
