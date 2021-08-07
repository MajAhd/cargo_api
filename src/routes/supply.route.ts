import * as express from "express"
import * as SupplyController from "../controller/supply.controller";
import {CarrierMiddleware} from "../middleware/carrier.middleware";

require("dotenv").config();
const router = express.Router();

const supply_url = process.env.API_V1 + "/supply";

router.get(supply_url + "/:supplier_id", SupplyController.get_supplier);
router.post(supply_url, CarrierMiddleware, SupplyController.post_new_supplier);

router.post(supply_url + "/:supplier_id", CarrierMiddleware, SupplyController.post_update_supplier_license_plate);
router.post(supply_url + "/:supplier_id/cargo", CarrierMiddleware, SupplyController.post_update_supplier_cargo);

router.get(supply_url + "/filter", SupplyController.get_filter_suppliers);

module.exports = router;