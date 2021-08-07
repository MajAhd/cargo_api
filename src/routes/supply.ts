import * as express from "express"
import * as SupplyController from "../controller/supply_controller";

require("dotenv").config();
const router = express.Router();

const supply_url = process.env.API_V1 + "/supply";

router.get(supply_url, SupplyController.filter_suppliers);

module.exports = router;