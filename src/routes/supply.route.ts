import * as express from "express"
import * as SupplyController from "../controller/supply.controller";

require("dotenv").config();
const router = express.Router();

const supply_url = process.env.API_V1 + "/supply";

router.get(supply_url + "/:supplier_id", SupplyController.get_supplier);
router.post(supply_url, SupplyController.post_new_supplier);

router.post(supply_url + "/:supplier_id", SupplyController.post_update_supplier_license_plate);
router.post(supply_url + "/:supplier_id/cargo", SupplyController.post_update_supplier_cargo);

router.get(supply_url + "/filter", SupplyController.post_new_supplier);

module.exports = router;