import Supplier from "../models/supply/instances/supplier";
import Validator from "validatorjs";
/*
   GET Supplier Info :
       - Basic Info
       - Geo Location
       - Parcel Info
 */
export const get_supplier = async (req, res, next) => {
    let supplier_id = req.params["supplier_id"];
    res.json({
        status: 200,
        data: await Supplier.get_supply_info(supplier_id)
    });
}

/*
   POST New Supplier Info :
   * is Required
       - Basic Info : *carrier_id , *license_plate
       - Geo Location : geo_lat, geo_lon
       - Parcel Info : allowed_weight, current_cargo_weight,
                       current_number_of_pallets, max_number_of_pallets
 */
export const post_new_supplier = async (req, res, next) => {

    let validation = new Validator(
        {
            carrier_id: req.body.carrier_id,
            license_plate: req.body.license_plate,
            geo_lat: req.body.geo_lat,
            geo_lon: req.body.geo_lon,
            allowed_weight: req.body.allowed_weight,
            current_cargo_weight: req.body.current_cargo_weight,
            current_number_of_pallets: req.body.current_number_of_pallets,
            max_number_of_pallets: req.body.max_number_of_pallets,
        },
        {
            carrier_id: "required|integer",
            license_plate: "required|max:255|string",
            geo_lat: "numeric",
            geo_lon: "numeric",
            allowed_weight: "integer",
            current_cargo_weight: "integer",
            current_number_of_pallets: "integer",
            max_number_of_pallets: "integer",
        }
    );
    if (validation.fails()) {
        res.json({
            status: 200,
            validations: validation.errors.all(),
        });
    } else if (validation.passes()) {
        res.json({
            status: 200,
            data: await Supplier.new_supplier(req.body)
        });
    }
}

/*
   POST Update Supplier Info :
   * is Required
       - Basic Info : *license_plate

 */
export const post_update_supplier_license_plate = async (req, res, next) => {
    let supplier_id = req.params["supplier_id"];
    let validation = new Validator(
        {
            license_plate: req.body.license_plate,
        },
        {
            license_plate: "required|max:255|string",
        }
    );
    if (validation.fails()) {
        res.json({
            status: 200,
            validations: validation.errors.all(),
        });
    } else if (validation.passes()) {
        res.json({
            status: 200,
            data: await Supplier.update_supplier_license_plate(supplier_id, req.body)
        });
    }


}

/*
   POST New Supplier GEO Info :
   * is Required
       - Geo Location : * geo_lat, * geo_lon
       - Parcel Info : * allowed_weight, * current_cargo_weight,
                   * current_number_of_pallets, * max_number_of_pallets
 */
export const post_update_supplier_cargo = async (req, res, next) => {
    let supplier_id = req.params["supplier_id"];
    let validation = new Validator(
        {
            geo_lat: req.body.geo_lat,
            geo_lon: req.body.geo_lon,
            allowed_weight: req.body.allowed_weight,
            current_cargo_weight: req.body.current_cargo_weight,
            current_number_of_pallets: req.body.current_number_of_pallets,
            max_number_of_pallets: req.body.max_number_of_pallets,
        },
        {
            geo_lat: "required|numeric",
            geo_lon: "required|numeric",
            allowed_weight: "required|integer",
            current_cargo_weight: "required|integer",
            current_number_of_pallets: "required|integer",
            max_number_of_pallets: "required|integer",
        }
    );
    if (validation.fails()) {
        res.json({
            status: 200,
            validations: validation.errors.all(),
        });
    } else if (validation.passes()) {
        res.json({
            status: 200,
            data: await Supplier.update_supplier_cargo(supplier_id, req.body)
        });
    }
}


/*
   GET Filter Suppliers :
   - Distance X km
   - Weight
 */
export const get_filter_suppliers = async (req, res, next) => {
    res.json({
        status: true,
    });
}