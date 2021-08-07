export interface iSupply {
    id: number;
    license_plate?: string;

    get_supply_info(): object;

    new_supplier(carrier_id, license_plate): object;

    update_supplier_license_plate(license_plate: string): object;

    update_supplier_geo_info(geo_lat, geo_lon): object;

    update_supplier_parcel_info(allowed_weight, current_cargo_weight, current_number_of_pallets, max_number_of_pallets): object;
}
