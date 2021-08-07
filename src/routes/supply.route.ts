import * as express from "express"
import * as SupplyController from "../controller/supply.controller";

require("dotenv").config();
const router = express.Router();

const supply_url = process.env.API_V1 + "/supply";

router.get(supply_url + "/:supplier_id", SupplyController.get_supplier);

module.exports = router;