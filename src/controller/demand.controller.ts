import Demand from "../models/demand/instance/demand"
import Validator from "validatorjs";

/*
   GET Demand Info :
       - Geo Location
       - Parcel Info
 */
export const get_demand = async (req, res, next) => {
    let demand_id = req.params["demand_id"];
    res.json({
        status: 200,
        msg:"Get Demand",
        data: await Demand.get_demand(demand_id)
    });
}
/*
   POST New Demand  :
   * is Required
         *user_id ,
       - * Geo Location : origin_lat ,origin_lon , delivery_lat , delivery_lon
       - * Parcel Info : total_weight , pallets_qtt
 */
export const post_new_demand = async (req, res, next) => {
    let validation = new Validator(
        {
            user_id: req.body.user_id,
            origin_lat: req.body.origin_lat,
            origin_lon: req.body.origin_lon,
            delivery_lat: req.body.delivery_lat,
            delivery_lon: req.body.delivery_lon,
            total_weight: req.body.total_weight,
            pallets_qtt: req.body.pallets_qtt,
        },
        {
            user_id: "required|integer",
            origin_lat: "required|numeric",
            origin_lon: "required|numeric",
            delivery_lat: "required|numeric",
            delivery_lon: "required|numeric",
            total_weight: "required|integer",
            pallets_qtt: "required|integer",
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
            msg:"Save New Demand",
            data: await Demand.new_demand(req.body)
        });
    }
}


/*
   POST Update Demand  :
   * is Required
       - * Geo Location : origin_lat ,origin_lon , delivery_lat , delivery_lon
       - * Parcel Info : total_weight , pallets_qtt
 */

export const post_update_demand = async (req, res, next) => {
    let demand_id = req.params["demand_id"];
    let validation = new Validator(
        {
            origin_lat: req.body.origin_lat,
            origin_lon: req.body.origin_lon,
            delivery_lat: req.body.delivery_lat,
            delivery_lon: req.body.delivery_lon,
            total_weight: req.body.total_weight,
            pallets_qtt: req.body.pallets_qtt,
        },
        {
            origin_lat: "required|numeric",
            origin_lon: "required|numeric",
            delivery_lat: "required|numeric",
            delivery_lon: "required|numeric",
            total_weight: "required|integer",
            pallets_qtt: "required|integer",
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
            msg:"Update Demand",
            data: await Demand.update_demand(demand_id, req.body)
        });
    }
}

/*
   POST Update Demand status :
   * is Required
       - * status
 */
export const post_demand_status = async (req, res, next) => {
    let demand_id = req.params["demand_id"];
    let validation = new Validator(
        {
            status: req.body.status,
        },
        {
            status: "required|integer",
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
            msg:"Update Demand Status",
            data: await Demand.update_demand_status(demand_id, req.body)
        });
    }
}