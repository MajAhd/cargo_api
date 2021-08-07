import * as express from "express"

require("dotenv").config();
const router = express.Router();
import * as DemandController from "../controller/demand_controller"

const demand_url = process.env.API_V1 + "/demand";


router.post(demand_url + "/:user_id", DemandController.new_demand);
router.post(demand_url + "/:demand_id", DemandController.update_demand);

module.exports = router;