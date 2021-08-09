import {iDemand, iDemandCreate, iDemandUpdate} from "./demand_interface";
import {logger} from "../../../../config/logger";
import {DemandModel} from "../DemandModel";
import Suppliers from "../../supply/instances/suppliers"


class Demand implements iDemand {

    async get_demand(id: number): Promise<object | null> {
        try {
            return await DemandModel.findByPk(id);
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }
        }
    }

    async new_demand(params: iDemandCreate): Promise<object> {
        try {
            let saved_demand = await DemandModel.create({
                user_id: params.user_id,
                origin_lat: params.origin_lat,
                origin_lon: params.origin_lon,
                delivery_lat: params.delivery_lat,
                delivery_lon: params.delivery_lon,
                pallets_qtt: params.pallets_qtt,
                total_weight: params.total_weight,
            })
            await Suppliers.filter_suppliers(saved_demand, 10)
            return saved_demand;
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }

        }
    }

    async update_demand(id: number, params: iDemandUpdate): Promise<object> {
        try {
            let demand: any = await DemandModel.findByPk(id);
            if (demand) {
                demand.origin_lat = params.origin_lat;
                demand.origin_lon = params.origin_lon;
                demand.delivery_lon = params.delivery_lon;
                demand.delivery_lat = params.delivery_lat;
                demand.pallets_qtt = params.pallets_qtt;
                demand.total_weight = params.total_weight;
                await demand.save();
                return demand;
            }
            return {
                result: false,
                msg: "undefined data!"
            }


        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }

        }
    }

    async update_demand_status(id: number, params): Promise<object> {
        try {
            /*
             Status Demonstrate the status of Demand
             For example :
              by default :
              1 -> looking for cargo
              2 -> on progress
              3 -> Delivered
             */
            let demand: any = await DemandModel.findByPk(id);
            if (demand) {
                demand.status = params.status;
                await demand.save();
                return demand;
            }
            return {
                result: false,
                msg: "undefined data!"
            }
        } catch (e) {
            logger.log("error", e);
            return {
                result: false,
                msg: "Server didnt response!"
            }

        }
    }
}

export default new Demand();