import {SupplyModel} from "../SupplyModel";

export class Suppliers {

    async get_suppliers(page = 1): Promise<object> {
        try {
            let limit = 20;
            if (page !== null && page > 1) {
                page = (page - 1) * limit;
            }
            return await SupplyModel.findAll({
                offset: page,
                limit: limit,
            })
        } catch (e) {
            return {"status": false, "error": e}
        }
    }

    async filter_suppliers(nearby): Promise<object> {
        try {
            return await SupplyModel.findAll({
                where: {}
            })
        } catch (e) {
            return {"status": false, "error": e}
        }
    }

}
