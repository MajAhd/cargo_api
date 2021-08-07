export interface iSupply {

    get_supply_info(id: number): object | null;

    new_supplier(params: iSupplier): object;

    update_supplier_license_plate(id: number, params: object): object;

    update_supplier_cargo(id: number, params: iSupplierCargo): object;
}

export interface iSupplier {
    license_plate: string,
    carrier_id: number,
    geo_lat: number,
    geo_lon: number,
    allowed_weight: number,
    current_cargo_weight: number,
    current_number_of_pallets: number,
    max_number_of_pallets: number,
}

export interface iSupplierCargo {
    geo_lat: number,
    geo_lon: number,
    allowed_weight: number,
    current_cargo_weight: number,
    current_number_of_pallets: number,
    max_number_of_pallets: number,
}