import {Supplier} from "../models/supply/instances/supplier";

/*
   Get Supplier Info :
       - Basic Info
       - Geo Location
       - Parcel Info
 */
export const get_supplier = async (req, res, next) => {
    let supplier_id = req.params["supplier_id"];
    let supplier = new Supplier(supplier_id)
    res.json({
        status: 200,
        data: await supplier.get_supply_info()
    });
}


export const new_supplier = async (req, res, next) => {
    res.json({
        status: true,
    });
}
export const update_supplier = async (req, res, next) => {
    res.json({
        status: true,
    });
}
export const update_supplier_geo = async (req, res, next) => {
    res.json({
        status: true,
    });
}
export const update_supplier_parcel = async (req, res, next) => {
    res.json({
        status: true,
    });
}

export const filter_suppliers = async (req, res, next) => {
    res.json({
        status: true,
    });
}